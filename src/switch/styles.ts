import { css } from '@emotion/react';

import { tokens } from '../tokens';

const TOGGLE_HEIGHT = 22;
const TOGGLE_WIDTH = 36;

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
    height: ${TOGGLE_HEIGHT}px;
    width: ${TOGGLE_WIDTH}px;
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
    padding-top: 3px;
    padding-right: ${tokens.spacing.small};
    flex-grow: 1;
    user-select: none;
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    cursor: ${disabled ? 'default' : 'pointer'};
  `;
}

const toggleBaseStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
  height: ${TOGGLE_HEIGHT}px;
  width: ${TOGGLE_WIDTH}px;
  padding: 2px;
  border-radius: 12px;
  transition: background-color 75ms ease-out;

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: ${tokens.zIndex.default};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -2px;
    border-radius: 14px;
    pointer-events: none;
    transition: box-shadow 125ms ease-out;
  }
`;

type ToggleStyleOptions = {
  inverted: boolean;
  checked: boolean;
  isFocusVisible: boolean;
  hasError: boolean;
};

export function toggleStyle({
  inverted,
  checked,
  isFocusVisible,
  hasError,
}: ToggleStyleOptions) {
  const invertedCheckedColor = inverted
    ? tokens.colors.blue
    : tokens.colors.blueDark;

  return css`
    ${toggleBaseStyle}
    background-color: ${checked
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
      background-color: ${tokens.colors.redDark};
    `};
  `;
}

type HandleStyleOptions = {
  inverted: boolean;
  checked: boolean;
};

export function handleStyle({ inverted, checked }: HandleStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${inverted ? tokens.colors.blue : tokens.colors.blueDark};
    background-color: ${inverted ? tokens.colors.navy : tokens.colors.white};
    height: 18px;
    width: 18px;
    border-radius: ${tokens.borderRadius.circle};
    transform: translateX(${checked ? 14 : 0}px);
    transition: transform 75ms ease-out;
  `;
}
