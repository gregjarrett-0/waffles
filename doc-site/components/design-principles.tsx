import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { mediaQuery } from '@datacamp/waffles/helpers';

import DesignPrinciplesCard from './design-principles-card';

const wrapperStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${tokens.spacing.medium};
  margin-top: ${tokens.spacing.large};

  ${mediaQuery.aboveSmall} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

type BestPracticesProps = {
  children: React.ReactNode;
};

function DesignPrinciples({ children }: BestPracticesProps) {
  return <div css={wrapperStyle}>{children}</div>;
}

DesignPrinciples.Card = DesignPrinciplesCard;

export default DesignPrinciples;
