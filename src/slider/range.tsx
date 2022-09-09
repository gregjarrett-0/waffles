import { Range as RangeBase } from 'react-range';

import Track from './track';
import { useSlider } from './slider-context';
import Handle from './handle';

type RangeProps = {
  onChangeEnd?: (value: number[]) => void;
  label: string;
  formatLabel: (value: number) => number | string;
};

function Range({ onChangeEnd, label, formatLabel }: RangeProps) {
  const { value, onChange, min, max, step, disabled } = useSlider();

  return (
    <RangeBase
      {...{
        values: value,
        onChange,
        min,
        max,
        step,
        disabled,
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
