import { Range as RangeBase } from 'react-range';

import Track from './track';
import { useSlider } from './slider-context';
import Handle from './handle';

type RangeProps = {
  onChange: (value: number[]) => void;
  onChangeEnd?: (value: number[]) => void;
  label: string;
  formatLabel: (value: number) => number | string;
};

function Range({ onChange, onChangeEnd, label, formatLabel }: RangeProps) {
  const { value, min, max, step, disabled } = useSlider();

  return (
    <RangeBase
      {...{
        values: value,
        min,
        max,
        step,
        disabled,
        onChange,
        onFinalChange: onChangeEnd,
      }}
      renderTrack={({ props, children }) => (
        <Track {...props}>{children}</Track>
      )}
      renderThumb={({ props, value, isDragged }) => (
        <Handle
          {...props}
          {...{
            value,
            isDragged,
            'aria-label': label,
            formatLabel,
          }}
        />
      )}
    />
  );
}

export default Range;
