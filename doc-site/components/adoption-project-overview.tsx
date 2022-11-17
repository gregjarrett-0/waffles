import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { Button } from '@datacamp/waffles/button';

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

const nameStyle = css`
  margin: 0;
  flex-grow: 1;
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
        <Heading size="large" css={nameStyle}>
          {project.name}
        </Heading>
        <Button
          size="small"
          variant="plain"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Show details
        </Button>
      </header>
      {isExpanded && (
        <div>
          <Dependencies
            dependencies={project.dependencies}
            currentVersion={currentVersion}
          />
          <Components combinedComponents={project.components} />
        </div>
      )}
    </section>
  );
}

export default AdoptionProjectOverview;
