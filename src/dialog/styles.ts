import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba, mediaQuery } from '../helpers';

import { panelEnter, panelExit } from './keyframes';
import Header from './header';

const variantMap = {
  info: {
    color: tokens.colors.blueDark,
  },
  success: {
    color: tokens.colors.green,
  },
  warning: {
    color: tokens.colors.orangeLight,
  },
  error: {
    color: tokens.colors.red,
  },
  upgrade: {
    color: tokens.colors.purple,
  },
};

// Center vertically and horizontally dialog panel
export function panelWrapperStyle() {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: ${tokens.zIndex.modal};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${tokens.spacing.medium};
    overflow: hidden;
    pointer-events: none;
  `;
}

type PanelStyleOptions = {
  isVisible: boolean;
};

export function panelStyle({ isVisible }: PanelStyleOptions) {
  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 180px;
    max-height: 100%;
    min-width: 100%;
    max-width: 600px;
    background-color: ${tokens.colors.white};
    border-radius: ${tokens.borderRadius.medium};
    box-shadow: ${tokens.boxShadow.thick};
    outline: 0;
    overflow: hidden;
    pointer-events: all;
    // Animation
    opacity: 0;
    transform: translateY(12px);
    animation: ${isVisible ? panelEnter() : panelExit()} 200ms
      cubic-bezier(0.2, 0.8, 0.6, 1) forwards;

    ${mediaQuery.aboveSmall} {
      min-width: 400px;
    }
  `;
}

type CloseButtonStyleOptions = {
  hasDecorativeHeader: boolean;
};

export function closeButtonStyle({
  hasDecorativeHeader,
}: CloseButtonStyleOptions) {
  return css`
    position: absolute;
    top: ${hasDecorativeHeader ? tokens.spacing.xsmall : tokens.spacing.small};
    right: ${tokens.spacing.small};
    z-index: ${tokens.zIndex.default};
    color: ${hasDecorativeHeader ? tokens.colors.white : tokens.colors.navy};
  `;
}

type BodyStyleOptions = {
  isShadowTopVisible: boolean;
  isShadowBottomVisible: boolean;
};

// Show shadows at the top or bottom, indicating user can actually scroll a content
export function bodyStyle({
  isShadowTopVisible,
  isShadowBottomVisible,
}: BodyStyleOptions) {
  return css`
    padding-top: 0;
    padding-right: ${tokens.spacing.large};
    padding-bottom: ${tokens.spacing.small};
    padding-left: ${tokens.spacing.large};
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: ${isShadowTopVisible &&
      `inset 0 12px 12px -12px ${hexToRgba(
        tokens.colors.navy,
        0.3,
      )}`}${isShadowTopVisible &&
      isShadowBottomVisible &&
      ','}${isShadowBottomVisible &&
      `inset 0 -12px 12px -12px ${hexToRgba(tokens.colors.navy, 0.3)}`};
  `;
}

type DecorativeStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof Header>['variant']>;
};

export function avatarStyle({ variant }: DecorativeStyleOptions) {
  return css`
    position: relative;
    display: flex;
    width: 48px;
    height: 48px;
    border-radius: ${tokens.borderRadius.circle};
    background-color: ${tokens.colors.white};
    align-items: center;
    justify-content: center;
    top: 50%;
    box-shadow: ${tokens.boxShadow.thick};

    svg {
      color: ${variantMap[variant].color};
    }
  `;
}

export function decorativeHeaderStyle({ variant }: DecorativeStyleOptions) {
  return css`
    justify-content: center;
    display: flex;
    background-color: ${tokens.colors.navyLight};
    border-bottom: 4px solid ${variantMap[variant].color};
    height: 44px;
  `;
}

export function headerStyle() {
  return css`
    padding-top: ${tokens.spacing.large};
    padding-right: 48px;
    padding-bottom: ${tokens.spacing.medium};
    padding-left: ${tokens.spacing.large};
    margin: 0;
    flex-shrink: 0;
  `;
}

export function footerStyle() {
  return css`
    padding: ${tokens.spacing.medium} ${tokens.spacing.large};
    border-top: ${tokens.borderWidth.thin} solid
      ${hexToRgba(tokens.colors.navy, 0.15)};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-shrink: 0;
    gap: ${tokens.spacing.small};
  `;
}

export function buttonStyle() {
  return css`
    flex-shrink: 1;

    &:first-of-type {
      margin-right: auto;
    }
  `;
}
