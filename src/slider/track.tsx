import React, { forwardRef } from 'react';

import { trackStyle, trackLineStyle } from './styles';

type TrackProps = {
  value: number[];
  disabled: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function TrackInternal(
  { value, disabled, children, ...restProps }: TrackProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div {...restProps} ref={ref} css={trackStyle({ disabled })}>
      <div css={trackLineStyle({ value })} />
      {children}
    </div>
  );
}

const Track = forwardRef(TrackInternal);

export default Track;
