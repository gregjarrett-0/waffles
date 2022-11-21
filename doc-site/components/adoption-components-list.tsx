import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Code } from '@datacamp/waffles/code';

import { ADOPTION_TOP_COMPONENTS_COUNT } from './constants';

import type { AdoptionComponentsStats } from '../types';

const MAX_COMPONENTS_PER_ROW = 14;
const MAX_COMPONENTS_PER_COLUMN = 3;

const listStyle = css`
  padding: 0;
  list-style: none;
  gap: ${tokens.spacing.xsmall} ${tokens.spacing.small};
  max-width: 500px;
`;

type AdoptionComponentsListProps = {
  components: AdoptionComponentsStats[];
  colorScale: string[];
};

function AdoptionComponentsList({
  components,
  colorScale,
}: AdoptionComponentsListProps) {
  const componentsCount = components.length;

  return (
    <ul
      css={css`
        ${listStyle}
        display: grid;
        grid-template-columns: repeat(auto-fill, 150px);
        justify-content: center;
        margin: 0 auto;

        ${componentsCount <= MAX_COMPONENTS_PER_COLUMN &&
        css`
          display: flex;
        `}

        ${mediaQuery.aboveLarge} {
          margin: 0;

          ${componentsCount <= MAX_COMPONENTS_PER_ROW &&
          css`
            display: flex;
            flex-direction: column;
          `}
          ${componentsCount > MAX_COMPONENTS_PER_ROW &&
          css`
            display: grid;
            grid-template-rows: repeat(${MAX_COMPONENTS_PER_ROW}, 1fr);
            grid-auto-flow: column;
          `}
        }
      `}
    >
      {components.map((component, index) => {
        return (
          <li key={`component-${component.name}`}>
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
