import ValueLabels from './value-labels';
import { SliderProvider } from './slider-context';
import RangeLabels from './range-labels';
import Range from './range';
import Inputs from './inputs';

type SliderProps = {
  /* Current slider value. Array of values. For single handle provide single value e.g. `[20]`, and for range provide two values, e.g. `[20, 50]`. */
  value: number[];
  /* Handler called when handle is moved. */
  onChange: (value: number[]) => void;
  /* Handler called when handle stops moving, and change is finished. Useful when the current value must be sent to the server. */
  onChangeEnd?: (value: number[]) => void;
  /* The minimum allowed value of the slider. Can be decimal or negative. */
  /* @default 0 */
  min?: number;
  /* The maximum allowed value of the slider. Can be decimal or negative. */
  /* @default 100 */
  max?: number;
  /* The minimal distance between values. Can be decimal. */
  /* @default 1 */
  step?: number;
  /* Whether slider is disabled or not. */
  /* @default false */
  disabled?: boolean;
  /* Hides all labels: min, max, and value. */
  /* @default false */
  hideLabels?: boolean;
  /* Shows text inputs instead of value labels. */
  /* @default false */
  showInputs?: boolean;
  /* Transforms the formatting of all labels. Useful for currency sliders. */
  formatLabel?: (value: number) => number | string;
  /* Sets the style of the slider suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Accessible label, should always be provided with context of the slider, e.g. "Number of seats".*/
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
