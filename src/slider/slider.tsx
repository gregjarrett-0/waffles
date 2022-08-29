import { Range } from 'react-range';

import ValueLabels from './value-labels';
import Track from './track';
import Thumb from './thumb';
import LimitLabels from './limit-labels';

type SliderProps = {
  value: number[];
  onChange: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  hideLabels?: boolean;
  inverted?: boolean;
  'aria-label': string;
};

function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  hideLabels = false,
  inverted = false,
  'aria-label': ariaLabel,
}: SliderProps) {
  if (value.length > 2 || value.length === 0) {
    throw new Error('Array of only one or two Slider values is supported.');
  }

  return (
    <div>
      {!hideLabels && <ValueLabels value={value} inverted={inverted} />}
      <Range
        {...{ values: value, min, max, step, onChange, disabled }}
        renderTrack={({ props, children }) => (
          <Track {...props} {...{ value, min, max, disabled, inverted }}>
            {children}
          </Track>
        )}
        renderThumb={({ props, isDragged }) => (
          <Thumb
            {...props}
            {...{ isDragged, disabled, inverted, 'aria-label': ariaLabel }}
          />
        )}
      />
      {!hideLabels && <LimitLabels min={min} max={max} inverted={inverted} />}
    </div>
  );
}

export default Slider;
