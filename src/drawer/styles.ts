import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { mediaQuery } from '../helpers';

import { panelEnter, panelExit } from './keyframes';
import Drawer from './drawer';

type DrawerStyleOptions = {
  isVisible: boolean;
  placement: NonNullable<React.ComponentProps<typeof Drawer>['placement']>;
};

const PANEL_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT = 356;
const PANEL_WIDTH_ABOVE_SMALL_BREAKPOINT = 600;

export function drawerStyle({ isVisible, placement }: DrawerStyleOptions) {
  const horizontalDirection = placement === 'left' ? -1 : 1;

  return css`
    position: fixed;
    top: 0;
    ${placement === 'left' ? 'left' : 'right'}: 0;
    bottom: 0;
    height: 100vh;
    z-index: ${tokens.zIndex.modal};
    opacity: 1;
    width: calc(100vw - ${tokens.spacing.xxlarge});
    max-width: ${PANEL_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT};
    // Animation
    transform: translateX(
      ${horizontalDirection * PANEL_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT}px
    );
    animation: ${isVisible
        ? panelEnter({
            offset: PANEL_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT,
            slideFrom: placement,
          })
        : panelExit({
            offset: PANEL_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT,
            slideFrom: placement,
          })}
      200ms cubic-bezier(0, 0, 0.6, 1) forwards;

    ${mediaQuery.aboveSmall} {
      width: min(
        calc(100vw - ${tokens.spacing.xxlarge}),
        ${PANEL_WIDTH_ABOVE_SMALL_BREAKPOINT}px
      );

      max-width: min(
        calc(100vw - ${tokens.spacing.xxlarge}),
        ${PANEL_WIDTH_ABOVE_SMALL_BREAKPOINT}px
      );
      // Animation
      transform: translateX(
        ${horizontalDirection * PANEL_WIDTH_ABOVE_SMALL_BREAKPOINT}px
      );
      animation: ${isVisible
          ? panelEnter({
              offset: PANEL_WIDTH_ABOVE_SMALL_BREAKPOINT,
              slideFrom: placement,
            })
          : panelExit({
              offset: PANEL_WIDTH_ABOVE_SMALL_BREAKPOINT,
              slideFrom: placement,
            })}
        200ms cubic-bezier(0, 0, 0.6, 1) forwards;
    }
  `;
}
