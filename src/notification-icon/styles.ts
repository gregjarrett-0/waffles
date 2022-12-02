import { css } from '@emotion/react';

import { tokens } from '../tokens';

import NotificationIcon from './notification-icon';

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
  inverted: boolean;
};

export function backgroundStyle({ variant, inverted }: BackgroundStyleOptions) {
  const variantMap = inverted ? invertedIconVariantMap : regularIconVariantMap;

  return css`
    // Creative way to get triangle shape for warning
    ${variant === 'warning'
      ? css`
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 12px solid ${variantMap[variant].backgroundColor};
        `
      : css`
          width: 12px;
          height: 12px;
          border-radius: ${tokens.borderRadius.circle};
          background-color: ${variantMap[variant].backgroundColor};
        `}
  `;
}
