import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
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
`;

type BestPracticesProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

function DesignPrinciplesCard({ title, icon, children }: BestPracticesProps) {
  return (
    <Card css={cardStyle}>
      {icon}
      <Heading css={headingStyle}>{title}</Heading>
      {children}
    </Card>
  );
}

export default DesignPrinciplesCard;
