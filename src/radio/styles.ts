import { css } from '@emotion/react';

import { tokens } from '../tokens';

const RADIOMARK_SIZE = 18;

type WrapperStyleOptions = {
  disabled: boolean;
};

export function wrapperStyle({ disabled }: WrapperStyleOptions) {
  return css`
    display: flex;
    opacity: ${disabled ? tokens.opacity.high : 1};
  `;
}

type InputStyleOptions = {
  disabled: boolean;
};

export function inputStyle({ disabled }: InputStyleOptions) {
  return css`
    position: absolute;
    opacity: 0;
    width: ${RADIOMARK_SIZE}px;
    height: ${RADIOMARK_SIZE}px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    cursor: ${disabled ? 'default' : 'pointer'};
  `;
}

type LabelStyleOptions = {
  inverted: boolean;
  disabled: boolean;
};

export function labelStyle({ inverted, disabled }: LabelStyleOptions) {
  return css`
    line-height: ${tokens.lineHeights.default};
    padding-top: 1px;
    padding-left: ${tokens.spacing.small};
    user-select: none;
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    cursor: ${disabled ? 'default' : 'pointer'};
  `;
}

const radiomarkBaseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  width: ${RADIOMARK_SIZE}px;
  height: ${RADIOMARK_SIZE}px;
  border-radius: ${tokens.borderRadius.circle};
  transition: background-color 75ms ease-out, border-color 75ms ease-out;
  pointer-events: none;

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: ${tokens.zIndex.default};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -3px;
    border-radius: ${tokens.borderRadius.circle};
    pointer-events: none;
    transition: box-shadow 125ms ease-out;
  }
`;

type RadiomarkStyleOptions = {
  inverted: boolean;
  checked: boolean;
  isFocusVisible: boolean;
  hasError: boolean;
};

export function radiomarkStyle({
  inverted,
  checked,
  isFocusVisible,
  hasError,
}: RadiomarkStyleOptions) {
  const invertedCheckedColor = inverted
    ? tokens.colors.white
    : tokens.colors.navy;

  return css`
    ${radiomarkBaseStyle}
    background-color: ${inverted
      ? tokens.colors.navyLight
      : tokens.colors.white};
    border-width: ${tokens.borderWidth.thin};
    border-style: solid;
    border-color: ${checked ? invertedCheckedColor : tokens.colors.greyDark};

    ${isFocusVisible &&
    css`
      &::after {
        box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
      }
    `}

    ${hasError &&
    css`
      border-color: ${tokens.colors.redDark};
      box-shadow: 0 0 0 1px ${tokens.colors.redDark};
    `};
  `;
}

type RadioIconStyleOptions = {
  inverted: boolean;
};

export function radioIconStyle({ inverted }: RadioIconStyleOptions) {
  return css`
    display: block;
    width: 8px;
    height: 8px;
    background-color: ${inverted ? tokens.colors.blue : tokens.colors.blueDark};
    border-radius: ${tokens.borderRadius.circle};
  `;
}
