#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { formatContentWithPrettier } = require('./helpers/formatting');

// Return full path to main component e.g. src/button, based on provided path to story
function componentDirectoryName(storyPath) {
  return storyPath.match(/^src\/([\w-]+)\//)[1];
}

// Return updated file name based on provided path to story
function newFileName(storyPath) {
  return `${storyPath.match(/([\w-]+)\.story.tsx$/)[1]}.tsx`;
}

// Update paths to point to prebuilt modules
function contentWithUpdatedImports(storyContent, componentDirectoryName) {
  return storyContent
    .replace(/from '..\/..\/(.+)'/g, "from '@datacamp/waffles/$1'")
    .replace('../index', `@datacamp/waffles/${componentDirectoryName}`);
}

// Copy and enhance all stories found within src to workbench/pages/stories to run cypress tests against them
function prepareWorkbenchStories() {
  const workbenchStoriesPath = path.resolve(
    __dirname,
    '../workbench/pages/stories',
  );

  if (!fs.existsSync(workbenchStoriesPath)) {
    fs.mkdirSync(workbenchStoriesPath, { recursive: true });
  }

  const storiesPaths = glob.sync('src/**/*.story.tsx');

  storiesPaths.forEach((storyPath) => {
    const componentDir = componentDirectoryName(storyPath);
    const fileName = newFileName(storyPath);

    const storyContent = fs.readFileSync(storyPath, { encoding: 'utf-8' });

    const updatedImports = contentWithUpdatedImports(
      storyContent,
      componentDir,
    );

    fs.writeFileSync(
      path.join(workbenchStoriesPath, fileName),
      formatContentWithPrettier(updatedImports),
    );
  });
}

prepareWorkbenchStories();
