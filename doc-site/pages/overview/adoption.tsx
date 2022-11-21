import React, { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Tabs } from '@datacamp/waffles/tabs';
import { Notification } from '@datacamp/waffles/notification';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';

import Layout from '../../components/content-layout';
import ProjectOverview from '../../components/adoption-project-overview';
import ComponentsGlobalStats from '../../components/adoption-components-global';
import Badge from '../../components/adoption-badge';
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

const listStyle = css`
  margin: 0;
  padding: 0;
`;

const listItemStyle = css`
  display: flex;
  gap: ${tokens.spacing.small};
  list-style: none;
  margin-bottom: ${tokens.spacing.small};
`;

const listDescriptionStyle = css`
  display: block;
  line-height: ${tokens.lineHeights.relaxed};
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
      description="Tracking adoption of New Waffles across all DataCamp projects, with detailed dependencies and components usage statistics for both New and Old Waffles."
    >
      <Notification
        title="Limitations"
        description="Our adoption tracker uses GitHub search API to gather data from all DataCamp repositories. Because of it's limitations components statistics, especially for bigger projects, might be incomplete. Nonetheless, should give pretty good picture how often each component is used in general."
        variant="warning"
      />
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
      <section>
        <Heading size="large" css={headingStyle}>
          Legend
        </Heading>
        <ul css={listStyle}>
          <li css={listItemStyle}>
            <Badge version="new">New Waffles</Badge>
            <Text css={listDescriptionStyle}>Project is using New Waffles</Text>
          </li>
          <li css={listItemStyle}>
            <Badge version="new" upgradeStatus="outdated" />
            <Text css={listDescriptionStyle}>
              New Waffles version is outdated and must be upgraded urgently
            </Text>
          </li>
          <li css={listItemStyle}>
            <Badge version="new" upgradeStatus="slightlyOutdated" />
            <Text css={listDescriptionStyle}>
              New Waffles version is slightly outdated and should be upgraded
            </Text>
          </li>
          <li css={listItemStyle}>
            <Badge version="new" upgradeStatus="upToDate" isNewOnly />
            <Text css={listDescriptionStyle}>
              Project is fully migrated to New Waffles and is running on the
              newest version
            </Text>
          </li>
          <li css={listItemStyle}>
            <Badge version="old">Old Waffles</Badge>
            <Text css={listDescriptionStyle}>Project is using New Waffles</Text>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default AdoptionPage;
