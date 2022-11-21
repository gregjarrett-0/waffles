import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { hexToRgba, mediaQuery } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { Button } from '@datacamp/waffles/button';

import Badges from './adoption-project-badges';
import Dependencies from './adoption-dependencies';
import Components from './adoption-components';

import type { AdoptionProjectStats } from '../types';

const wrapperStyle = css`
  padding: ${tokens.spacing.small} 0;

  &:not(:last-of-type) {
    border-bottom: ${tokens.borderWidth.thin} solid
      ${hexToRgba(tokens.colors.navy, 0.15)};
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
          <Badges
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
            <Heading size="medium">Components stats</Heading>
            {project.components.old.length === 0 &&
              project.components.new.length === 0 && <Text>N/A</Text>}
            <Components combinedComponents={project.components} />
          </section>
        </div>
      )}
    </section>
  );
}

export default AdoptionProjectOverview;
