import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';

const cardStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${tokens.spacing.large};
  padding-top: ${tokens.spacing.xlarge};
`;

const headingStyle = css`
  text-align: center;
  margin: ${tokens.spacing.medium} 0 ${tokens.spacing.small};
  max-width: 600px;
`;

type BestPracticesProps = {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  isExpended?: boolean;
};

function DesignPrinciplesCard({
  title,
  icon,
  children,
  isExpended = false,
}: BestPracticesProps) {
  return (
    <Card
      css={css`
        ${cardStyle}
        ${isExpended &&
        css`
          ${mediaQuery.aboveSmall} {
            grid-column: span 2;
          }
        `}
      `}
    >
      {icon}
      <Heading
        as="h2"
        size={isExpended ? 'xxlarge' : 'large'}
        css={headingStyle}
      >
        {title}
      </Heading>
      {children}
    </Card>
  );
}

export default DesignPrinciplesCard;
