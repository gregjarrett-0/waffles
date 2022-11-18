import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Code } from '@datacamp/waffles/code';

import versionStatus from '../helpers/version-status';

import type { AdoptionDependenciesStats } from '../types';

const listStyle = css`
  margin: 0;
  padding: 0;
`;

const listItemStyle = css`
  margin-bottom: 2px;
  list-style: none;
`;

const versionsWrapperStyle = css`
  display: inline-flex;
  gap: 2px;
  margin-left: ${tokens.spacing.xsmall};
`;

function colorCodedVersion(currentVersion: string, version: string) {
  const status = versionStatus(currentVersion, version);

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
