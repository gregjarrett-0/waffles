import { getTrackBackground } from 'react-range';
import React, { forwardRef } from 'react';

import {
  trackStyle,
  trackLineStyle,
  getBackgroundColor,
  getFilledColor,
} from './styles';
import { useSlider } from './slider-context';

type TrackProps = React.HTMLAttributes<HTMLDivElement>;

function TrackInternal(
  { children, ...restProps }: TrackProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { value, min, max, hasError, disabled, inverted } = useSlider();
  const filledColor = getFilledColor(inverted, hasError);
  const backgroundColor = getBackgroundColor(inverted);
  const trackBackground = getTrackBackground({
    values: value,
    min,
    max,
    colors:
      value.length == 1
        ? [filledColor, backgroundColor]
        : [backgroundColor, filledColor, backgroundColor],
  });

  return (
    <div
      {...restProps}
      ref={ref}
      data-testid="slider-track"
      css={trackStyle({ disabled })}
    >
      <div css={trackLineStyle()} style={{ background: trackBackground }} />
      {children}
    </div>
  );
}

const Track = forwardRef(TrackInternal);

export default Track;
