import React, { forwardRef } from 'react';

import { trackStyle, trackLineStyle } from './styles';

type TrackProps = { value: number[] } & React.HTMLAttributes<HTMLDivElement>;

function TrackInternal(
  { value, children, ...restProps }: TrackProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div {...restProps} ref={ref} css={trackStyle()}>
      <div css={trackLineStyle({ value })} />
      {children}
    </div>
  );
}

const Track = forwardRef(TrackInternal);

export default Track;
