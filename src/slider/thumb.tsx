import React, { forwardRef } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { thumbStyle, thumbDotStyle } from './styles';

type ThumbProps = {
  isDragged: boolean;
  disabled: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function ThumbInternal(
  { isDragged, disabled, ...restProps }: ThumbProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      {...mergeProps(focusProps, restProps)}
      ref={ref}
      css={thumbStyle({ disabled })}
    >
      <div css={thumbDotStyle({ isDragged, isFocusVisible })} />
    </div>
  );
}

const Thumb = forwardRef(ThumbInternal);

export default Thumb;
