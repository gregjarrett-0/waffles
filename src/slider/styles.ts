import { getTrackBackground } from 'react-range';
import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

const THUMB_DOT_RADIUS = 12;

type TrackStyleOptions = {
  disabled: boolean;
};

export function trackStyle({ disabled }: TrackStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    // Shift track slightly so thumb aligns with labels nicer
    width: calc(100% - ${THUMB_DOT_RADIUS}px);
    margin-left: ${THUMB_DOT_RADIUS / 2}px;
    height: ${tokens.sizing.small};
    opacity: ${disabled ? tokens.opacity.high : 1};
  `;
}

type TrackLineStyleOptions = {
  value: number[];
  min: number;
  max: number;
};

export function trackLineStyle({ value, min, max }: TrackLineStyleOptions) {
  return css`
    // Shift track line slightly so thumb aligns with labels nicer
    width: calc(100% + ${THUMB_DOT_RADIUS}px);
    margin-left: -${THUMB_DOT_RADIUS / 2}px;
    margin-right: -${THUMB_DOT_RADIUS / 2}px;
    height: 4px;
    border-radius: 2px;
    background: ${getTrackBackground({
      values: value,
      min,
      max,
      colors:
        value.length == 1
          ? [tokens.colors.blueDark, hexToRgba(tokens.colors.navy, 0.15)]
          : [
              hexToRgba(tokens.colors.navy, 0.15),
              tokens.colors.blueDark,
              hexToRgba(tokens.colors.navy, 0.15),
            ],
    })};
  `;
}

type ThubmStyleOptions = {
  disabled: boolean;
};

export function thumbStyle({ disabled }: ThubmStyleOptions) {
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
        box-shadow: 0 0 0 3px ${tokens.colors.blueDark};
      }
    `}
  `;
}

type ThumbDotStyleOptions = {
  isDragged: boolean;
  isFocusVisible: boolean;
};

export function thumbDotStyle({
  isDragged,
  isFocusVisible,
}: ThumbDotStyleOptions) {
  return css`
    width: ${THUMB_DOT_RADIUS}px;
    height: ${THUMB_DOT_RADIUS}px;
    ${isDragged && `box-shadow: 0 0 0 4px ${tokens.colors.blueDark};`}
    ${isFocusVisible &&
    `box-shadow: 0 0 0 2px ${tokens.colors.white}, 0 0 0 4px ${tokens.colors.blueDark};`}
    border-radius: ${tokens.borderRadius.circle};
    background-color: ${tokens.colors.blueDark};
    transition: box-shadow 200ms ease-out;
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

export function valueLabelStyle() {
  return css`
    font-size: ${tokens.fontSizes.xxlarge};
    font-weight: ${tokens.fontWeights.bold};
  `;
}

export function limitLabelsWrapperStyle() {
  return css`
    display: flex;
    justify-content: space-between;
    margin-top: -${tokens.spacing.xsmall};
  `;
}

export function limitLabelStyle() {
  return css`
    color: ${tokens.colors.navySubtleTextOnLight};
    font-size: ${tokens.fontSizes.small};
  `;
}
