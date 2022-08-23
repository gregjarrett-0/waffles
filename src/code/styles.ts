import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

import Code from './code';

const sizeMap = {
  small: {
    fontSize: tokens.fontSizes.xsmall,
  },
  medium: {
    fontSize: tokens.fontSizes.small,
  },
  large: {
    fontSize: tokens.fontSizes.medium,
  },
  inherit: {
    fontSize: '86%',
  },
};

const baseCodeStyle = css`
  font-family: ${tokens.fontFamilies.mono};
  font-weight: ${tokens.fontWeights.regular};
  line-height: inherit;
  border-radius: ${tokens.borderRadius.medium};
  margin: 0 2px;
  padding: 2px 4px;
  white-space: nowrap;
`;

type CodeStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof Code>['size']>;
  inverted: boolean;
};

export function codeStyle({ size, inverted }: CodeStyleOptions) {
  return css`
    ${baseCodeStyle}
    mix-blend-mode: ${inverted ? 'regular' : 'multiply'};
    font-size: ${sizeMap[size].fontSize};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    background-color: ${inverted
      ? hexToRgba(tokens.colors.white, 0.3)
      : tokens.colors.beige};
  `;
}
