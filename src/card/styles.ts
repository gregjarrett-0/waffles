import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

type CardStyleOptions = {
  isFocusVisible: boolean;
  hasHeadstone: boolean;
  disableHoverEffect: boolean;
  inverted: boolean;
};

export function cardStyle({
  isFocusVisible,
  hasHeadstone,
  disableHoverEffect,
  inverted,
}: CardStyleOptions) {
  return css`
    display: block;
    position: relative;
    padding: ${tokens.spacing.medium};
    ${hasHeadstone &&
    css`
      padding-top: 28px;
    `}
    background-color: ${inverted
      ? tokens.colors.navyLight
      : tokens.colors.white};
    border: ${tokens.borderWidth.thin} solid
      ${hexToRgba(inverted ? tokens.colors.white : tokens.colors.navy, 0.15)};
    border-radius: ${tokens.borderRadius.medium};
    transition: box-shadow 600ms cubic-bezier(0.1, 0.8, 0.2, 1),
      transform 600ms cubic-bezier(0.1, 0.8, 0.2, 1);
    text-decoration: none;
    outline: 0;

    &:where(a, button) {
      cursor: pointer;
      user-select: none;
    }

    ${isFocusVisible && `box-shadow: 0 0 0 2px ${tokens.colors.blueDark};`}

    ${!disableHoverEffect &&
    css`
      &:hover {
        box-shadow: ${tokens.boxShadow.thick};
        transform: translateY(-1px);

        ${isFocusVisible &&
        `box-shadow: 0 0 0 2px ${tokens.colors.blueDark}, ${tokens.boxShadow.thick};`}
      }

      &:focus-within {
        ${!isFocusVisible &&
        css`
          box-shadow: ${tokens.boxShadow.thick};
          transform: translateY(-1px);
        `}
      }
    `}
  `;
}

export function headstoneStyle() {
  return css`
    position: absolute;
    z-index: ${tokens.zIndex.default};
    top: -20px;
    left: ${tokens.spacing.medium};
    display: flex;
    gap: ${tokens.spacing.small};
  `;
}
