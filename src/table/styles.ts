import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

// Explicit height for head cells
// Must be set to offset shadows from top and enable mask for thead
const HEAD_CELL_HEIGHT = 48;

type WithShadows = {
  hasShadowLeft: boolean;
  hasShadowRight: boolean;
};

// Wrapper required for shadows to render properly
// Also masking table column labels
export function outerWrapperStyle({
  hasShadowLeft,
  hasShadowRight,
}: WithShadows) {
  return css`
    position: relative;
    mask-image: linear-gradient(
        90deg,
        ${hasShadowLeft && 'rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%'}
          ${hasShadowRight && hasShadowLeft && ','}
          ${hasShadowRight && 'rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%'}
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) ${HEAD_CELL_HEIGHT}px,
        rgba(0, 0, 0, 1) ${HEAD_CELL_HEIGHT + 1}px,
        rgba(0, 0, 0, 1) 100%
      );
  `;
}

type TableWrapperStyleOptions = {
  isFocusVisible: boolean;
} & WithShadows;

// When shadows are visible corners of focus outline are not rounded
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

type ShadowsStyleOptions = { inverted: boolean } & WithShadows;

export function shadowsStyle({
  inverted,
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
    mix-blend-mode: multiply;

    ${inverted
      ? css`
          box-shadow: ${hasShadowLeft &&
            `inset 24px 0 24px -24px ${tokens.colors.navy}`}${hasShadowLeft &&
            hasShadowRight &&
            ','}${hasShadowRight &&
            `inset -24px 0 24px -24px ${tokens.colors.navy}`};
        `
      : css`
          box-shadow: ${hasShadowLeft &&
            `inset 12px 0 12px -12px ${hexToRgba(
              tokens.colors.navy,
              0.3,
            )}`}${hasShadowLeft && hasShadowRight && ','}${hasShadowRight &&
            `inset -12px 0 12px -12px ${hexToRgba(tokens.colors.navy, 0.3)}`};
        `}
  `;
}

type TableStyleOptions = { inverted: boolean } & WithShadows;

// Basic table styles with round corners applied to corner cells
// When shadows are visible corners are not rounded
export function tableStyle({
  inverted,
  hasShadowLeft,
  hasShadowRight,
}: TableStyleOptions) {
  const borderColor = hexToRgba(
    inverted ? tokens.colors.white : tokens.colors.navy,
    0.15,
  );

  return css`
    border: 0;
    border-collapse: separate;
    border-spacing: 0;
    margin: 0;

    & tr td {
      background-color: ${inverted
        ? tokens.colors.navyLight
        : tokens.colors.white};
    }

    & tr td,
    & tr th {
      color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    }

    // Round corners

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

    // Borders

    tr td {
      border-top: ${tokens.borderWidth.thin} solid ${borderColor};

      &:first-of-type {
        border-left: ${tokens.borderWidth.thin} solid ${borderColor};
      }

      &:last-of-type {
        border-right: ${tokens.borderWidth.thin} solid ${borderColor};
      }
    }

    tr:last-of-type td {
      border-bottom: ${tokens.borderWidth.thin} solid ${borderColor};
    }
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
  `;
}
