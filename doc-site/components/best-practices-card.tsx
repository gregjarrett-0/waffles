import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { CheckmarkCircleSolid, CrossCircleSolid } from '@datacamp/waffles/icon';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { Chapeau } from '@datacamp/waffles/chapeau';

type BestPracticesStyleOptions = {
  isRecommended: boolean;
};

function cardStyle({ isRecommended }: BestPracticesStyleOptions) {
  const color = isRecommended ? tokens.colors.green : tokens.colors.red;
  const opacity = isRecommended ? 0.2 : 0.15;

  return css`
    position: relative;
    background: linear-gradient(
        0deg,
        ${hexToRgba(color, opacity)},
        ${hexToRgba(color, opacity)}
      ),
      ${tokens.colors.white};
    border: ${tokens.borderWidth.thin} solid
      ${hexToRgba(color, isRecommended ? 0.8 : tokens.opacity.high)};
    border-radius: ${tokens.borderRadius.medium};
    padding: 20px ${tokens.spacing.medium} ${tokens.spacing.medium};
  `;
}

function decorStyle({ isRecommended }: BestPracticesStyleOptions) {
  return css`
    position: absolute;
    z-index: ${tokens.zIndex.default};
    top: -1px;
    right: -1px;
    left: -1px;
    height: 4px;
    background-color: ${isRecommended
      ? tokens.colors.green
      : tokens.colors.red};
    border-top-right-radius: ${tokens.borderRadius.medium};
    border-top-left-radius: ${tokens.borderRadius.medium};
  `;
}

function iconStyle({ isRecommended }: BestPracticesStyleOptions) {
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
    <section css={cardStyle({ isRecommended })}>
      <div css={decorStyle({ isRecommended })} />
      <Heading size="large" css={headingStyle}>
        <span css={iconStyle({ isRecommended })}>
          {isRecommended ? (
            <CheckmarkCircleSolid size="medium" />
          ) : (
            <CrossCircleSolid size="medium" />
          )}
        </span>
        <Chapeau>{isRecommended ? 'Do' : "Don't"}</Chapeau>
      </Heading>
      {children}
    </section>
  );
}

export default BestPracticesCard;
