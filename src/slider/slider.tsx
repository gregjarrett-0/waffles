import { Range } from 'react-range';

import ValueLabels from './value-labels';
import Track from './track';
import Thumb from './thumb';
import LimitLabels from './limit-labels';

type SliderProps = {
  value: number[];
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number[]) => void;
  disabled?: boolean;
  hideLabels?: boolean;
};

function Slider({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled = false,
  hideLabels = false,
}: SliderProps) {
  if (value.length > 2 || value.length === 0) {
    throw new Error('Array of only one or two Slider values is supported.');
  }

  return (
    <div>
      {!hideLabels && <ValueLabels value={value} />}
      <Range
        {...{ values: value, min, max, step, onChange, disabled }}
        renderTrack={({ props, children }) => (
          <Track {...props} {...{ value, min, max, disabled }}>
            {children}
          </Track>
        )}
        renderThumb={({ props, isDragged }) => (
          <Thumb {...props} isDragged={isDragged} disabled={disabled} />
        )}
      />
      {!hideLabels && <LimitLabels min={min} max={max} />}
    </div>
  );
}

export default Slider;
