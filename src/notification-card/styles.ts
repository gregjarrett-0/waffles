import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

import NotificationCard from './notification-card';

type NotificationStyleStyleOptions = {
  inverted: boolean;
};

export function notificationStyle({ inverted }: NotificationStyleStyleOptions) {
  return css`
    position: relative;
    display: flex;
    background-color: ${inverted ? tokens.colors.navy : tokens.colors.white};
    border: ${tokens.borderWidth.thin} solid
      ${hexToRgba(inverted ? tokens.colors.white : tokens.colors.navy, 0.15)};
    border-radius: ${tokens.borderRadius.medium};
    padding: 12px;
  `;
}

const decorVariantMap = {
  info: {
    color: tokens.colors.blue,
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

const invertedDecorVariantMap = {
  ...decorVariantMap,
  upgrade: {
    color: tokens.colors.purpleLight,
  },
};

type DecorStyleStyleOptions = {
  variant: NonNullable<
    React.ComponentProps<typeof NotificationCard>['variant']
  >;
  inverted: boolean;
};

export function decorStyle({ variant, inverted }: DecorStyleStyleOptions) {
  const variantMap = inverted ? invertedDecorVariantMap : decorVariantMap;

  return css`
    position: absolute;
    z-index: ${tokens.zIndex.default};
    top: -1px;
    left: -1px;
    bottom: -1px;
    width: 4px;
    background-color: ${variantMap[variant].color};
    border-top-left-radius: ${tokens.borderRadius.medium};
    border-bottom-left-radius: ${tokens.borderRadius.medium};
  `;
}

type IconStyleOptions = {
  isIconCentered: boolean;
};

export function iconStyle({ isIconCentered }: IconStyleOptions) {
  return css`
    ${isIconCentered &&
    css`
      /* margin-left: auto; */
    `}
  `;
}

type ContentStyleOptions = {
  closable: boolean;
  isContentCentered: boolean;
};

export function contentStyle({
  closable,
  isContentCentered: isContentCentered,
}: ContentStyleOptions) {
  return css`
    ${closable && `padding-right: ${tokens.spacing.small};`}
    padding-left: ${tokens.spacing.small};
    align-self: center;

    ${!isContentCentered &&
    css`
      flex-grow: 1;
    `}
  `;
}

type CloseButtonStyleOptions = {
  inverted: boolean;
};

export function closeButtonStyle({ inverted }: CloseButtonStyleOptions) {
  return css`
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    flex-shrink: 0;
    margin-left: auto;
  `;
}
