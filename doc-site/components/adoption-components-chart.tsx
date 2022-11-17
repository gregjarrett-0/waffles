import { VictoryPie } from 'victory';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { mediaQuery } from '@datacamp/waffles/helpers';

import { ADOPTION_TOP_COMPONENTS_COUNT } from './constants';

import type { AdoptionComponentsStats } from '../types';

const wrapperStyle = css`
  position: relative;
  height: 300px;

  ${mediaQuery.aboveLarge} {
    height: auto;
  }
`;

const labelStyle = css`
  position: absolute;
  font-size: ${tokens.fontSizes.xlarge};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// Transform data from adoption report to structure require by victory chart
function transformComponentsData(componentsData: AdoptionComponentsStats) {
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

type AdoptionComponentsChartProps = {
  label: string;
  components: AdoptionComponentsStats;
  colorScale: string[];
};

function AdoptionComponentsChart({
  label,
  components,
  colorScale,
}: AdoptionComponentsChartProps) {
  return (
    <div css={wrapperStyle}>
      <Text css={labelStyle}>{label}</Text>
      <VictoryPie
        data={transformComponentsData(components)}
        labels={() => null}
        colorScale={colorScale}
        innerRadius={80}
      />
    </div>
  );
}

export default AdoptionComponentsChart;
