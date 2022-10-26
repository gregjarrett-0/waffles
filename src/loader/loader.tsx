import React from 'react';

import {
  loaderPathStyle,
  loaderSvgStyle,
  svgWrapperStyle,
  containerStyle,
  wrapperStyle,
} from './styles';

type LoaderProps = {
  /* Whether the loader is inverted in color or not. */
  /* @default false */
  inverted?: boolean;
} & React.SVGAttributes<SVGElement>;

function Loader({ inverted = false, ...restProps }: LoaderProps) {
  const { width, height } = restProps;
  return (
    <div
      css={wrapperStyle({ height: height as string, width: width as string })}
      data-testid="loader-wrapper"
    >
      <div css={containerStyle}>
        <div css={svgWrapperStyle}>
          <svg
            viewBox="0 0 2640 3444"
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
    </div>
  );
}

export default Loader;
