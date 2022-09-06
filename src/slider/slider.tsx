import ValueLabels from './value-labels';
import { SliderProvider } from './slider-context';
import RangeLabels from './range-labels';
import Range from './range';
import Inputs from './inputs';

type SliderProps = {
  value: number[];
  onChange: (value: number[]) => void;
  onChangeEnd?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  hideLabels?: boolean;
  showInputs?: boolean;
  formatLabel?: (value: number) => number | string;
  inverted?: boolean;
  'aria-label': string;
};

function Slider({
  value,
  onChange,
  onChangeEnd,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  hideLabels = false,
  showInputs = false,
  inverted = false,
  'aria-label': ariaLabel,
  formatLabel = (value) => value,
}: SliderProps) {
  if (value.length > 2 || value.length === 0) {
    throw new Error('Array of only one or two Slider values is supported.');
  }

  return (
    <SliderProvider {...{ value, min, max, step, disabled, inverted }}>
      <div>
        {showInputs && (
          <Inputs
            onChange={onChange}
            onChangeEnd={onChangeEnd}
            label={ariaLabel}
          />
        )}
        {!hideLabels && !showInputs && (
          <ValueLabels formatLabel={formatLabel} />
        )}
        <Range
          onChange={onChange}
          onChangeEnd={onChangeEnd}
          label={ariaLabel}
          formatLabel={formatLabel}
        />
        {!hideLabels && <RangeLabels formatLabel={formatLabel} />}
      </div>
    </SliderProvider>
  );
}

export default Slider;
