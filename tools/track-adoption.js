/* eslint-disable no-console */
const chalk = require('chalk');
const { Octokit } = require('@octokit/rest');

const path = require('path');
const fs = require('fs');

const octokit = new Octokit({ auth: process.env.TOKEN });

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

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
    await wait(20000);
    return items.concat(await getRepos(page + 1));
  }

  return items;
}

// Repos names with package.json paths (multiple in case of monorepos)
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

    if (existingRepoIndex > 0) {
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

        const existingDependencyIndex = noDuplicates.findIndex((dependency) => {
          return dependency.name === name;
        });

        if (existingDependencyIndex >= 0) {
          const existingVersions =
            noDuplicates[existingDependencyIndex].versions;

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

const adoptionTrackerPath = path.resolve(__dirname, '../doc-site/adoption');

async function run() {
  // Get list of all repos with package.json in datacamp-engineering org
  console.log(chalk.magentaBright('Fetching repositories data...'));
  const repos = await getRepos();
  const cleanRepos = cleanRawReposData(repos);

  await wait(20000);

  // Examine each package.json if it contains Waffles package, and list it with all associated versions
  console.log(
    chalk.magentaBright('Fetching Waffles packages versions for each repo...'),
  );
  const wafflesVersionsByRepo = await getWafflesDependencies(cleanRepos);

  if (!fs.existsSync(adoptionTrackerPath)) {
    fs.mkdirSync(adoptionTrackerPath);
  }

  fs.writeFileSync(
    path.join(adoptionTrackerPath, 'report.json'),
    JSON.stringify(wafflesVersionsByRepo),
  );
}

run();
