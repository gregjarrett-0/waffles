import { css } from '@emotion/react';

import { tokens } from '../tokens';

const THUMB_DOT_RADIUS = 12;

type TrackStyleOptions = {
  disabled: boolean;
};

export function trackStyle({ disabled }: TrackStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    // Shift track slightly so handle aligns with labels nicer
    width: calc(100% - ${THUMB_DOT_RADIUS}px);
    margin-left: ${THUMB_DOT_RADIUS / 2}px;
    height: ${tokens.sizing.small};
    opacity: ${disabled ? tokens.opacity.high : 1};
  `;
}

export function trackLineStyle() {
  return css`
    // Shift track line slightly so handle aligns with labels nicer
    width: calc(100% + ${THUMB_DOT_RADIUS}px);
    margin-left: -${THUMB_DOT_RADIUS / 2}px;
    margin-right: -${THUMB_DOT_RADIUS / 2}px;
    height: 4px;
    border-radius: 2px;
  `;
}

type ThumbStyleOptions = {
  disabled: boolean;
  inverted: boolean;
};

export function handleStyle({ disabled, inverted }: ThumbStyleOptions) {
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
        box-shadow: 0 0 0 3px
          ${inverted ? tokens.colors.blue : tokens.colors.blueDark};
      }
    `}
  `;
}

type ThumbDotStyleOptions = {
  isDragged: boolean;
  inverted: boolean;
  isFocusVisible: boolean;
};

export function handleDotStyle({
  isDragged,
  inverted,
  isFocusVisible,
}: ThumbDotStyleOptions) {
  const backgroundColor = inverted
    ? tokens.colors.blue
    : tokens.colors.blueDark;

  return css`
    width: ${THUMB_DOT_RADIUS}px;
    height: ${THUMB_DOT_RADIUS}px;
    border-radius: ${tokens.borderRadius.circle};
    background-color: ${backgroundColor};
    transition: box-shadow 200ms ease-out;

    ${isDragged && `box-shadow: 0 0 0 4px ${backgroundColor};`}

    ${isFocusVisible &&
    `box-shadow: 0 0 0 2px ${
      inverted ? tokens.colors.navyLight : tokens.colors.white
    }, 0 0 0 4px ${backgroundColor};`}
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
  isSingleInput: boolean;
  inputWidth: number;
};

export function inputsWrapperStyle({
  isSingleInput,
  inputWidth,
}: InputsWrapperStyleOptions) {
  return css`
    & div:last-of-type input {
      text-align: right;
    }

    ${isSingleInput
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
