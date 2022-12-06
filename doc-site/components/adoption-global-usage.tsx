import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Code } from '@datacamp/waffles/code';

import PieChart from './adoption-pie-chart';

const sectionStyle = css`
  margin-top: -${tokens.spacing.medium};
  margin-bottom: ${tokens.spacing.xlarge};

  ${mediaQuery.aboveLarge} {
    margin-bottom: ${tokens.spacing.medium};
  }
`;

const statsLayout = css`
  display: block;

  ${mediaQuery.aboveLarge} {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: ${tokens.spacing.medium};
    align-items: center;
  }
`;

const listStyle = css`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${tokens.spacing.small};

  ${mediaQuery.aboveLarge} {
    flex-direction: column;
  }
`;

type CountStyleOptions = {
  colorScale: string[];
  index: number;
};

function countStyle({ colorScale, index }: CountStyleOptions) {
  return css`
    background-color: ${colorScale[index]};
    margin-left: ${tokens.spacing.xsmall};
  `;
}

const usageColorScale = [
  tokens.colors.green,
  tokens.colors.orange,
  tokens.colors.yellow,
];

type UsageData = {
  all: number;
  new: number;
  old: number;
};

function getPercentages(usageData: UsageData) {
  const newProjectsPercentage =
    Math.round((usageData.new / usageData.all) * 1000) / 10;
  const oldProjectsPercentage =
    Math.round((usageData.old / usageData.all) * 1000) / 10;
  const bothProjectsPercentage =
    Math.round((100 - newProjectsPercentage - oldProjectsPercentage) * 10) / 10;

  return [
    {
      name: 'Waffles only',
      percentage: newProjectsPercentage,
    },
    {
      name: 'Old Waffles only',
      percentage: oldProjectsPercentage,
    },
    {
      name: 'Both',
      percentage: bothProjectsPercentage,
    },
  ];
}

// Transform data to structure expected by victory chart
function transformUsageData(percentages: ReturnType<typeof getPercentages>) {
  return percentages.map((stats) => {
    return {
      x: stats.name,
      y: stats.percentage,
    };
  });
}

type AdoptionGlobalUsageProps = {
  usageData: UsageData;
};

// Show which versions of Waffles are used in each project
function AdoptionGlobalUsage({ usageData }: AdoptionGlobalUsageProps) {
  const projectsPercentages = getPercentages(usageData);

  return (
    <section css={sectionStyle}>
      <div css={statsLayout}>
        <PieChart
          label="Version"
          data={transformUsageData(projectsPercentages)}
          colorScale={usageColorScale}
        />
        <ul css={listStyle}>
          {projectsPercentages.map((stats, index) => {
            return (
              <li key={`percentages-${stats.name}`}>
                <Text>{stats.name}</Text>
                <Code
                  size="medium"
                  css={countStyle({ colorScale: usageColorScale, index })}
                >
                  {stats.percentage}%
                </Code>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default AdoptionGlobalUsage;
