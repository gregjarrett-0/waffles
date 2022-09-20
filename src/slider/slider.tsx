import { useState, useEffect } from 'react';

import { useId } from '../hooks';

import ValueLabels from './value-labels';
import {
  initialError,
  hasError,
  isDecimal,
  isValidValue,
  isNotWhitelisted,
} from './utils';
import { SliderProvider } from './slider-context';
import RangeLabels from './range-labels';
import Range from './range';
import Inputs from './inputs';
import Errors from './errors';

type SliderProps = {
  /* Current slider value. Array of values. For single handle provide single value e.g. `[20]`, and for range provide two values, e.g. `[20, 50]`. */
  value: number[];
  /* Handler called when handle is moved. */
  onChange: (value: number[]) => void;
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
  const [inputValue, setInputValue] = useState<Array<string | number>>(value);
  const [error, setError] = useState(initialError(isSingleInput));

  // Sync value from props and inputs
  // Clear all inputs errors when Slider is dragged
  useEffect(() => {
    setInputValue(value);
    setError(initialError(isSingleInput));
  }, [value, isSingleInput]);

  // Separate each input handler for readability

  function handleSingleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const parsedValue = parseFloat(event.target.value);

    if (isDecimal(inputValue)) {
      setInputValue([inputValue]);
      setError(['']);
    }

    if (
      isValidValue(inputValue, step) &&
      parsedValue >= min &&
      parsedValue <= max
    ) {
      onChange([parsedValue]);
    } else if (isNotWhitelisted(inputValue)) {
      if (parsedValue < min || parsedValue > max) {
        setError(['Input value is out of allowed range.']);
      } else {
        setError(['Input value is not overlapping with step.']);
      }
    }
  }

  function handleFirstInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const parsedValue = parseFloat(event.target.value);

    if (isDecimal(inputValue)) {
      setInputValue([inputValue, value[1]]);
      setError(['', error[1]]);
    }

    if (
      isValidValue(inputValue, step) &&
      parsedValue >= min &&
      parsedValue <= value[1]
    ) {
      onChange([parsedValue, value[1]]);
    } else if (isNotWhitelisted(inputValue)) {
      if (parsedValue < min || parsedValue > value[1]) {
        setError(['First input value is out of allowed range.', error[1]]);
      } else {
        setError(['First input value is not overlapping with step.', error[1]]);
      }
    }
  }

  function handleSecondInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const parsedValue = parseFloat(event.target.value);

    if (isDecimal(inputValue)) {
      setInputValue([value[0], inputValue]);
      setError([error[0], '']);
    }

    if (
      isValidValue(inputValue, step) &&
      parsedValue >= value[0] &&
      parsedValue <= max
    ) {
      onChange([value[0], parsedValue]);
    } else if (isNotWhitelisted(inputValue)) {
      if (parsedValue < value[0] || parsedValue > max) {
        setError([error[0], 'Second input value is out of allowed range.']);
      } else {
        setError([
          error[0],
          'Second input value is not overlapping with step.',
        ]);
      }
    }
  }

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
            value={inputValue}
            error={error}
            isSingle={isSingleInput}
            handleSingleInputChange={handleSingleInputChange}
            handleFirstInputChange={handleFirstInputChange}
            handleSecondInputChange={handleSecondInputChange}
            label={ariaLabel}
          />
        )}
        {!hideLabels && !showInputs && (
          <ValueLabels formatLabel={formatLabel} />
        )}
        <Range label={ariaLabel} formatLabel={formatLabel} />
        {!hideLabels && <RangeLabels formatLabel={formatLabel} />}
        {hasError(error) && (
          <Errors error={error} id={errorId} inverted={inverted} />
        )}
      </div>
    </SliderProvider>
  );
}

export default Slider;
