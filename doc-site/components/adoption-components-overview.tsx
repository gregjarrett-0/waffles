import colorScale from 'helpers/color-scale';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { mediaQuery } from '@datacamp/waffles/helpers';

import { ADOPTION_TOP_COMPONENTS_COUNT } from './constants';
import PieChart from './adoption-pie-chart';
import ComponentsList from './adoption-components-list';

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
    justify-items: start;
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

// Transform data from adoption report to structure require by victory chart
function transformComponentsData(componentsData: AdoptionComponentsStats[]) {
  let compactData = [];

  if (componentsData.length > 10) {
    const topComponents = componentsData.slice(
      0,
      ADOPTION_TOP_COMPONENTS_COUNT,
    );
    const otherComponentsCount = componentsData
      .slice(ADOPTION_TOP_COMPONENTS_COUNT + 1, componentsData.length)
      .reduce((totalCount, component) => {
        return totalCount + component.count;
      }, 0);

    compactData = topComponents.concat({
      name: 'Other',
      count: otherComponentsCount,
    });
  } else {
    compactData = componentsData;
  }

  return compactData.map((component) => {
    return {
      x: component.name,
      y: component.count,
    };
  });
}

type AdoptionComponentsOverviewProps = {
  combinedComponents: {
    new: AdoptionComponentsStats[];
    old: AdoptionComponentsStats[];
  };
};

// Old and New Waffles components usage pie charts and lists
function AdoptionComponentsOverview({
  combinedComponents,
}: AdoptionComponentsOverviewProps) {
  return (
    <>
      {combinedComponents.new.length > 0 && (
        <section css={sectionStyle}>
          <div css={statsLayout}>
            <PieChart
              label="Waffles"
              data={transformComponentsData(combinedComponents.new)}
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
          <div css={statsLayout}>
            <PieChart
              label="Old Waffles"
              data={transformComponentsData(combinedComponents.old)}
              colorScale={oldWafflesColorScale}
            />
            <ComponentsList
              components={combinedComponents.old}
              colorScale={oldWafflesColorScale}
            />
          </div>
        </section>
      )}
    </>
  );
}

export default AdoptionComponentsOverview;
