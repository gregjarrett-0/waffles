import { css } from '@emotion/react';

import { tokens } from '../tokens';

import NotificationIcon from './notification-icon';

const ICON_BACKGROUND_WIDTH = 6;

// Mappings between icon's variants, and design tokens

const regularIconVariantMap = {
  info: {
    color: tokens.colors.blueDark,
    backgroundColor: tokens.colors.white,
  },
  success: {
    color: tokens.colors.green,
    backgroundColor: tokens.colors.navy,
  },
  warning: {
    color: tokens.colors.orangeLight,
    backgroundColor: tokens.colors.navy,
  },
  error: {
    color: tokens.colors.red,
    backgroundColor: tokens.colors.white,
  },
  upgrade: {
    color: tokens.colors.purple,
    backgroundColor: 'transparent',
  },
};

const invertedIconVariantMap = {
  ...regularIconVariantMap,
  upgrade: {
    ...regularIconVariantMap.upgrade,
    color: tokens.colors.purpleLight,
  },
};

export function wrapperStyle() {
  return css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${tokens.zIndex.default};
    width: ${tokens.sizing.small};
    height: ${tokens.sizing.small};
    flex-shrink: 0;
  `;
}

type IconStyleOptions = {
  variant: NonNullable<
    React.ComponentProps<typeof NotificationIcon>['variant']
  >;
  inverted: boolean;
};

export function iconStyle({ variant, inverted }: IconStyleOptions) {
  const variantMap = inverted ? invertedIconVariantMap : regularIconVariantMap;

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${variantMap[variant].color};
  `;
}

type BackgroundStyleOptions = {
  variant: NonNullable<
    React.ComponentProps<typeof NotificationIcon>['variant']
  >;
  size: NonNullable<React.ComponentProps<typeof NotificationIcon>['size']>;
  inverted: boolean;
};

export function backgroundStyle({
  variant,
  size,
  inverted,
}: BackgroundStyleOptions) {
  // Calculate icon-size relative background sizing
  const radius =
    ICON_BACKGROUND_WIDTH +
    (size === 'xsmall' ? -2 : size === 'xlarge' ? 2 : 0);
  const width = radius * 2;
  const variantMap = inverted ? invertedIconVariantMap : regularIconVariantMap;

  return css`
    // Creative way to get triangle shape for warning
    ${variant === 'warning'
      ? css`
          width: 0;
          height: 0;
          border-left: ${radius}px solid transparent;
          border-right: ${radius}px solid transparent;
          border-bottom: ${width}px solid ${variantMap[variant].backgroundColor};
        `
      : css`
          width: ${width}px;
          height: ${width}px;
          border-radius: ${tokens.borderRadius.circle};
          background-color: ${variantMap[variant].backgroundColor};
        `}
  `;
}
