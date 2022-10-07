import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

export function tableStyle() {
  return css`
    border-collapse: separate;
    table-layout: fixed;
    border-spacing: 0;
    width: 100%;
  `;
}

const cellBaseStyle = css`
  font-family: ${tokens.fontFamilies.sansSerif};
  text-align: left;
  word-wrap: break-word;
  vertical-align: top;
  padding: ${tokens.spacing.medium};
  overflow: hidden;
`;

export function columnStyle() {
  return css`
    ${cellBaseStyle}
    font-size: ${tokens.fontSizes.small};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.default};
    letter-spacing: ${tokens.letterSpacing.relaxed};
    text-transform: uppercase;
    border-top: 0;
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

    tr:first-of-type &:first-of-type {
      border-top-left-radius: ${tokens.borderRadius.medium};
    }

    tr:first-of-type &:last-of-type {
      border-top-right-radius: ${tokens.borderRadius.medium};
    }

    tr:last-of-type &:first-of-type {
      border-bottom-left-radius: ${tokens.borderRadius.medium};
    }

    tr:last-of-type &:last-of-type {
      border-bottom-right-radius: ${tokens.borderRadius.medium};
    }

    tr:last-of-type & {
      border-bottom: ${tokens.borderWidth.thin} solid
        ${hexToRgba(tokens.colors.navy, 0.15)};
    }
  `;
}
