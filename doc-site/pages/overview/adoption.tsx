import React, { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Tabs } from '@datacamp/waffles/tabs';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';

import Layout from '../../components/content-layout';
import ProjectOverview from '../../components/adoption-project-overview';
import ComponentsGlobalStats from '../../components/adoption-components-global';
import allProjectsData from '../../adoption/adoption-report.json';
import metadata from '../../../package.json';

import type { AdoptionProjectStats } from '../../types';

const currentVersion = metadata.version;

const newWafflesOnlyProjects = allProjectsData.filter((project) => {
  return (
    project.dependencies.length === 1 &&
    project.dependencies.find((dependency) => {
      return dependency.name === '@datacamp/waffles';
    })
  );
});

const oldWafflesOnlyProjects = allProjectsData.filter((project) => {
  return !project.dependencies.find((dependency) => {
    return dependency.name === '@datacamp/waffles';
  });
});

const bothProjectNames = newWafflesOnlyProjects
  .map((project) => {
    return project.name;
  })
  .concat(
    oldWafflesOnlyProjects.map((project) => {
      return project.name;
    }),
  );

const newAndOldWafflesProjects = allProjectsData.filter((project) => {
  return !bothProjectNames.includes(project.name);
});

const headingStyle = css`
  margin: ${tokens.spacing.large} 0 ${tokens.spacing.medium};
`;

const cardStyle = css`
  padding: ${tokens.spacing.xsmall} ${tokens.spacing.medium};
`;

type TabContentProps = {
  data: AdoptionProjectStats[];
};

function TabContent({ data }: TabContentProps) {
  return (
    <Card disableHoverEffect css={cardStyle}>
      {data.map((project) => {
        return (
          <ProjectOverview
            key={`project-${project.name}`}
            project={project}
            currentVersion={currentVersion}
          />
        );
      })}
    </Card>
  );
}

function AdoptionPage() {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>(0);

  return (
    <Layout
      title="Adoption"
      description="Adoption tracker across all DataCamp apps."
    >
      <Heading css={headingStyle}>
        {allProjectsData.length} projects tracked
      </Heading>
      <Tabs
        activeTab={activeTabIndex}
        onChange={(activeTab) => {
          setActiveTabIndex(activeTab);
        }}
      >
        <Tabs.Tab label={`All (${allProjectsData.length})`}>
          <ComponentsGlobalStats data={allProjectsData} />
          <TabContent data={allProjectsData} />
        </Tabs.Tab>
        <Tabs.Tab label={`New (${newWafflesOnlyProjects.length})`}>
          <TabContent data={newWafflesOnlyProjects} />
        </Tabs.Tab>
        <Tabs.Tab label={`Old (${oldWafflesOnlyProjects.length})`}>
          <TabContent data={oldWafflesOnlyProjects} />
        </Tabs.Tab>
        <Tabs.Tab label={`Both (${newAndOldWafflesProjects.length})`}>
          <TabContent data={newAndOldWafflesProjects} />
        </Tabs.Tab>
      </Tabs>
    </Layout>
  );
}

export default AdoptionPage;
