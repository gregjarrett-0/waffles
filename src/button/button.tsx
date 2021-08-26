import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../utils';

const sizeMap = {
  small: {
    sizing: tokens.sizing.small,
    spacing: tokens.spacing.small,
  },
  medium: {
    sizing: tokens.sizing.medium,
    spacing: tokens.spacing.medium,
  },
  large: {
    sizing: tokens.sizing.large,
    spacing: tokens.spacing.medium,
  },
};

const regularVariantMap = {
  primary: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.green,
    hoverColor: tokens.colors.greenLight,
    borderColor: 'transparent',
  },
  secondary: {
    color: tokens.colors.navy,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.navy, tokens.opacity.low),
    borderColor: tokens.colors.navy,
  },
  plain: {
    color: tokens.colors.blueDarkText,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.navy, tokens.opacity.low),
    borderColor: 'transparent',
  },
  destructive: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.red,
    hoverColor: tokens.colors.redLight,
    borderColor: 'transparent',
  },
};

const invertedVariantMap = {
  ...regularVariantMap,
  secondary: {
    color: tokens.colors.white,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.white, tokens.opacity.low),
    borderColor: hexToRgba(tokens.colors.white, tokens.opacity.medium),
  },
  plain: {
    color: tokens.colors.blueDark,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.white, tokens.opacity.low),
    borderColor: 'transparent',
  },
};

const buttonStyle = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.tight};
  margin: 0;
  padding: 0;
  outline: 0;
  border-style: solid;
  border-radius: ${tokens.borderRadius.medium};
  border-width: ${tokens.borderWidth.medium};
  transition: background-color 125ms ease-out;
  cursor: pointer;
`;

type IconProps = {
  size?: 'medium' | 'small' | 'xsmall';
};

type ButtonIconOnlyProps = {
  icon: React.ComponentType<IconProps>;
  children?: never;
  iconLeft?: never;
  iconRight?: never;
  'aria-label': string;
};

type ButtonRegularProps = {
  icon?: never;
  children: React.ReactNode;
  iconLeft?: React.ComponentType<IconProps>;
  iconRight?: React.ComponentType<IconProps>;
  'aria-label'?: string;
};

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  inverted?: boolean;
} & (ButtonIconOnlyProps | ButtonRegularProps) &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  inverted = false,
  icon: Icon,
  iconLeft: IconLeft,
  iconRight: IconRight,
  children,
  ...restProps
}: ButtonProps) {
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;

  return (
    <button
      css={css`
        ${buttonStyle}
        height: ${sizeMap[size].sizing};
        min-width: ${sizeMap[size].sizing};
        width: ${fullWidth ? '100%' : 'auto'};
        padding-left: ${!Icon && sizeMap[size].spacing};
        padding-right: ${!Icon && sizeMap[size].spacing};
        color: ${variantMap[variant].color};
        background-color: ${variantMap[variant].backgroundColor};
        border-color: ${variantMap[variant].borderColor};

        &:hover:not(:disabled) {
          background-color: ${variantMap[variant].hoverColor};
        }

        &:active:not(:disabled) {
          background-color: ${variantMap[variant].backgroundColor};
        }

        &:disabled {
          opacity: ${tokens.opacity.medium};
          cursor: default;
        }
      `}
      {...restProps}
    >
      {Icon && <Icon size="medium" />}
      {IconLeft && <IconLeft size="medium" />}
      {children && (
        <span
          css={css`
            user-select: none;
            ${IconLeft && `padding-left: ${tokens.spacing.small};`}
            ${IconRight && `padding-right: ${tokens.spacing.small};`}
          `}
        >
          {children}
        </span>
      )}
      {IconRight && <IconRight size="medium" />}
    </button>
  );
}

export default Button;
