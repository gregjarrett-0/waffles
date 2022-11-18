import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';

import AdoptionComponents from './adoption-components';

import type { AdoptionProjectStats, AdoptionComponentsStats } from '../types';

const cardStyle = css`
  margin-bottom: ${tokens.spacing.medium};
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

function getGlobalComponentsStats(data: AdoptionProjectStats[]) {
  const totalNewComponents: AdoptionComponentsStats[] = [];
  const totalOldComponents: AdoptionComponentsStats[] = [];

  data.forEach((project) => {
    project.components.new.forEach((component) => {
      const existingComponentIndex = totalNewComponents.findIndex(
        (existingComponent) => {
          return existingComponent.name === component.name;
        },
      );

      if (existingComponentIndex >= 0) {
        totalNewComponents[existingComponentIndex] = {
          name: component.name,
          count:
            totalNewComponents[existingComponentIndex].count + component.count,
        };
      } else {
        totalNewComponents.push({
          name: component.name,
          count: component.count,
        });
      }
    });

    project.components.old.forEach((component) => {
      const existingComponentIndex = totalOldComponents.findIndex(
        (existingComponent) => {
          return existingComponent.name === component.name;
        },
      );

      if (existingComponentIndex >= 0) {
        totalOldComponents[existingComponentIndex] = {
          name: component.name,
          count:
            totalOldComponents[existingComponentIndex].count + component.count,
        };
      } else {
        totalOldComponents.push({
          name: component.name,
          count: component.count,
        });
      }
    });
  });

  return {
    new: totalNewComponents.sort(sortByCount),
    old: totalOldComponents.sort(sortByCount),
  };
}

type AdoptionComponentsGlobalProps = {
  data: AdoptionProjectStats[];
};

function AdoptionComponentsGlobal({ data }: AdoptionComponentsGlobalProps) {
  return (
    <Card disableHoverEffect css={cardStyle}>
      <Heading size="large">Global components stats</Heading>
      <AdoptionComponents combinedComponents={getGlobalComponentsStats(data)} />
    </Card>
  );
}

export default AdoptionComponentsGlobal;
