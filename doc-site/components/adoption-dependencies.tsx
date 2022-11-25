import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Code } from '@datacamp/waffles/code';

import upgradeStatus from '../helpers/upgrade-status';

import type { AdoptionDependenciesStats } from '../types';

const listStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const listItemStyle = css`
  margin-bottom: 2px;
`;

const versionsWrapperStyle = css`
  display: inline-flex;
  gap: 2px;
  margin-left: ${tokens.spacing.xsmall};
`;

function colorCodedVersion(currentVersion: string, version: string) {
  const status = upgradeStatus(currentVersion, version);

  if (status === 'outdated') {
    return tokens.colors.red;
  } else if (status === 'slightlyOutdated') {
    return tokens.colors.yellow;
  }

  return tokens.colors.green;
}

type AdoptionDependenciesProps = {
  dependencies: AdoptionDependenciesStats[];
  currentVersion: string;
};

// List of dependencies with outdated versions highlighted (for New Waffles only)
function AdoptionDependencies({
  dependencies,
  currentVersion,
}: AdoptionDependenciesProps) {
  return (
    <ul css={listStyle}>
      {dependencies.map((dependency) => {
        const isNewWaffles = dependency.name === '@datacamp/waffles';

        return (
          <li key={`dependency-${dependency.name}`} css={listItemStyle}>
            <Text>{dependency.name}</Text>
            <span css={versionsWrapperStyle}>
              {dependency.versions.map((version) => {
                return (
                  <Code
                    key={`dependency-version-${version}`}
                    size="medium"
                    css={
                      isNewWaffles &&
                      css`
                        background-color: ${colorCodedVersion(
                          currentVersion,
                          version,
                        )};
                      `
                    }
                  >
                    {version}
                  </Code>
                );
              })}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default AdoptionDependencies;
