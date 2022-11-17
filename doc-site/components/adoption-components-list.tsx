import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Code } from '@datacamp/waffles/code';

import { ADOPTION_TOP_COMPONENTS_COUNT } from './constants';

import type { AdoptionComponentsStats } from '../types';

const listStyle = css`
  overflow: hidden;
  margin: 0 auto ${tokens.spacing.xlarge} auto;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${tokens.spacing.xsmall} ${tokens.spacing.medium};
  grid-auto-flow: row;
  max-width: 400px;

  ${mediaQuery.aboveLarge} {
    margin: ${tokens.spacing.xlarge} 0 0 0;
    grid-auto-flow: column;
    grid-template-rows: repeat(8, 1fr);
  }
`;

const listItemStyle = css`
  margin-bottom: 2px;
  list-style: none;
`;

type AdoptionComponentsListProps = {
  components: AdoptionComponentsStats;
  colorScale: string[];
};

function AdoptionComponentsList({
  components,
  colorScale,
}: AdoptionComponentsListProps) {
  return (
    <ul css={listStyle}>
      {components.map((component, index) => {
        return (
          <li key={`component-${component.name}`} css={listItemStyle}>
            <Text>{component.name}</Text>
            <Code
              size="medium"
              css={css`
                margin-left: ${tokens.spacing.xsmall};
                background-color: ${colorScale[
                  index > ADOPTION_TOP_COMPONENTS_COUNT
                    ? ADOPTION_TOP_COMPONENTS_COUNT
                    : index
                ]};
              `}
            >
              {component.count}
            </Code>
          </li>
        );
      })}
    </ul>
  );
}

export default AdoptionComponentsList;
