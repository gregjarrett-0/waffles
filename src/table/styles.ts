import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

// Explicit height for head cells
// Must be set to offset shadows from top and enable mask for thead
const HEAD_CELL_HEIGHT = 50;
const ROW_HOVER_COLOR = '#f2f3f4';
const ROW_HOVER_COLOR_INVERTED = '#2f3b4f';

type ScrollableWrapperStyleOptions = {
  isShadowLeftVisible: boolean;
  isShadowRightVisible: boolean;
};

type OuterWrapperStyleOptions = {
  isFocusVisible: boolean;
} & ScrollableWrapperStyleOptions;

// Wrapper required for shadows and focus outline to render properly
// When Table's content is scrolling, corners of focus outline are straight
export function outerWrapperStyle({
  isFocusVisible,
  isShadowLeftVisible,
  isShadowRightVisible,
}: OuterWrapperStyleOptions) {
  return css`
    position: relative;
    width: 100%;
    transition: box-shadow 125ms ease-out;

    ${isFocusVisible && `box-shadow: 0 0 0 2px ${tokens.colors.blueDark};`}

    ${!isShadowLeftVisible &&
    css`
      border-radius: ${tokens.borderRadius.medium} 0 0
        ${tokens.borderRadius.medium};
    `}

    ${!isShadowRightVisible &&
    css`
      border-radius: 0 ${tokens.borderRadius.medium}
        ${tokens.borderRadius.medium} 0;
    `}
  `;
}

// Mask column labels when content is being scrolled
export function maskStyle({
  isShadowLeftVisible,
  isShadowRightVisible,
}: ScrollableWrapperStyleOptions) {
  return css`
    mask-image: linear-gradient(
        90deg,
        ${isShadowLeftVisible &&
          `rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) ${tokens.spacing.xxlarge}`}
          ${isShadowRightVisible && isShadowLeftVisible && ','}
          ${isShadowRightVisible &&
          `rgba(0, 0, 0, 1) calc(100% - ${tokens.spacing.xxlarge}), rgba(0, 0, 0, 0) 100%`}
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) ${HEAD_CELL_HEIGHT}px,
        rgba(0, 0, 0, 1) ${HEAD_CELL_HEIGHT + 1}px,
        rgba(0, 0, 0, 1) 100%
      );
  `;
}

// Allow content to be scrollable
export function tableWrapperStyle() {
  return css`
    outline: 0;
    overflow: auto;
    width: 100%;
  `;
}

type ShadowsStyleOptions = {
  inverted: boolean;
} & ScrollableWrapperStyleOptions;

