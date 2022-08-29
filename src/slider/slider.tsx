import { Range } from 'react-range';

import Track from './track';
import Thumb from './thumb';

type SliderProps = {
  value: number[];
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number[]) => void;
  disabled?: boolean;
};

function Slider({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled = false,
}: SliderProps) {
  return (
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
  );
}

export default Slider;
