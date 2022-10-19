import { useState, useEffect } from 'react';

import { useId } from '../hooks';

import ValueLabels from './value-labels';
import { initialError, hasError } from './utils';
import { SliderProvider } from './slider-context';
import RangeLabels from './range-labels';
import Range from './range';
import Inputs from './inputs';
import Errors from './errors';

type SliderProps = {
  /* Current Slider value(s) as an array. For a _single-value_ Slider, provide a single value array, e.g. `[20]`. For a _range_ Slider provide two values, e.g. `[20, 50]`. */
  value: number[];
  /* Handler called when handle is moved. */
  onChange: (value: number[]) => void;
  /* The minimum allowed value of the Slider. Can be a decimal or negative. */
  /* @default 0 */
  min?: number;
  /* The maximum allowed value of the Slider. Can be a decimal or negative. */
  /* @default 100 */
  max?: number;
  /* The minimal distance between values. Can be a decimal. */
  /* @default 1 */
  step?: number;
  /* Whether Slider is disabled or not. */
  /* @default false */
  disabled?: boolean;
  /* Hides all labels: min, max, and value. */
  /* @default false */
  hideLabels?: boolean;
  /* Shows text inputs instead of value labels. */
  /* @default false */
  showInputs?: boolean;
  /* Transforms the formatting of all labels. Useful for currency Sliders. */
  formatLabel?: (value: number) => number | string;
  /* Sets the style of the Slider suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Accessible label, should always be provided with context of the Slider, e.g. "Number of seats".*/
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
  showInputs = false,
  inverted = false,
  'aria-label': ariaLabel,
  formatLabel = (value) => value,
}: SliderProps) {
  if (value.length > 2 || value.length === 0) {
    throw new Error('Array of only one or two Slider values is supported.');
  }

  const isSingleInput = value.length === 1;
  const errorId = `slider-input-error-${useId()}`;

  // Because inputs errors are shown for Slider too, state and handlers for them have to be here
  // Separate state for inputs is required, because some characters other than numeric must be supported
  // Both input and error state is an array of one or two items, to mimic structure of Slider value
  // If there is no error, empty string is provided
  const [inputValue, setInputValue] = useState<Array<string | number>>(value);
  const [error, setError] = useState(initialError(isSingleInput));

  // Sync value from props and inputs
  // Clear all inputs errors when Slider is dragged
  useEffect(() => {
    setInputValue(value);
    setError(initialError(isSingleInput));
  }, [value, isSingleInput]);

  return (
    <SliderProvider
      {...{
        value,
        onChange,
        min,
        max,
        step,
        hasError: hasError(error),
        disabled,
        inverted,
      }}
    >
      <div>
        {showInputs && (
          <Inputs
            id={errorId}
            inputValue={inputValue}
            setInputValue={setInputValue}
            error={error}
            setError={setError}
            isSingle={isSingleInput}
            label={ariaLabel}
          />
        )}
        {!hideLabels && !showInputs && (
          <ValueLabels formatLabel={formatLabel} />
        )}
        <Range label={ariaLabel} formatLabel={formatLabel} />
        {!hideLabels && <RangeLabels formatLabel={formatLabel} />}
        {showInputs && hasError(error) && (
          <Errors error={error} id={errorId} inverted={inverted} />
        )}
      </div>
    </SliderProvider>
  );
}

export default Slider;
