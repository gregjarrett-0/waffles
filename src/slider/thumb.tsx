import React, { forwardRef } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { thumbStyle, thumbDotStyle } from './styles';

type ThumbProps = {
  isDragged: boolean;
  disabled: boolean;
  inverted: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function ThumbInternal(
  { isDragged, disabled, inverted, ...restProps }: ThumbProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      {...mergeProps(focusProps, restProps)}
      ref={ref}
      css={thumbStyle({ disabled, inverted })}
    >
      <div css={thumbDotStyle({ isDragged, inverted, isFocusVisible })} />
    </div>
  );
}

const Thumb = forwardRef(ThumbInternal);

export default Thumb;
