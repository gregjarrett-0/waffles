import { css } from '@emotion/react';

import { tokens } from '../tokens';

const CHECKMARK_SIZE = 18;

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
    width: ${CHECKMARK_SIZE}px;
    height: ${CHECKMARK_SIZE}px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    cursor: ${disabled ? 'default' : 'pointer'};
  `;
}

type ContentStyleOptions = {
  inverted: boolean;
  disabled: boolean;
};

export function labelStyle({ inverted, disabled }: ContentStyleOptions) {
  return css`
    line-height: ${tokens.lineHeights.default};
    padding-top: 1px;
    padding-left: ${tokens.spacing.small};
    user-select: none;
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    cursor: ${disabled ? 'default' : 'pointer'};
  `;
}

const checkmarkBaseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  width: ${CHECKMARK_SIZE}px;
  height: ${CHECKMARK_SIZE}px;
  border-radius: ${tokens.borderRadius.medium};
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
    border-radius: 6px;
    pointer-events: none;
    transition: box-shadow 125ms ease-out;
  }
`;

type CheckmarkStyleOptions = {
  inverted: boolean;
  checked: boolean;
  isIndeterminate: boolean;
  isFocusVisible: boolean;
  hasError: boolean;
};

function checkmarkBackgroundColor(
  inverted: boolean,
  checked: boolean,
  isIndeterminate: boolean,
) {
  if (inverted) {
    return checked || isIndeterminate
      ? tokens.colors.blue
      : tokens.colors.navyLight;
  }
  return checked || isIndeterminate
    ? tokens.colors.blueDark
    : tokens.colors.white;
}

export function checkmarkStyle({
  inverted,
  checked,
  isIndeterminate,
  isFocusVisible,
  hasError,
}: CheckmarkStyleOptions) {
  const invertedCheckedColor = inverted
    ? tokens.colors.blue
    : tokens.colors.blueDark;

  return css`
    ${checkmarkBaseStyle}
    color: ${inverted ? tokens.colors.navy : tokens.colors.white};
    background-color: ${checkmarkBackgroundColor(
      inverted,
      checked,
      isIndeterminate,
    )};
    border-width: ${tokens.borderWidth.thin};
    border-style: solid;
    border-color: ${checked || isIndeterminate
      ? invertedCheckedColor
      : tokens.colors.greyDark};

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
