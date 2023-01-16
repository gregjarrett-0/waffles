import { css } from '@emotion/react';

import { tokens } from '../tokens';

const HANDLE_DOT_RADIUS = 12;

const regularVariantMap = {
  regularFilledColor: tokens.colors.blueDark,
  errorFilledColor: tokens.colors.redDark,
  backgroundColor: tokens.colors.transparentNavy,
};

const invertedVariantMap = {
  regularFilledColor: tokens.colors.blue,
  errorFilledColor: tokens.colors.redDark,
  backgroundColor: tokens.colors.transparentWhite,
};

export function getFilledColor(inverted: boolean, hasError: boolean) {
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;
  return hasError ? variantMap.errorFilledColor : variantMap.regularFilledColor;
}

export function getBackgroundColor(inverted: boolean) {
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;
  return variantMap.backgroundColor;
}

type TrackStyleOptions = {
  disabled: boolean;
};

export function trackStyle({ disabled }: TrackStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    // Shift track slightly so handle aligns with labels nicer
    width: calc(100% - ${HANDLE_DOT_RADIUS}px);
    margin-left: ${HANDLE_DOT_RADIUS / 2}px;
    height: ${tokens.sizing.small};
    opacity: ${disabled ? tokens.opacity.high : 1};
  `;
}

export function trackLineStyle() {
  return css`
    // Shift track line slightly so handle aligns with labels nicer
    width: calc(100% + ${HANDLE_DOT_RADIUS}px);
    margin-left: -${HANDLE_DOT_RADIUS / 2}px;
    margin-right: -${HANDLE_DOT_RADIUS / 2}px;
    height: 4px;
    border-radius: 2px;
    transition: background-color 125ms ease-out;
  `;
}

type HandleStyleOptions = {
  hasError: boolean;
  disabled: boolean;
  inverted: boolean;
};

export function handleStyle({
  hasError,
  disabled,
  inverted,
}: HandleStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${tokens.sizing.small};
    height: ${tokens.sizing.small};
    outline: 0;

    ${!disabled &&
    css`
      &:hover > div {
        box-shadow: 0 0 0 3px ${getFilledColor(inverted, hasError)};
      }
    `}
  `;
}

type HandleDotStyleOptions = {
  isDragged: boolean;
  hasError: boolean;
  inverted: boolean;
  isFocusVisible: boolean;
};

export function handleDotStyle({
  isDragged,
  hasError,
  inverted,
  isFocusVisible,
}: HandleDotStyleOptions) {
  return css`
    width: ${HANDLE_DOT_RADIUS}px;
    height: ${HANDLE_DOT_RADIUS}px;
    border-radius: ${tokens.borderRadius.circle};
    background-color: ${getFilledColor(inverted, hasError)};
    transition: box-shadow 200ms ease-out, background-color 125ms ease-out;

    ${isDragged &&
    `box-shadow: 0 0 0 4px ${getFilledColor(inverted, hasError)};`}

    ${isFocusVisible &&
    `box-shadow: 0 0 0 2px ${
      inverted ? tokens.colors.navyLight : tokens.colors.white
    }, 0 0 0 4px ${getFilledColor(inverted, hasError)};`}
  `;
}

type ValueLabelsWrapperStyleOptions = {
  isSingleValue: boolean;
};

export function valueLabelsWrapperStyle({
  isSingleValue,
}: ValueLabelsWrapperStyleOptions) {
  return css`
    display: flex;
    justify-content: ${isSingleValue ? 'flex-end' : 'space-between'};
  `;
}

type InputsWrapperStyleOptions = {
  isSingle: boolean;
  inputWidth: number;
};

export function inputsWrapperStyle({
  isSingle,
  inputWidth,
}: InputsWrapperStyleOptions) {
  return css`
    & div:last-of-type input {
      text-align: right;
    }

    ${isSingle
      ? css`
          width: ${inputWidth}px;
          margin-left: calc(100% - ${inputWidth}px);
        `
      : css`
          display: grid;
          grid-template-columns: ${inputWidth}px ${inputWidth}px;
          gap: calc(100% - ${inputWidth * 2}px);
        `}
  `;
}

export function rangeLabelsWrapperStyle() {
  return css`
    display: flex;
    justify-content: space-between;
    margin-top: -${tokens.spacing.xsmall};
  `;
}

type BaseLabelStyleOptions = {
  inverted: boolean;
};

export function valueLabelStyle({ inverted }: BaseLabelStyleOptions) {
  return css`
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    font-size: ${tokens.fontSizes.xxlarge};
    font-weight: ${tokens.fontWeights.bold};
  `;
}

export function rangeLabelStyle({ inverted }: BaseLabelStyleOptions) {
  return css`
    color: ${inverted
      ? tokens.colors.navySubtleTextOnDark
      : tokens.colors.navySubtleTextOnLight};
    font-size: ${tokens.fontSizes.small};
  `;
}

export function errorsWrapperStyle() {
  return css`
    display: flex;
    gap: ${tokens.spacing.xsmall};
    margin-top: ${tokens.spacing.small};
  `;
}

type ErrorStyleOptions = {
  inverted: boolean;
};

export function errorStyle({ inverted }: ErrorStyleOptions) {
  return css`
    color: ${inverted ? tokens.colors.red : tokens.colors.redDarkText};
    line-height: ${tokens.lineHeights.default};
  `;
}
