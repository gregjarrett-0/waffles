import React from 'react';

import {
  loaderPathStyle,
  loaderSvgStyle,
  svgWrapperStyle,
  containerStyle,
  wrapperStyle,
} from './styles';

type LoaderProps = {
  /* Whether the Loader is inverted in color or not. */
  /* @default false */
  inverted?: boolean;
  /* Accessible label describing the context in which the Loader is used. */
  'aria-label': string;
} & React.SVGAttributes<SVGElement>;

function Loader({
  inverted = false,
  'aria-label': ariaLabel,
  ...restProps
}: LoaderProps) {
  const { width, height } = restProps;

  return (
    <div
      data-testid="loader-wrapper"
      css={wrapperStyle({ height, width })}
      role="alert"
      aria-label={ariaLabel}
    >
      <div css={containerStyle()}>
        <div css={svgWrapperStyle()}>
          <svg
            viewBox="0 0 2640 3444"
            css={loaderSvgStyle({ inverted })}
            {...restProps}
          >
            <path
              css={loaderPathStyle()}
              d="M0 0 M2569 1056L143 2447V149l1175 673v1867l1248 715"
              fill="none"
              strokeLinejoin="round"
              strokeWidth="300"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Loader;
