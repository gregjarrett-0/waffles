import { css } from '@emotion/react';

import { tokens } from '../tokens';

import Navigation from './navigation';

const regularMap = {
  color: tokens.colors.navy,
  activeColor: tokens.colors.white,
  disabledColor: tokens.colors.navySubtleTextOnLight,
  activeBackgroundColor: tokens.colors.navy,
  hoverBackgroundColor: tokens.colors.transparentNavySubtle,
};

const invertedMap = {
  color: tokens.colors.white,
  activeColor: tokens.colors.navy,
  disabledColor: tokens.colors.navySubtleTextOnDark,
  activeBackgroundColor: tokens.colors.greySubtle,
  hoverBackgroundColor: tokens.colors.transparentWhiteSubtle,
};

type WrapperStyleOptions = {
  isAboveSmall: boolean;
};

export function wrapperStyle({ isAboveSmall }: WrapperStyleOptions) {
  return css`
    display: flex;
    flex-direction: row;
    gap: ${isAboveSmall ? tokens.spacing.xsmall : tokens.spacing.small};
    margin: 0;
  `;
}

type NavigationButtonStyleOptions = {
  inverted: boolean;
  navigationVariant: NonNullable<
    React.ComponentProps<typeof Navigation>['navigationVariant']
  >;
};

export function navigationButtonStyle({
  inverted,
  navigationVariant,
}: NavigationButtonStyleOptions) {
  return css`
    padding: 0 ${tokens.spacing.small};
    ${navigationVariant === 'previous' &&
    css`
      margin-right: ${tokens.spacing.xsmall};
    `}${navigationVariant === 'next' &&
    css`
      margin-left: ${tokens.spacing.xsmall};
    `}

    &:hover:not(:disabled) {
      background-color: ${inverted
        ? invertedMap.hoverBackgroundColor
        : regularMap.hoverBackgroundColor};
    }
  `;
}

type PageButtonStyleOptions = {
  isActive: boolean;
  inverted: boolean;
};

export function pageButtonStyle({
  isActive,
  inverted,
}: PageButtonStyleOptions) {
  return css`
    color: ${inverted ? invertedMap.color : regularMap.color};
    font-weight: ${tokens.fontWeights.regular};
    width: ${tokens.sizing.medium};

    &:hover:not(:disabled) {
      background-color: ${inverted
        ? invertedMap.hoverBackgroundColor
        : regularMap.hoverBackgroundColor};
    }

    &:disabled {
      color: ${inverted ? invertedMap.disabledColor : regularMap.disabledColor};
    }

    // Active styling
    ${isActive &&
    css`
      // Override style for normal and :hover
      &,
      &:hover:not(:disabled) {
        background-color: ${inverted
          ? invertedMap.activeBackgroundColor
          : regularMap.activeBackgroundColor};
        color: ${inverted ? invertedMap.activeColor : regularMap.activeColor};
        font-weight: ${tokens.fontWeights.bold};
      }
    `}
  `;
}
