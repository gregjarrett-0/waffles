import colorScale from 'helpers/color-scale';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';

import ComponentsList from './adoption-components-list';
import ComponentsChart from './adoption-components-chart';

import type { AdoptionComponentsStats } from '../types';

const sectionStyle = css`
  margin-top: ${tokens.spacing.medium};
`;

const statsLayout = css`
  display: block;

  ${mediaQuery.aboveLarge} {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: ${tokens.spacing.medium};
    align-items: start;
  }
`;

const newWafflesColorScale = colorScale(
  tokens.colors.green,
  tokens.colors.greenLight,
);
const oldWafflesColorScale = colorScale(
  tokens.colors.orange,
  tokens.colors.orangeLight,
);

type AdoptionComponentsProps = {
  combinedComponents: {
    new: AdoptionComponentsStats;
    old: AdoptionComponentsStats;
  };
};

function AdoptionComponents({ combinedComponents }: AdoptionComponentsProps) {
  return (
    <section css={sectionStyle}>
      <Heading size="medium">Components usage</Heading>
      {combinedComponents.new.length > 0 && (
        <section css={sectionStyle}>
          <div css={statsLayout}>
            <ComponentsChart
              label="New"
              components={combinedComponents.new}
              colorScale={newWafflesColorScale}
            />
            <ComponentsList
              components={combinedComponents.new}
              colorScale={newWafflesColorScale}
            />
          </div>
        </section>
      )}
      {combinedComponents.old.length > 0 && (
        <section css={sectionStyle}>
          <div
            css={css`
              ${statsLayout}
              margin-top: -${tokens.spacing.xlarge};
            `}
          >
            <ComponentsChart
              label="Old"
              components={combinedComponents.old}
              colorScale={oldWafflesColorScale}
            />
            <ComponentsList
              components={combinedComponents.old}
              colorScale={oldWafflesColorScale}
            />
          </div>
        </section>
      )}
    </section>
  );
}

export default AdoptionComponents;
