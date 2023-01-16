import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { Button } from '@datacamp/waffles/button';

import ProjectBadges from './adoption-project-badges';
import Dependencies from './adoption-dependencies';
import ComponentsOverview from './adoption-components-overview';

import type { AdoptionProjectStats } from '../types';

const wrapperStyle = css`
  padding: ${tokens.spacing.small} 0;

  &:not(:last-of-type) {
    border-bottom: ${tokens.borderWidth.thin} solid
      ${tokens.colors.transparentNavy};
  }
`;

const headerStyle = css`
  display: flex;
  align-items: center;
`;

const headingWrapperStyle = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xsmall};
  margin-right: ${tokens.spacing.medium};

  ${mediaQuery.aboveMedium} {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const nameStyle = css`
  margin: 0;
  margin-right: ${tokens.spacing.xsmall};
`;

const sectionStyle = css`
  margin: ${tokens.spacing.medium} 0;
`;

const detailsButtonStyle = css`
  width: 100px;
`;

type AdoptionProjectOverviewProps = {
  project: AdoptionProjectStats;
  currentVersion: string;
};

// Display project's dependencies and components usage
function AdoptionProjectOverview({
  project,
  currentVersion,
}: AdoptionProjectOverviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section css={wrapperStyle}>
      <header css={headerStyle}>
        <div css={headingWrapperStyle}>
          <Heading size="large" css={nameStyle}>
            {project.name}
          </Heading>
          <ProjectBadges
            dependencies={project.dependencies}
            currentVersion={currentVersion}
          />
        </div>
        <Button
          size="small"
          variant="plain"
          onClick={() => setIsExpanded(!isExpanded)}
          css={detailsButtonStyle}
        >
          {isExpanded ? 'Hide' : 'Show'} details
        </Button>
      </header>
      {isExpanded && (
        <div>
          <section css={sectionStyle}>
            <Heading size="medium">Dependencies</Heading>
            <Dependencies
              dependencies={project.dependencies}
              currentVersion={currentVersion}
            />
          </section>
          <section css={sectionStyle}>
            <Heading size="medium">Components usage</Heading>
            {project.components.old.length === 0 &&
              project.components.new.length === 0 && <Text>N/A</Text>}
            <ComponentsOverview combinedComponents={project.components} />
          </section>
        </div>
      )}
    </section>
  );
}

export default AdoptionProjectOverview;
