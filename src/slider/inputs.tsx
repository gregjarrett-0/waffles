import React, { useMemo } from 'react';

import { Input } from '../input';

import {
  calculateInputWidth,
  isDecimal,
  isValidValue,
  isNotWhitelisted,
} from './utils';
import { inputsWrapperStyle } from './styles';
import { useSlider } from './slider-context';

const ERROR_OUT_OF_RANGE = 'value is outside of allowed range.';
const ERROR_INVALID_STEP = 'value must be a valid step increment.';

type InputsProps = {
  id: string;
  inputValue: Array<string | number>;
  setInputValue: React.Dispatch<React.SetStateAction<(string | number)[]>>;
  error: string[];
  setError: React.Dispatch<React.SetStateAction<string[]>>;
  isSingle: boolean;
  label: string;
};

function Inputs({
  id,
  inputValue,
  setInputValue,
  error,
  setError,
  isSingle,
  label,
}: InputsProps) {
  const { value, onChange, min, max, step, disabled, inverted } = useSlider();
  const inputWidth = useMemo(
    () => calculateInputWidth(min, max, step),
    [min, max, step],
  );

  // Separate each input handler for readability

  // Short overview of how each handler works:
  // 1. Only numeric values are allowed
  // 2. When user starts typing, any error for the Input is cleared
  // 3. For better UX, some additional checks are performed before setting final value on Slider. So sometimes Slider and Input values are out of sync, e.g. value ending with dot
  // 4. If Input value passes checks, parsed value is set on slider
  // 5. Otherwise an appropriate error is displayed

  function handleSingleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const targetValue = event.target.value;
    const parsedValue = parseFloat(event.target.value);

    if (isDecimal(targetValue)) {
      setInputValue([targetValue]);
      setError(['']);
    }

    if (
      isValidValue(targetValue, step) &&
      parsedValue >= min &&
      parsedValue <= max
    ) {
      onChange([parsedValue]);
    } else if (isNotWhitelisted(targetValue)) {
      if (parsedValue < min || parsedValue > max) {
        setError([`Input ${ERROR_OUT_OF_RANGE}`]);
      } else {
        setError([`Input ${ERROR_INVALID_STEP}`]);
      }
    }
  }

  function handleFirstInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const targetValue = event.target.value;
    const parsedValue = parseFloat(event.target.value);

    if (isDecimal(targetValue)) {
      setInputValue([targetValue, value[1]]);
      setError(['', error[1]]);
    }

    if (
      isValidValue(targetValue, step) &&
      parsedValue >= min &&
      parsedValue <= value[1]
    ) {
      onChange([parsedValue, value[1]]);
    } else if (isNotWhitelisted(targetValue)) {
      if (parsedValue < min || parsedValue > value[1]) {
        setError([`First input ${ERROR_OUT_OF_RANGE}`, error[1]]);
      } else {
        setError([`First input ${ERROR_INVALID_STEP}`, error[1]]);
      }
    }
  }

  function handleSecondInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const targetValue = event.target.value;
    const parsedValue = parseFloat(event.target.value);

    if (isDecimal(targetValue)) {
      setInputValue([value[0], targetValue]);
      setError([error[0], '']);
    }

    if (
      isValidValue(targetValue, step) &&
      parsedValue >= value[0] &&
      parsedValue <= max
    ) {
      onChange([value[0], parsedValue]);
    } else if (isNotWhitelisted(targetValue)) {
      if (parsedValue < value[0] || parsedValue > max) {
        setError([error[0], `Second input ${ERROR_OUT_OF_RANGE}`]);
      } else {
        setError([error[0], `Second input ${ERROR_INVALID_STEP}`]);
      }
    }
  }

  function renderInput(
    index: number,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
  ) {
    const errorId = `${id}-${index}`;

    return (
      <Input
        {...{
          value: inputValue[index],
          onChange,
          disabled,
          inverted,
          'aria-label': label,
          ...(!!error[index] && {
            error: true,
            'aria-errormessage': errorId,
            'aria-describedby': errorId,
          }),
        }}
      />
    );
  }

  return (
    <div css={inputsWrapperStyle({ isSingle, inputWidth })}>
      {isSingle ? (
        renderInput(0, handleSingleInputChange)
      ) : (
        <>
          {renderInput(0, handleFirstInputChange)}
          {renderInput(1, handleSecondInputChange)}
        </>
      )}
    </div>
  );
}

export default Inputs;
