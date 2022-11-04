import { css } from '@emotion/react';

import { tokens } from '../tokens';

import SkillTag from './skill-tag';

const variantMap = {
  primary: {
    backgroundColor: tokens.colors.greenDark,
    color: tokens.colors.navy,
  },
  secondary: {
    backgroundColor: tokens.colors.navySubtleTextOnLight,
    color: tokens.colors.navySubtleTextOnLight,
  },
};

const invertedVariantMap = {
  primary: {
    backgroundColor: tokens.colors.green,
    color: tokens.colors.white,
  },
  secondary: {
    backgroundColor: tokens.colors.navySubtleTextOnDark,
    color: tokens.colors.navySubtleTextOnDark,
  },
};

export function skillTagStyle() {
  return css`
    display: flex;
    gap: ${tokens.spacing.small};
  `;
}

export function indicatorWrapper() {
  return css`
    display: inline-flex;
    gap: ${tokens.spacing.xsmall};
    align-items: center;
  `;
}

type IndicatorStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof SkillTag>['variant']>;
  inverted: boolean;
};

export function indicatorStyle({ variant, inverted }: IndicatorStyleOptions) {
  return css`
    display: block;
    border-radius: ${tokens.borderRadius.circle};
    width: 6px;
    height: 6px;
    background-color: ${inverted
      ? invertedVariantMap[variant].backgroundColor
      : variantMap[variant].backgroundColor};
  `;
}

type LabelStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof SkillTag>['variant']>;
  inverted: boolean;
};

export function labelStyle({ variant, inverted }: LabelStyleOptions) {
  return css`
    color: ${inverted
      ? invertedVariantMap[variant].color
      : variantMap[variant].color};
    line-height: ${tokens.lineHeights.relaxed};
  `;
}
