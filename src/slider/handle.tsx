import React, { forwardRef } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { handleStyle, handleDotStyle } from './styles';
import { useSlider } from './slider-context';

type HandleProps = {
  value: number;
  isDragged: boolean;
  formatLabel: (value: number) => number | string;
} & React.HTMLAttributes<HTMLDivElement>;

function HandleInternal(
  {
    value, // Just a single value passed via render prop, not global array one
    isDragged,
    formatLabel,
    ...restProps
  }: HandleProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { hasError, disabled, inverted } = useSlider();
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      {...mergeProps(focusProps, restProps)}
      aria-valuetext={`${formatLabel(value)}`}
      ref={ref}
      css={handleStyle({ hasError, disabled, inverted })}
    >
      <div
        css={handleDotStyle({ isDragged, hasError, inverted, isFocusVisible })}
      />
    </div>
  );
}

const Handle = forwardRef(HandleInternal);

export default Handle;