// Show shadows to the sides when content is being scrolled
export function shadowsStyle({
  inverted,
  isShadowLeftVisible,
  isShadowRightVisible,
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
          box-shadow: ${isShadowLeftVisible &&
            `inset 24px 0 24px -24px ${tokens.colors.navy}`}${isShadowLeftVisible &&
            isShadowRightVisible &&
            ','}${isShadowRightVisible &&
            `inset -24px 0 24px -24px ${tokens.colors.navy}`};
        `
      : css`
          box-shadow: ${isShadowLeftVisible &&
            `inset 12px 0 12px -12px ${hexToRgba(
              tokens.colors.navy,
              0.3,
            )}`}${isShadowLeftVisible &&
            isShadowRightVisible &&
            ','}${isShadowRightVisible &&
            `inset -12px 0 12px -12px ${hexToRgba(tokens.colors.navy, 0.3)}`};
        `}
  `;
}

type TableStyleOptions = { inverted: boolean } & ScrollableWrapperStyleOptions;

// Basic table styles with: round corners applied to corner cells, and row highlighting
// When content is being scrolled, corners are straight
export function tableStyle({
  inverted,
  isShadowLeftVisible,
  isShadowRightVisible,
}: TableStyleOptions) {
  const borderColor = hexToRgba(
    inverted ? tokens.colors.white : tokens.colors.navy,
    0.15,
  );

  return css`
    border-collapse: separate;
    border-spacing: 0;
    margin: 0;
    border: 0;
    width: 100%;

    // Colors

    & td {
      background-color: ${inverted
        ? tokens.colors.navyLight
        : tokens.colors.white};
      transition: background-color 125ms ease-out;
    }

    & tr:hover td {
      background-color: ${inverted
        ? ROW_HOVER_COLOR_INVERTED
        : ROW_HOVER_COLOR};
    }

    & tr td,
    & tr th {
      color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    }

    // Round corners

    ${!isShadowLeftVisible &&
    css`
      & tr:first-of-type td:first-of-type {
        border-top-left-radius: ${tokens.borderRadius.medium};
      }

      & tr:last-of-type td:first-of-type {
        border-bottom-left-radius: ${tokens.borderRadius.medium};
      }
    `}

    ${!isShadowRightVisible &&
    css`
      tr:first-of-type td:last-of-type {
        border-top-right-radius: ${tokens.borderRadius.medium};
      }

      tr:last-of-type td:last-of-type {
        border-bottom-right-radius: ${tokens.borderRadius.medium};
      }
    `}

    // Borders

    & tr td {
      border-top: ${tokens.borderWidth.thin} solid ${borderColor};

      &:first-of-type {
        border-left: ${tokens.borderWidth.thin} solid ${borderColor};
      }

      &:last-of-type {
        border-right: ${tokens.borderWidth.thin} solid ${borderColor};
      }
    }

    & tr:last-of-type td {
      border-bottom: ${tokens.borderWidth.thin} solid ${borderColor};
    }

    & th:first-of-type {
      border-left: ${tokens.borderWidth.thin} solid transparent;
    }
  `;
}

const cellButtonBaseStyle = css`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: ${tokens.spacing.xsmall};
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  border-radius: ${tokens.borderRadius.medium};
  transition: box-shadow 125ms ease-out;
`;

type HeadCellStyleOptions = {
  isSortable: boolean;
};

export function headCellStyle({ isSortable }: HeadCellStyleOptions) {
  return css`
    padding: ${isSortable
      ? tokens.spacing.xsmall
      : `0 ${tokens.spacing.medium}`};
    height: ${HEAD_CELL_HEIGHT}px;
    min-width: 200px;
    max-width: 90vw;
    font-family: ${tokens.fontFamilies.sansSerif};
    font-size: ${tokens.fontSizes.small};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.default};
    letter-spacing: ${tokens.letterSpacing.relaxed};
    text-align: left;
    text-transform: uppercase;
  `;
}

type HeadCellSortButtonStyleOptions = {
  isFocusVisible: boolean;
};

export function headCellSortButtonStyle({
  isFocusVisible,
}: HeadCellSortButtonStyleOptions) {
  return css`
    ${cellButtonBaseStyle}
    padding: 0 12px;
    width: 100%;
    height: 100%;

    ${isFocusVisible &&
    `box-shadow: inset 0 0 0 2px ${tokens.colors.blueDark};`}
  `;
}

export function headCellWithIconStyle() {
  return css`
    display: flex;
    align-items: center;
    gap: ${tokens.spacing.xsmall};
  `;
}

export function headCellCheckboxStyle() {
  return css`
    vertical-align: middle;
    width: ${HEAD_CELL_HEIGHT}px;
    min-width: ${HEAD_CELL_HEIGHT}px;
    padding: ${tokens.spacing.medium};
  `;
}

export function cellStyle() {
  return css`
    padding: ${tokens.spacing.medium};
    vertical-align: middle;
    font-family: ${tokens.fontFamilies.sansSerif};
    font-size: ${tokens.fontSizes.medium};
    font-weight: ${tokens.fontWeights.regular};
    line-height: ${tokens.lineHeights.relaxed};
    text-align: left;
  `;
}

type CellMenuTriggerStyleOptions = {
  inverted: boolean;
  isFocusVisible: boolean;
};

export function cellMenuTriggerStyle({
  inverted,
  isFocusVisible,
}: CellMenuTriggerStyleOptions) {
  return css`
    ${cellButtonBaseStyle}
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    justify-content: center;
    padding: 0 ${tokens.spacing.small};
    height: ${tokens.sizing.small};
    min-width: ${tokens.sizing.small};
    margin-left: -${tokens.spacing.small};

    ${isFocusVisible && `box-shadow: 0 0 0 2px ${tokens.colors.blueDark};`}
  `;
}
