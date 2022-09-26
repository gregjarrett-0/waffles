import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import {
  CheckmarkCircleInverted,
  CrossCircleInverted,
} from '@datacamp/waffles/icon';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { Chapeau } from '@datacamp/waffles/chapeau';
import { Card } from '@datacamp/waffles/card';

type BestPracticesCardStyleOptions = {
  isRecommended: boolean;
};

function cardStyle({ isRecommended }: BestPracticesCardStyleOptions) {
  const color = isRecommended ? tokens.colors.green : tokens.colors.red;

  return css`
    background: linear-gradient(
        0deg,
        ${hexToRgba(color, tokens.opacity.low)},
        ${hexToRgba(color, tokens.opacity.low)}
      ),
      ${tokens.colors.white};
    border-width: ${`${tokens.borderWidth.xthick} ${tokens.borderWidth.thin}
      ${tokens.borderWidth.thin}`};
    border-color: ${hexToRgba(color, tokens.opacity.high)};
    border-top-color: ${color};
  `;
}

function iconStyle({ isRecommended }: BestPracticesCardStyleOptions) {
  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: ${tokens.spacing.small};
    border-radius: ${tokens.borderRadius.circle};
    color: ${isRecommended ? tokens.colors.green : tokens.colors.red};

    // Handle fixing artifacts around edge of icon, when setting custom colors
    &:before {
      content: '';
      position: absolute;
      height: 14px;
      width: 14px;
      border-radius: ${tokens.borderRadius.circle};
      background-color: ${isRecommended
        ? tokens.colors.navyDark
        : tokens.colors.white};
    }

    // Fixing z-index for artifact issue
    svg {
      z-index: ${tokens.zIndex.default};
    }
  `;
}

const headingStyle = css`
  display: flex;
  align-items: center;
`;

type BestPracticesCardProps = {
  variant: 'recommended' | 'discouraged';
  children: React.ReactNode;
};

function BestPracticesCard({ children, variant }: BestPracticesCardProps) {
  const isRecommended = variant === 'recommended';

  return (
    <Card disableHoverEffect css={cardStyle({ isRecommended })}>
      <Heading size="large" css={headingStyle}>
        <span css={iconStyle({ isRecommended })}>
          {isRecommended ? (
            <CheckmarkCircleInverted size={'medium'} />
          ) : (
            <CrossCircleInverted size={'medium'} />
          )}
        </span>
        <Chapeau>{isRecommended ? 'Do' : "Don't"}</Chapeau>
      </Heading>
      {children}
    </Card>
  );
}

export default BestPracticesCard;
