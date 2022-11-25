#!/usr/bin/env node

/* eslint-disable no-console */
const chalk = require('chalk');
const { Octokit } = require('@octokit/rest');

const path = require('path');
const fs = require('fs');
const { getPascalCase } = require('./helpers/formatting');

const octokit = new Octokit({ auth: process.env.CIRCLECI_GITHUB_TOKEN });

// Utils

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

function getComponentsCount(componentNames) {
  return componentNames.reduce((componentsCounts, componentName) => {
    const existingComponentIndex = componentsCounts.findIndex((component) => {
      return component.name === componentName;
    });

    // Increase count if component already exist
    if (existingComponentIndex >= 0) {
      return [
        ...componentsCounts.slice(0, existingComponentIndex),
        {
          name: componentName,
          count: componentsCounts[existingComponentIndex].count + 1,
        },
        ...componentsCounts.slice(
          existingComponentIndex + 1,
          componentsCounts.length,
        ),
      ];
    }

    return componentsCounts.concat({
      name: componentName,
      count: 1,
    });
  }, []);
}

function sortByName(repo1, repo2) {
  if (repo1.name < repo2.name) {
    return -1;
  }
  if (repo1.name > repo2.name) {
    return 1;
  }

  return 0;
}

function sortByCount(component1, component2) {
  if (component1.count < component2.count) {
    return 1;
  }
  if (component1.count > component2.count) {
    return -1;
  }

  return 0;
}

// Some monorepo project have it's own waffles directories and final import declarations may look similar to New Waffles ones
const newWafflesComponentsWhitelist = [
  'AlertDialog',
  'Asset',
  'Avatar',
  'Badge',
  'Brand',
  'Button',
  'Card',
  'Chapeau',
  'Checkbox',
  'Code',
  'CodeBlock',
  'ContentContainer',
  'Dialog',
  'Display',
  'Drawer',
  'EmptyState',
  'ErrorBoundary',
  'FormField',
  'Heading',
  'Icon',
  'Input',
  'Link',
  'Loader',
  'Menu',
  'Notification',
  'Paragraph',
  'Pill',
  'Popover',
  'Portal',
  'Progress',
  'Radio',
  'Resizable',
  'ScreenReaderOnly',
  'Select',
  'SideNavigation',
  'SkillTag',
  'Slider',
  'Switch',
  'Table',
  'Tabs',
  'Text',
  'TextArea',
  'Toast',
  'Tooltip',
];

// 1a.
// Search for repos which contain package.json
// Return raw data, with lots of redundant information
// Final data structure (only relevant bits):
// [
//   {
//     path: 'path-to-package-json',
//     repository: {
//       name: 'repo-name'
//     }
//   },
//   ...
// ]
async function getRepos(page = 0) {
  const { data } = await octokit.request('GET /search/code', {
    headers: {
      accept: 'application/vnd.github+json',
    },
    q: 'dependencies waffles org:datacamp-engineering filename:package.json',
    page,
    per_page: 100,
  });

  const { items } = data;

  // Fetch next data page recursively until all pages are fetched
  if (data.items.length > 0) {
    await wait(30000);
    return items.concat(await getRepos(page + 1));
  }

  return items;
}

// 1b.
// Leave only repos with package.json, and list all package.json paths (multiple in case of monorepos)
// Final data structure:
// [
//   {
//     name: 'repo-name',
//     paths: ['path-to-package-json1', 'path-to-package-json2']
//   },
//   ...
// ]
function cleanRawReposData(repos) {
  return repos.reduce((transformedRepos, repo) => {
    const existingRepoIndex = transformedRepos.findIndex((transformedRepo) => {
      return transformedRepo.name === repo.repository.name;
    });

    if (existingRepoIndex >= 0) {
      return [
        ...transformedRepos.slice(0, existingRepoIndex),
        {
          name: transformedRepos[existingRepoIndex].name,
          // Remove duplicates, because sometimes same repo data is fetched multiple times
          paths: [
            ...new Set(transformedRepos[existingRepoIndex].paths).add(
              repo.path,
            ),
          ],
        },
        ...transformedRepos.slice(
          existingRepoIndex + 1,
          transformedRepos.length,
        ),
      ];
    }

    return transformedRepos.concat({
      name: repo.repository.name,
      paths: [repo.path],
    });
  }, []);
}

