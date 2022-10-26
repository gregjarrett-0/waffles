import React, { Children } from 'react';
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

  // Add margin-top if a h3 precedes it
  h3 ~ & {
    margin-top: ${tokens.spacing.medium};
  }
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
  const singleCard = Children.count(children) === 1;

  return (
    <div
      css={css`
        ${wrapperStyle}
        ${singleCard &&
        css`
          grid-template-columns: 1fr;
        `}
      `}
    >
      {children}
    </div>
  );
}

BestPractices.Recommended = BestPracticesRecommended;
BestPractices.Discouraged = BestPracticesDiscouraged;

export default BestPractices;
