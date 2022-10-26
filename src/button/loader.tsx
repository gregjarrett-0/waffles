import React from 'react';

import { Loader } from '../loader';

import { loaderStyle, loaderWrapperStyle } from './styles';
import Button from './button';

type ButtonLoaderProps = {
  size: NonNullable<React.ComponentProps<typeof Button>['size']>;
  variant: NonNullable<React.ComponentProps<typeof Button>['variant']>;
  inverted: NonNullable<React.ComponentProps<typeof Button>['inverted']>;
  isIconOnly: boolean;
};

function ButtonLoader({
  size,
  variant,
  inverted,
  isIconOnly,
}: ButtonLoaderProps) {
  return (
    <span css={loaderWrapperStyle({ size, hasLoadingLabel: !isIconOnly })}>
      <Loader
        css={loaderStyle({ variant, inverted })}
        aria-label="Loading"
        width={size === 'small' ? '12' : '16'} // Setting width prop here so that it gets passed to the loader as restProps for the svg element
      />
      {!isIconOnly && <span aria-hidden="true">Loading…</span>}
    </span>
  );
}

export default ButtonLoader;
