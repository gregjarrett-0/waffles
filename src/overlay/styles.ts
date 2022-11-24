import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

import { overlayEnter, overlayExit } from './keyframes';

type OverlayStyleOptions = {
  isVisible: boolean;
};

export function overlayStyle({ isVisible }: OverlayStyleOptions) {
  return css`
    background-color: ${hexToRgba(tokens.colors.navy, 0.7)};
    // Animation
    opacity: 0;
    animation: ${isVisible ? overlayEnter() : overlayExit()} 200ms ease-out
      forwards;
    z-index: ${tokens.zIndex.overlay};
  `;
}
