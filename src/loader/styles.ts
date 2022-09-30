import { css } from '@emotion/react';

import { tokens } from '../tokens';

import Loader from './loader';
import { loaderEndMask, loaderStartMask, stroke } from './keyframes';

const animationSettings = '2s infinite alternate';

type WrapperStyleOptions = {
  width?: string | number;
  height?: string | number;
};

export function wrapperStyle({ width, height }: WrapperStyleOptions) {
  return css`
    animation: ${loaderStartMask} cubic-bezier(0.65, 0, 0.55, 1)
      ${animationSettings};
    will-change: clip-path;
    ${width && `width: ${width}px`};
    ${height && `height: ${height}px`};
  `;
}

export function containerStyle() {
  return css`
    animation: ${loaderEndMask} cubic-bezier(0, 0, 0.85, 1) ${animationSettings};
    will-change: clip-path;
  `;
}

export function svgWrapperStyle() {
  return css`
    clip-path: polygon(-0.1% -10%, 169% 65%, -0.1% 139%);
  `;
}

type LoaderSvgStyleOptions = {
  inverted: NonNullable<React.ComponentProps<typeof Loader>['inverted']>;
};

export function loaderSvgStyle({ inverted }: LoaderSvgStyleOptions) {
  return css`
    display: block;
    stroke: ${inverted ? tokens.colors.white : tokens.colors.navyDark};
    overflow: visible;
  `;
}

export function loaderPathStyle() {
  return css`
    animation: ${stroke} cubic-bezier(0.65, 0, 0.55, 1) ${animationSettings};
    stroke-dasharray: 9800;
    stroke-dashoffset: 9800;
    will-change: stroke-dashoffset;
  `;
}
