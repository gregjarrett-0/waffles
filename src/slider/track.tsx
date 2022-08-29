import React, { forwardRef } from 'react';

import { trackStyle, trackLineStyle } from './styles';

type TrackProps = {
  value: number[];
  min: number;
  max: number;
  disabled: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function TrackInternal(
  { value, min, max, disabled, children, ...restProps }: TrackProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div {...restProps} ref={ref} css={trackStyle({ disabled })}>
      <div css={trackLineStyle({ value, min, max })} />
      {children}
    </div>
  );
}

const Track = forwardRef(TrackInternal);

export default Track;
