import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Code } from '@datacamp/waffles/code';

import { ADOPTION_TOP_COMPONENTS_COUNT } from './constants';

import type { AdoptionComponentsStats } from '../types';

const listStyle = css`
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${tokens.spacing.xsmall};
  max-width: 460px;

  ${mediaQuery.aboveLarge} {
    margin: 0;
    max-height: 360px;
    flex-direction: column;
  }
`;

const listItemStyle = css`
  list-style: none;
  width: 150px;
`;

type AdoptionComponentsListProps = {
  components: AdoptionComponentsStats[];
  colorScale: string[];
};

function AdoptionComponentsList({
  components,
  colorScale,
}: AdoptionComponentsListProps) {
  return (
    <div>
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
    </div>
  );
}

export default AdoptionComponentsList;
