import { Range } from 'react-range';

import Track from './track';
import Thumb from './thumb';

type SliderProps = {
  value: number[];
  onChange: (value: number[]) => void;
};

function Slider({ value, onChange }: SliderProps) {
  return (
    <Range
      step={1}
      min={0}
      max={100}
      values={value}
      onChange={onChange}
      renderTrack={({ props, children }) => (
        <Track {...props} value={value}>
          {children}
        </Track>
      )}
      renderThumb={({ props, isDragged }) => (
        <Thumb {...props} isDragged={isDragged} />
      )}
    />
  );
}

export default Slider;
