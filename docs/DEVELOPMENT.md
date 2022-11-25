# Waffles local development guide

All **Waffles** components and their tests exist in the `src` directory with matching official documentation in the `doc-site` folder. All npm scripts are run from the root — there is no need to navigate to sub-directories.

## 🏆 Core principles

1. Release process is fully **automated**, including publishing to npm, version bumps, and changelog generation
2. Has a lightweight isolated **component development environment** — Workbench
3. Official documentation and Workbench consumes the **same modules** that are later published to npm
4. All tests are **co-located** with components, both unit and e2e stories
5. Local development and production environments are **identical** — you can execute all commands locally

## 💻 Before you start

- Make sure you have a compatible version of **node** installed: **16+**
- Install the latest version of **yarn** package manager: **1.22+**
- Run **yarn** in the root directory to install all dependencies

## 🎨 Coding style guidelines

Please see the [Coding Style Guidelines](https://github.com/datacamp/waffles/blob/master/docs/CODING_STYLE.md) overview.

## 🔧 Workbench

**Workbench** is a lightweight _local development environment_ created specifically for updating existing or developing new components.

To start **Workbench** run `yarn workbench` npm script and navigate to `http://localhost:4040`. You will be presented with an empty canvas.

### Adding components to workbench

To add a component to **Workbench**: navigate to `workbench/workbench.tsx` and import the component as you would in a regular application. Let's use `button` as an example:

```js
import { Button } from '@datacamp/waffles/button';

function Workbench() {
  return <Button>Hello there!</Button>;
}

export default Workbench;
```

Now when you modify the imported component in `src/button` the changes will be automatically reflected in the **Workbench** preview.

ℹ️ When you're finished **DO NOT commit** `workbench/workbench.tsx` file. Please leave it pristine for other developers.

### Useful commands for local component development

- To run unit tests with Jest run `yarn test:unit`
- To run e2e Cypress stories test suites run `yarn test:stories`
- To check for common coding errors run `yarn lint`
- To format code with prettier run `yarn format`
- To verify commits messages run `yarn lint:commits`

## 📄 Docs website

To update the official **Waffles** documentation run `yarn doc:dev` then navigate to `http://localhost:3000`.

All documentation is built using the [NextJS](https://nextjs.org/docs) framework. Pages are placed in `doc-site/pages` directory. For writing component documentation we use [mdx](https://mdxjs.com/), a flavor of markdown, which is accessible for technical and non-technical people.

Components used internally by the documentation can be found in the `doc-site/components` folder.

### Component props

Each prop of each component should be documented by an appropriate comment above it. If the prop has a default value, then an additional comment with a prefix can be added below the first to indicate this value. Afterwards, a preview of the available props (via `PropsTable`) can be auto-generated.

```ts
type ButtonProps = {
  /* Defines the size of the button. In most cases the default should be used. */
  /* @default medium */
  size?: 'small' | 'medium' | 'large';
  /* [skip docs] */
  children: React.ReactNode;
};
```

In the comments regular markdown can be used. If for whatever reason you don't want a prop to appear in auto-generated preview put **[skip docs]** above it.

## 🧪 Tests

> Write tests. Not too many. Mostly integration.

In **Waffles** there are two kinds of tests to keep the codebase healthy and of high quality.

### Unit tests

To run unit tests run `yarn test:unit` npm script.

Regular unit tests are placed in a `__tests__` sub-directory of each component and each test file has a `.spec.tsx` extension. We are using the [Jest](https://jestjs.io/docs/getting-started) test runner and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### Stories

To test stories use `yarn test:stories` command. Cypress test runner should open shortly, and each story could be inspected one by one.

Stories are Waffle's _integration_ and _visual regression_ tests. Similar to unit tests, they are placed with each component in a `__tests__` sub-directory. Each **story** lives in a separate `.story.tsx` file and should be added to the component's e2e test suite in the appropriate `.e2e.ts` file. We are using [Cypress](https://docs.cypress.io/) to run these tests. For example, to load the story placed in `basic-button.story.tsx` file just run `cy.loadStory('basic-button')`.

It is also possible to test for various **accessibility (a11y) violations** against [WCAG 2.1 AA guidelines](https://www.w3.org/TR/WCAG21/) by using `cy.a11yCheck()`.

Under the hood **Workbench** runs these stories.

## 🖼️ Design Tokens, Assets and Icons

Design tokens, assets and icons are generated from source files using their matching `generate` scripts:

- **design tokens** are generated based on `src/tokens/tokens.json` file, which contains definitions compatible with [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) plugin, by running `generate:design-tokens` command
- **assets** are generated based on SVG files from the `src/asset/raw` directory via the `generate:assets` command
- **icons** are generated based on SVG files from the `src/icon/raw` directory via the `generate:icons` command

The output is:

- **design tokens**: a `src/tokens/tokens.ts` file
- **assets**: new React components in the `src/asset/generated` folder and an updated `src/asset/index.ts` file
- **icons**: new React components in the `src/icon/generated` folder and an updated `src/icon/index.ts` file

ℹ️ After adding new; design tokens, assets or icons - please run the appropriate `generate` script(s). After this **commit** the resulting files. That way they can be easily consumed internally.

## 📦 Releases

To make the release process and versioning easier we use [Semantic Versioning](https://semver.org/). On each commit, code is automatically formatted and the commit message is verified to check it adheres to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

The release process is _fully automated_, which makes proper commits messages critically important. Often used commit types include: `feat:`, `fix:`, `chore:`, `docs:`, `perf:`, `test:`. It is also possible to add a scope to commit message, e.g. `feat(button):`, `fix(side-navigation)`.

ℹ️ If you are only tweaking documentation or internal scripts, feel free to skip releasing by adding **[skip ci]** to the body of the last commit of your PR.

## 📊 Adoption tracker

The Waffles adoption overview is available in [Adoption](https://waffles-next.datacamp.com/overview/adoption) section of our docs.

Because gathering stats for all _DataCamp Engineering_ repositories which are using any version of **Waffles** takes around 40 minutes it's done as asynchronous cron job once a week. New report is created which is persisted in _Waffles S3 bucket_, and therefore could be easily consumed by regular docs releases. The standalone preview of raw data is available at [waffles-next.datacamp.com/adoption-report.json](https://waffles-next.datacamp.com/adoption-report.json).

To make local development of adoption overview docs easy, there is sample of `adoption-report.json` already committed. It will be replaced during deployment on CI/CD by real data.

How it works in CI/CD environment:

- New `track_adoption` workflow runs once a week. It's responsible for generating Waffles adoption report and deploying new docs with nicely visualized overview:
  - Regular `build_and_test` job runs to install dependencies required for adoption script.
  - Simple [track-adoption.js](https://github.com/datacamp/waffles/blob/master/tools/track-adoption.js) script is executed. It gathers all relevant data and writes it to [doc-site/adoption/adoption-report.json](https://github.com/datacamp/waffles/tree/master/doc-site/adoption/adoption-report.json) file.
  - Whole `adoption-report.json` is afterwards uploaded to the root of _Waffles S3 bucket_. Later this data is consumed by regular `build_test_release` workflow.
  - New docs website is built, and based on data from `adoption-report.json` new [Adoption](https://waffles-next.datacamp.com/overview/adoption) page is created.
- A small tweak to regular `build_test_release` workflow was required:
  - When changes hit `master` branch, before docs got deployed, most up to date `adoption-report.json` is copied from _Waffles S3 bucket_ to `doc-site/adoption/`. This way there is no need to run adoption script on every regular release and slow it down.
