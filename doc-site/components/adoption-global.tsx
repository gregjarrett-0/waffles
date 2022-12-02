import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';

import GlobalUsage from './adoption-global-usage';
import ComponentsOverview from './adoption-components-overview';

import type { AdoptionProjectStats, AdoptionComponentsStats } from '../types';

const cardStyle = css`
  margin: ${tokens.spacing.medium} 0;
  padding-bottom: ${tokens.spacing.large};
`;

function sortByCount(
  component1: AdoptionComponentsStats,
  component2: AdoptionComponentsStats,
) {
  if (component1.count < component2.count) {
    return 1;
  }
  if (component1.count > component2.count) {
    return -1;
  }

  return 0;
}

// Iterate through all projects and accumulate number of times each component is used based on Waffles version
function getComponentsStatsPerVersion(
  data: AdoptionProjectStats[],
  version: 'new' | 'old',
) {
  const totalComponents: AdoptionComponentsStats[] = [];

  data.forEach((project) => {
    project.components[version].forEach((component) => {
      const existingComponentIndex = totalComponents.findIndex(
        (existingComponent) => {
          return existingComponent.name === component.name;
        },
      );

      if (existingComponentIndex >= 0) {
        totalComponents[existingComponentIndex] = {
          name: component.name,
          count:
            totalComponents[existingComponentIndex].count + component.count,
        };
      } else {
        totalComponents.push({
          name: component.name,
          count: component.count,
        });
      }
    });
  });

  return totalComponents;
}

function getGlobalComponentsStats(data: AdoptionProjectStats[]) {
  const totalNewComponents = getComponentsStatsPerVersion(data, 'new');
  const totalOldComponents = getComponentsStatsPerVersion(data, 'old');

  return {
    new: totalNewComponents.sort(sortByCount),
    old: totalOldComponents.sort(sortByCount),
  };
}

type AdoptionGlobalProps = {
  projectsData: AdoptionProjectStats[];
  usageData: {
    all: number;
    new: number;
    old: number;
  };
};

// Global Waffles statistic of components and versions used across all DataCamp repos
function AdoptionGlobal({ projectsData, usageData }: AdoptionGlobalProps) {
  return (
    <Card disableHoverEffect css={cardStyle}>
      <Heading size="large">
        Breakdown of Waffles versions used within each project
      </Heading>
      <GlobalUsage usageData={usageData} />
      <Heading size="large">Component usage in all projects</Heading>
      <ComponentsOverview
        combinedComponents={getGlobalComponentsStats(projectsData)}
      />
    </Card>
  );
}

export default AdoptionGlobal;
