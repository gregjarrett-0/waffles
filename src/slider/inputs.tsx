import React, { useState, useEffect, useMemo } from 'react';

import { Input } from '../input';

import {
  initialError,
  isDecimal,
  isValidValue,
  isNotWhitelisted,
  calculateInputWidth,
} from './utils';
import { inputsWrapperStyle } from './styles';
import { useSlider } from './slider-context';

type InputsProps = {
  onChange: (value: number[]) => void;
  onChangeEnd?: (value: number[]) => void;
  label: string;
};

function Inputs({ onChange, onChangeEnd, label }: InputsProps) {
  const { value, min, max, step, disabled, inverted } = useSlider();
  const inputWidth = useMemo(
    () => calculateInputWidth(min, max, step),
    [min, max, step],
  );
  const isSingleInput = value.length === 1;

  // Keep separate state for inputs, because some characters other than numeric must be supported
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

  function renderInput(
    value: string | number,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    error: boolean,
  ) {
    return (
      <Input
        {...{ value, onChange, error, disabled, inverted, 'aria-label': label }}
      />
    );
  }

  return (
    <div css={inputsWrapperStyle({ isSingleInput, inputWidth })}>
      {isSingleInput ? (
        renderInput(inputValue[0], handleSingleInputChange, hasError[0])
      ) : (
        <>
          {renderInput(inputValue[0], handleFirstInputChange, hasError[0])}
          {renderInput(inputValue[1], handleSecondInputChange, hasError[1])}
        </>
      )}
    </div>
  );
}

export default Inputs;