// 2.
// Get list of Waffles packages with version (or multiple versions in case of monorepos) used by each repo in datacamp-engineering org
// Final data structure:
// [
//   {
//     name: "repo-name",
//     dependencies: [
//       {
//         name: "@datacamp/waffles",
//         versions: ["1.15.0", "1.13.0"]
//       },
//       {
//         name: "@datacamp/waffles-button",
//         versions: ["7.1.0"]
//       }
//     ]
//   },
//   ...
// ]
async function getWafflesDependencies(repos) {
  const allData = await Promise.all(
    repos.map(async (repo) => {
      // Contrary to search we don't have to worry about rate limiting when fetching files' content
      const packageJsonContent = await Promise.all(
        repo.paths.map(async (path) => {
          const { data } = await octokit.request(
            `GET /repos/datacamp-engineering/${repo.name}/contents/${path}`,
            {
              headers: {
                accept: 'application/vnd.github+json',
              },
            },
          );

          return JSON.parse(Buffer.from(data.content, 'base64').toString());
        }),
      );

      // Dependencies per package.json
      // Converted from object to entries
      // Return empty array if dependencies doesn't exist, e.g. project has only devDependencies
      const allDependencies = packageJsonContent.flatMap((content) => {
        return content.dependencies ? Object.entries(content.dependencies) : [];
      });

      // Include only waffles dependencies
      const wafflesDependencies = allDependencies.filter((dependency) => {
        const [name] = dependency;
        return name.startsWith('@datacamp/waffles');
      });

      // Transform dependencies from standard npm object to an array of object with name and list of versions, removing duplicates:
      // [
      //   {
      //     name: "@datacamp/waffles-button",
      //     versions: ["7.0.1", "8.2.0"]
      //   },
      //   ...
      // ]
      const transformedDependencies = [];

      wafflesDependencies.forEach((entry) => {
        const [name, version] = entry;
        const normalizedVersion = version.split(/(\d.*)/, 2)[1]; // Strip any special npm specific prefixes

        const existingDependencyIndex = transformedDependencies.findIndex(
          (dependency) => {
            return dependency.name === name;
          },
        );

        if (existingDependencyIndex >= 0) {
          const existingVersions =
            transformedDependencies[existingDependencyIndex].versions;

          // Remove same version duplicates
          transformedDependencies[existingDependencyIndex] = {
            name,
            versions: [...new Set(existingVersions).add(normalizedVersion)],
          };
        } else {
          // Convert version to an array so multiple ones could be added
          transformedDependencies.push({
            name,
            versions: [normalizedVersion],
          });
        }
      });

      return { name: repo.name, dependencies: transformedDependencies };
    }),
  );

  // Final cleanup of repos not containing any Waffles dependencies
  return allData.filter((repo) => {
    return repo.dependencies.length > 0;
  });
}

