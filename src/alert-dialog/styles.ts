import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { mediaQuery } from '../helpers';

export function dialogStyle() {
  return css`
    max-width: 480px;

    ${mediaQuery.aboveSmall} {
      min-width: 300px;
    }
  `;
}

export function bodyStyle() {
  return css`
    box-shadow: none;
    overflow: hidden;
    text-align: center;
  `;
}

export function headerStyle() {
  return css`
    text-align: center;
    padding-left: 48px;
  `;
}

export function footerStyle() {
  return css`
    padding-bottom: ${tokens.spacing.large};
    justify-content: center;

    & button:first-of-type {
      margin-right: 0;
    }
  `;
}
