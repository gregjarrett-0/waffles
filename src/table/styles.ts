import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

// Explicit height for head cells must be set to offset shadows from top
const HEAD_CELL_HEIGHT = 48;

// Simple wrapper required for shadows to render properly
export function outerWrapperStyle() {
  return css`
    position: relative;
  `;
}

type WithShadows = {
  hasShadowLeft: boolean;
  hasShadowRight: boolean;
};

type TableWrapperStyleOptions = {
  isFocusVisible: boolean;
} & WithShadows;

// When shadows are visible corners are not rounded
export function tableWrapperStyle({
  isFocusVisible,
  hasShadowLeft,
  hasShadowRight,
}: TableWrapperStyleOptions) {
  return css`
    outline: 0;
    overflow: auto;
    transition: box-shadow 125ms ease-out;

    ${!hasShadowLeft &&
    css`
      border-top-left-radius: ${tokens.borderRadius.medium};
      border-bottom-left-radius: ${tokens.borderRadius.medium};
    `}

    ${!hasShadowRight &&
    css`
      border-top-right-radius: ${tokens.borderRadius.medium};
      border-bottom-right-radius: ${tokens.borderRadius.medium};
    `}

    ${isFocusVisible && `box-shadow: 0 0 0 2px ${tokens.colors.blueDark};`}
  `;
}

type ShadowsStyleOptions = WithShadows;

export function shadowsStyle({
  hasShadowLeft,
  hasShadowRight,
}: ShadowsStyleOptions) {
  return css`
    position: absolute;
    z-index: ${tokens.zIndex.default};
    top: ${HEAD_CELL_HEIGHT}px;
    left: 0;
    height: calc(100% - ${HEAD_CELL_HEIGHT}px);
    width: 100%;
    pointer-events: none;
    ${hasShadowLeft &&
    `border-left: ${tokens.borderWidth.thin} solid ${hexToRgba(
      tokens.colors.navy,
      0.15,
    )};`}
    ${hasShadowRight &&
    `border-right: ${tokens.borderWidth.thin} solid ${hexToRgba(
      tokens.colors.navy,
      0.15,
    )};`}
    box-shadow: ${hasShadowLeft &&
    'inset 12px 0 12px -12px rgba(5, 25, 45, 0.3)'}${hasShadowLeft &&
    hasShadowRight &&
    ','}${hasShadowRight && 'inset -12px 0 12px -12px rgba(5, 25, 45, 0.3)'};
  `;
}

type TableStyleOptions = WithShadows;

// Basic table styles with round corners applied to corner cells
// When shadows are visible corners are not rounded
export function tableStyle({
  hasShadowLeft,
  hasShadowRight,
}: TableStyleOptions) {
  return css`
    border: 0;
    border-collapse: separate;
    border-spacing: 0;
    margin: 0;

    ${!hasShadowLeft &&
    css`
      tr:first-of-type td:first-of-type {
        border-top-left-radius: ${tokens.borderRadius.medium};
      }

      tr:last-of-type td:first-of-type {
        border-bottom-left-radius: ${tokens.borderRadius.medium};
      }
    `}

    ${!hasShadowRight &&
    css`
      tr:first-of-type td:last-of-type {
        border-top-right-radius: ${tokens.borderRadius.medium};
      }

      tr:last-of-type td:last-of-type {
        border-bottom-right-radius: ${tokens.borderRadius.medium};
      }
    `}
  `;
}

const cellBaseStyle = css`
  font-family: ${tokens.fontFamilies.sansSerif};
  text-align: left;
  vertical-align: text-top;
  padding: ${tokens.spacing.medium};
`;

export function headCellStyle() {
  return css`
    ${cellBaseStyle}
    height: ${HEAD_CELL_HEIGHT}px;
    font-size: ${tokens.fontSizes.small};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.default};
    letter-spacing: ${tokens.letterSpacing.relaxed};
    text-transform: uppercase;
    border-top: 0;
    min-width: 200px;
    max-width: 90vw;
  `;
}

export function cellStyle() {
  return css`
    ${cellBaseStyle}
    font-size: ${tokens.fontSizes.medium};
    font-weight: ${tokens.fontWeights.regular};
    line-height: ${tokens.lineHeights.relaxed};
    background-color: ${tokens.colors.white};

    border-top: ${tokens.borderWidth.thin} solid
      ${hexToRgba(tokens.colors.navy, 0.15)};

    &:first-of-type {
      border-left: ${tokens.borderWidth.thin} solid
        ${hexToRgba(tokens.colors.navy, 0.15)};
    }

    &:last-of-type {
      border-right: ${tokens.borderWidth.thin} solid
        ${hexToRgba(tokens.colors.navy, 0.15)};
    }

    tr:last-of-type & {
      border-bottom: ${tokens.borderWidth.thin} solid
        ${hexToRgba(tokens.colors.navy, 0.15)};
    }
  `;
}