// 3.
// Enhance each repo dependencies data with info about components
// Final data structure:
// [
//   {
//     name: "repo-name",
//     dependencies: [
//       {
//         name: "@datacamp/waffles",
//         versions: ["1.15.0", "1.13.0"]
//       },
//       ...
//     ],
//     components: {
//       new: [
//         {
//           name: 'Button',
//           count: 15
//         },
//         {
//           name: 'Resizable',
//           count: 1
//         },
//         ...
//       ],
//       old: [
//         {
//           name: 'Button',
//           count: 5
//         },
//         {
//           name: 'FormElements',
//           count: 3
//         },
//         ...
//       ]
//     }
//   },
//   ...
// ]
async function getWafflesComponentsStats(reposWithDependencies) {
  // Fetch data for each repo sequentially so we can bypass rate limiting
  async function searchRepos() {
    let componentsData = [];

    for (const repo of reposWithDependencies) {
      console.log(
        chalk.grey('Fetching components data for ') +
          chalk.bold.gray(repo.name) +
          chalk.grey(' repo...'),
      );

      // Search for imports
      const { data } = await octokit.request('GET /search/code', {
        headers: {
          accept: 'application/vnd.github.text-match+json', // Get matching results for query
        },
        q: `datacamp/waffles repo:datacamp-engineering/${repo.name} in:file`,
        page: 0, // Just getting first 100 results
        per_page: 100,
      });

      await wait(30000);

      // Combine all fragments of multiple text matches into one string to run through regex
      const combinedTextFragments = data.items
        .flatMap((item) => {
          return item.text_matches;
        })
        .reduce((fragments, textMatch) => {
          return fragments.concat(' ', textMatch.fragment);
        }, '')
        .replace(/(\/waffles){2,}/gm, '/waffles'); // Merge multiple consecutive waffles occurrences

      // Extract count of New Waffles components
      const newWafflesImports = combinedTextFragments.match(
        /@datacamp\/waffles\/[-a-z]+/gm,
      );
      let newWafflesComponents = [];

      if (newWafflesImports) {
        const componentNames = newWafflesImports
          .map((importDeclaration) => {
            return getPascalCase(
              importDeclaration.split('@datacamp/waffles/')[1],
            );
          })
          .filter((name) => {
            return newWafflesComponentsWhitelist.includes(name);
          });

        newWafflesComponents = getComponentsCount(componentNames);
      }

      // Extract count of Old Waffles components
      const oldWafflesImports = combinedTextFragments.match(
        /@datacamp\/waffles-[-a-z]+/gm,
      );
      let oldWafflesComponents = [];

      if (oldWafflesImports) {
        const componentNames = oldWafflesImports.map((importDeclaration) => {
          return getPascalCase(importDeclaration.split('@datacamp/waffles')[1]);
        });

        oldWafflesComponents = getComponentsCount(componentNames);
      }

      componentsData.push({
        ...repo,
        components: {
          new: newWafflesComponents,
          old: oldWafflesComponents,
        },
      });
    }

    return componentsData;
  }

  const stats = await searchRepos();

  return stats;
}

// 4. Sort results
function sortResults(reposWithStats) {
  return reposWithStats.sort(sortByName).map((repo) => {
    return {
      ...repo,
      components: {
        new: repo.components.new.sort(sortByCount),
        old: repo.components.old.sort(sortByCount),
      },
    };
  });
}

const adoptionTrackerPath = path.resolve(__dirname, '../doc-site/adoption');

async function run() {
  // 1. Get list of all repos with package.json in datacamp-engineering org
  console.log(chalk.magentaBright('Fetching repositories data...'));
  const repos = await getRepos();
  const cleanRepos = cleanRawReposData(repos);

  await wait(30000);

  // 2. Examine each package.json if it contains Waffles package, and list it with all associated versions
  console.log(
    chalk.magentaBright('Fetching Waffles packages versions for each repo...'),
  );
  const wafflesVersionsByRepo = await getWafflesDependencies(cleanRepos);

  // 3. Gather components count for each repo
  console.log(
    chalk.magentaBright(
      'Gathering components usage stats (it may take a while)...',
    ),
  );
  const componentsStats = await getWafflesComponentsStats(
    wafflesVersionsByRepo,
  );

  // 4. Sort
  console.log(chalk.magentaBright('Sorting stats...'));
  const sortedStats = sortResults(componentsStats);

  // 5. Add timestamp and wrap stats with data object
  const finalReport = {
    createdAt: new Date(),
    data: sortedStats,
  };

  console.log(chalk.green.bold(`${sortedStats.length} projects tracked`));

  // Write results to file
  if (!fs.existsSync(adoptionTrackerPath)) {
    fs.mkdirSync(adoptionTrackerPath);
  }

  fs.writeFileSync(
    path.join(adoptionTrackerPath, 'adoption-report.json'),
    JSON.stringify(finalReport),
  );
}

run();
