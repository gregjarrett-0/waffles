import React from 'react';

import {
  loaderPathStyle,
  loaderSvgStyle,
  loaderSvgWrapperStyle,
  wrapperStyle,
} from './styles';

type LoaderProps = {
  /* Whether the loader is inverted in color or not. */
  /* @default false */
  inverted?: boolean;
} & React.SVGAttributes<SVGElement>;

function Loader({ inverted = false, ...restProps }: LoaderProps) {
  return (
    <div css={wrapperStyle()} data-testid="loader-wrapper">
      <div css={loaderSvgWrapperStyle}>
        <svg
          viewBox="0 0 2569 3403"
          css={loaderSvgStyle({ inverted })}
          {...restProps}
        >
          <path
            css={loaderPathStyle}
            d="M0 0 M2569 1056L143 2447V149l1175 673v1867l1248 715"
            fill="none"
            strokeLinejoin="round"
            strokeWidth="300"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Loader;
