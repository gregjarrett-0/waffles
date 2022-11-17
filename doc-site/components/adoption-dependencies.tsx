import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Heading } from '@datacamp/waffles/heading';
import { Code } from '@datacamp/waffles/code';

import type { AdoptionDependenciesStats } from '../types';

const sectionStyle = css`
  margin-top: ${tokens.spacing.medium};
`;

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

function parseMinorVersion(version: string) {
  return parseInt(version.split('.')[1], 10);
}

function colorCodedVersion(currentVersion: string, version: string) {
  const currentMinor = parseMinorVersion(currentVersion);
  const minor = parseMinorVersion(version);
  const difference = currentMinor - minor;

  if (difference >= 6) {
    return tokens.colors.red;
  } else if (difference >= 2) {
    return tokens.colors.yellow;
  }

  return tokens.colors.green;
}

type AdoptionDependenciesProps = {
  dependencies: AdoptionDependenciesStats;
  currentVersion: string;
};

function AdoptionDependencies({
  dependencies,
  currentVersion,
}: AdoptionDependenciesProps) {
  return (
    <section css={sectionStyle}>
      <Heading size="medium">Dependencies</Heading>
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
    </section>
  );
}

export default AdoptionDependencies;
