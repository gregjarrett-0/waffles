import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

import Link from './link';

const sizeMap = {
  small: {
    fontSize: tokens.fontSizes.small,
  },
  medium: {
    fontSize: tokens.fontSizes.medium,
  },
  large: {
    fontSize: tokens.fontSizes.large,
  },
  inherit: {
    fontSize: 'inherit',
  },
};

const linkBaseStyle = css`
  display: inline;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  outline: 0;
  border-radius: ${tokens.borderRadius.medium};
  box-decoration-break: clone; // Nicely rounded background even between lines
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: box-shadow 125ms ease-out, background-color 125ms ease-out,
    text-decoration-color 200ms ease-out;

  & svg {
    vertical-align: middle;
    margin-top: -2px;
  }
`;

type LinkStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof Link>['size']>;
  inverted: boolean;
  isFocusVisible: boolean;
};

export function linkStyle({
  size,
  inverted,
  isFocusVisible,
}: LinkStyleOptions) {
  const mainColor = inverted ? tokens.colors.blue : tokens.colors.blueDarkText;

  const highlightColor = hexToRgba(
    inverted ? tokens.colors.white : tokens.colors.navy,
    tokens.opacity.low,
  );

  return css`
    ${linkBaseStyle}
    color: ${mainColor};
    font-size: ${sizeMap[size].fontSize};
    line-height: ${size === 'inherit' ? 'inherit' : tokens.lineHeights.relaxed};

    &:hover {
      background-color: ${highlightColor};
    }

    ${isFocusVisible
      ? css`
          box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
        `
      : css`
          &:hover {
            text-decoration-color: ${mainColor};
            box-shadow: 0 0 0 2px ${highlightColor};
          }
        `}
  `;
}

type InnerContentStyleOptions = {
  iconSize: 'small' | 'medium' | 'large';
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
};

export function innerContentStyle({
  iconSize,
  hasLeftIcon,
  hasRightIcon,
}: InnerContentStyleOptions) {
  const gap = iconSize === 'small' ? '2px' : tokens.spacing.xsmall;

  return css`
    ${hasLeftIcon && `padding-left: ${gap};`}
    ${hasRightIcon && `padding-right: ${gap};`}
  `;
}
