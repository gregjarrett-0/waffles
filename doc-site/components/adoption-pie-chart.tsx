import { VictoryPie } from 'victory';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { mediaQuery } from '@datacamp/waffles/helpers';

const wrapperStyle = css`
  position: relative;
  height: 300px;

  ${mediaQuery.aboveLarge} {
    height: auto;
  }
`;

const labelStyle = css`
  position: absolute;
  font-size: ${tokens.fontSizes.large};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

type AdoptionComponentsChartProps = {
  label: string;
  data: unknown[];
  colorScale: string[];
};

// Simple pie chart with label in the middle
function AdoptionPieChart({
  label,
  data,
  colorScale,
}: AdoptionComponentsChartProps) {
  return (
    <div css={wrapperStyle}>
      <Text css={labelStyle}>{label}</Text>
      <VictoryPie
        data={data}
        labels={() => null}
        colorScale={colorScale}
        innerRadius={80}
        padAngle={0.4}
      />
    </div>
  );
}

export default AdoptionPieChart;
