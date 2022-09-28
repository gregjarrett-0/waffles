/* eslint-disable no-console */
const chalk = require('chalk');
const { Octokit } = require('@octokit/rest');

const path = require('path');
const fs = require('fs');

const octokit = new Octokit({ auth: process.env.TOKEN });

type RawRepoData = {
  name: string;
  path: string;
  repository: {
    id: string;
    name: string;
    full_name: string;
  };
};

type CleanRawReposData = {
  [key: string]: string[];
};

type ReposDataWithPackageJson = {
  [key: string]: Array<{
    dependencies?: {
      [key: string]: string;
    };
  }>;
};

type WafflesReposData = {
  [key: string]: Array<{
    [key: string]: string;
  }>;
};

type CleanWafflesReposData = {
  [key: string]: {
    [key: string]: string[];
  };
};

async function wait() {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 6000);
  });
}

// Search for repos which contain package.json recursively until all pages of data are fetched
// Return raw data, with a lot of redundant information
async function getRepos(page = 0): Promise<RawRepoData[]> {
  const { data } = await octokit.search.code({
    q: 'org:datacamp-engineering+filename:package.json+dependencies+waffles',
    page,
    per_page: 100,
  });

  const items = data.items.map((item: RawRepoData) => {
    return { ...item };
  });

  console.log(chalk.grey(`${items.length} items found on page ${page}`));

  if (data.items.length > 0) {
    await wait();
    return items.concat(await getRepos(page + 1));
  }

  return items;
}

// Clean up raw repos data with duplicates removed: repo name as key, and array of paths as value (needed for monorepos)
function cleanRawReposData(repos: RawRepoData[]) {
  return repos.reduce<CleanRawReposData>((transformedRepos, repo) => {
    return {
      ...transformedRepos,
      [repo.repository.name]: transformedRepos[repo.repository.name]
        ? [...new Set(transformedRepos[repo.repository.name]).add(repo.path)]
        : [repo.path],
    };
  }, {});
}

// Replace paths with actual package JSON content
async function getReposPackageJsonContent(repos: CleanRawReposData) {
  const allData = await Promise.all(
    Object.entries(repos).map(async (entry) => {
      const [repoName, paths] = entry;

      const content = await Promise.all(
        paths.map(async (path) => {
          const { data } = await octokit.repos.getContent({
            owner: 'datacamp-engineering',
            repo: repoName,
            path,
          });

          return JSON.parse(Buffer.from(data.content, 'base64').toString());
        }),
      );

      return [repoName, content];
    }),
  );

  return Object.fromEntries(allData);
}

// Each repo with only Waffles dependencies instead of whole package JSON, still needs some clean up
function getReposWafflesDependencies(repos: ReposDataWithPackageJson) {
  return Object.fromEntries(
    Object.entries(repos).map((entry) => {
      const [repoName, packageJsons] = entry;

      const test = packageJsons.map((packageJson) => {
        if (packageJson.dependencies) {
          return Object.fromEntries(
            Object.entries(packageJson.dependencies).filter((entry) => {
              const [dependencyName] = entry;
              return dependencyName.startsWith('@datacamp/waffles');
            }),
          );
        }

        return {};
      });

      return [repoName, test];
    }),
  );
}

// Each repo with Waffles dependencies
function flattenDependencies(repos: WafflesReposData): CleanWafflesReposData {
  // Remove repos with no Waffles dependencies, and clean empty ones
  const noEmptyDeps = Object.entries(repos)
    .map((entry) => {
      const [repoName, dependencies] = entry;
      const filteredDependencies = dependencies.filter(
        (dependency) => Object.keys(dependency).length > 0,
      );
      return [repoName, filteredDependencies];
    })
    .filter((entry) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, dependencies] = entry;
      return dependencies.length > 0;
    });

  // Flatten array of dependency objects to single object
  // Each dependency is listed once with associated array of versions
  return Object.fromEntries(
    noEmptyDeps.map((entry) => {
      const repoName = entry[0];
      const dependenciesArray = entry[1] as { [key: string]: string }[];

      const flattenedDeps: { [key: string]: string[] } = {};

      dependenciesArray.forEach((deps) => {
        Object.entries(deps).forEach((entry) => {
          const [depName, version] = entry;

          // Add another version of dependency if it already exists (could happen for monorepos)
          if (Object.keys(flattenedDeps).includes(depName)) {
            const versions = [
              ...new Set(flattenedDeps[depName].concat(version)),
            ];
            flattenedDeps[depName] = versions;
          } else {
            flattenedDeps[depName] = [version];
          }
        });
      });

      return [repoName, flattenedDeps];
    }),
  );
}

const adoptionTrackerPath = path.resolve(__dirname, '../doc-site/adoption');

async function run() {
  // Get list of all repos with Waffles as dependency in datacamp-engineering org

  console.log(chalk.magentaBright('Fetching repositories data...'));

  const repos = await getRepos();
  const cleanRepos = cleanRawReposData(repos);
  await wait();

  console.log(chalk.magentaBright('Fetching package JSON(s)...'));

  const reposPackageJsons = await getReposPackageJsonContent(cleanRepos);
  const onlyWafflesDependencies =
    getReposWafflesDependencies(reposPackageJsons);
  const cleanWafflesDependencies = flattenDependencies(onlyWafflesDependencies);

  console.log(
    chalk.green.bold(
      'Number of repositories ' +
        chalk.yellow.bold(Object.keys(cleanWafflesDependencies).length),
    ),
  );

  // Write info about dependencies to file

  if (!fs.existsSync(adoptionTrackerPath)) {
    fs.mkdirSync(adoptionTrackerPath);
  }

  fs.writeFileSync(
    path.join(adoptionTrackerPath, 'dependencies.json'),
    JSON.stringify(cleanWafflesDependencies),
  );
}

run();
