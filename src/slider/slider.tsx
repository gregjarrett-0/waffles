import { useState, useEffect } from 'react';

import ValueLabels from './value-labels';
import {
  initialError,
  isDecimal,
  isValidValue,
  isNotWhitelisted,
} from './utils';
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

  const isSingleInput = value.length === 1;

  // Because inputs error is shown for Slider too state and handlers for them have to be here

  // Separate state for inputs is required, because some characters other than numeric must be supported
  // Both input and error state is an array of one or two items, to mimic structure of Slider value
  const [inputValue, setInputValue] = useState<Array<string | number>>(value);
  const [hasError, setHasError] = useState(initialError(isSingleInput));

  // Sync value from props and inputs
  // Clear all inputs errors when Slider is dragged
  useEffect(() => {
    setInputValue(value);
    setHasError(initialError(isSingleInput));
  }, [value, isSingleInput]);

  // Separate each input handler for readability

  function handleSingleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const parsedValue = parseFloat(event.target.value);

    if (isDecimal(inputValue)) {
      setInputValue([inputValue]);
    }

    if (
      isValidValue(inputValue, step) &&
      parsedValue >= min &&
      parsedValue <= max
    ) {
      onChange([parsedValue]);
      onChangeEnd?.([parsedValue]);
      setHasError([false]);
    } else {
      isNotWhitelisted(inputValue) && setHasError([true]);
    }
  }

  function handleFirstInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const parsedValue = parseFloat(event.target.value);

    if (isDecimal(inputValue)) {
      setInputValue([inputValue, value[1]]);
    }

    if (
      isValidValue(inputValue, step) &&
      parsedValue >= min &&
      parsedValue <= value[1]
    ) {
      onChange([parsedValue, value[1]]);
      onChangeEnd?.([parsedValue, value[1]]);
      setHasError([true, hasError[1]]);
    } else {
      isNotWhitelisted(inputValue) && setHasError([true, hasError[1]]);
    }
  }

  function handleSecondInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const parsedValue = parseFloat(event.target.value);

    if (isDecimal(inputValue)) {
      setInputValue([value[0], inputValue]);
    }

    if (
      isValidValue(inputValue, step) &&
      parsedValue >= value[0] &&
      parsedValue <= max
    ) {
      onChange([value[0], parsedValue]);
      onChangeEnd?.([value[0], parsedValue]);
      setHasError([hasError[0], true]);
    } else {
      isNotWhitelisted(inputValue) && setHasError([hasError[0], true]);
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
        hasError: hasError.includes(true),
        disabled,
        inverted,
      }}
    >
      <div>
        {showInputs && (
          <Inputs
            value={inputValue}
            error={hasError}
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
        <Range
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
