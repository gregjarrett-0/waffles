import { getTrackBackground } from 'react-range';
import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

type TrackStyleOptions = {
  disabled: boolean;
};

export function trackStyle({ disabled }: TrackStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    width: 100%;
    height: ${tokens.sizing.small};
    opacity: ${disabled ? tokens.opacity.high : 1};
  `;
}

type TrackLineStyleOptions = {
  value: number[];
};

export function trackLineStyle({ value }: TrackLineStyleOptions) {
  return css`
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: ${getTrackBackground({
      values: value,
      min: 0,
      max: 100,
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
    width: 12px;
    height: 12px;
    ${isDragged && `box-shadow: 0 0 0 4px ${tokens.colors.blueDark};`}
    ${isFocusVisible &&
    `box-shadow: 0 0 0 2px ${tokens.colors.white}, 0 0 0 4px ${tokens.colors.blueDark};`}
    border-radius: ${tokens.borderRadius.circle};
    background-color: ${tokens.colors.blueDark};
    transition: box-shadow 200ms ease-out;
  `;
}
