import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { mediaQuery } from '@datacamp/waffles/helpers';

import BestPracticesCard from './best-practices-card';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.medium};

  ${mediaQuery.aboveSmall} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${tokens.spacing.medium};
  }

  margin: ${tokens.spacing.medium} 0;
`;

type BestPracticesProps = {
  children: React.ReactNode;
};

function BestPracticesRecommended({ children }: BestPracticesProps) {
  return (
    <BestPracticesCard variant="recommended">{children}</BestPracticesCard>
  );
}

function BestPracticesDiscouraged({ children }: BestPracticesProps) {
  return (
    <BestPracticesCard variant="discouraged">{children}</BestPracticesCard>
  );
}

function BestPractices({ children }: BestPracticesProps) {
  return <div css={wrapperStyle}>{children}</div>;
}

BestPractices.Recommended = BestPracticesRecommended;
BestPractices.Discouraged = BestPracticesDiscouraged;

export default BestPractices;
