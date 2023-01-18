import { css } from '@emotion/react';

import { tokens } from '../tokens';

import Badge from './badge';

// Mappings between badge's sizes and variants, and design tokens

const sizeMap = {
  small: {
    fontSize: '10px',
    sizing: '14px',
  },
  medium: {
    fontSize: tokens.fontSizes.small,
    sizing: '18px',
  },
  large: {
    fontSize: tokens.fontSizes.medium,
    sizing: '20px',
  },
};

const variantMap = {
  green: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.green,
  },
  navy: {
    color: tokens.colors.white,
    backgroundColor: tokens.colors.navy,
  },
  white: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.white,
  },
  red: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.red,
  },
  orange: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.orange,
  },
  yellow: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.yellow,
  },
  blue: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.blue,
  },
  purple: {
    color: tokens.colors.white,
    backgroundColor: tokens.colors.purple,
  },
  pink: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.pink,
  },
  grey: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.greyMedium,
  },
  greyLight: {
    color: '#626D79',
    backgroundColor: tokens.colors.greyLight,
  },
};

const baseBadgeStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  line-height: ${tokens.lineHeights.tight};
  text-transform: uppercase;
  border-radius: ${tokens.borderRadius.medium};
  padding-left: ${tokens.spacing.xsmall};
  padding-right: ${tokens.spacing.xsmall};
  letter-spacing: 0.5px;
`;

type BadgeStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof Badge>['size']>;
  variant: NonNullable<React.ComponentProps<typeof Badge>['variant']>;
};

export function badgeStyle({ variant, size }: BadgeStyleOptions) {
  return css`
    ${baseBadgeStyle}
    color: ${variantMap[variant].color};
    background-color: ${variantMap[variant].backgroundColor};
    font-size: ${sizeMap[size].fontSize};
    height: ${sizeMap[size].sizing};
  `;
}

export function innerContentStyle() {
  return css`
    max-width: 164px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;
}
