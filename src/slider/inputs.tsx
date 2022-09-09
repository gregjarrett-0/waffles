import React, { useMemo } from 'react';

import { Input } from '../input';

import { calculateInputWidth } from './utils';
import { inputsWrapperStyle } from './styles';
import { useSlider } from './slider-context';

type InputsProps = {
  value: Array<string | number>;
  error: boolean[];
  isSingle: boolean;
  handleSingleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleFirstInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSecondInputChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
};

function Inputs({
  value,
  error,
  isSingle,
  handleSingleInputChange,
  handleFirstInputChange,
  handleSecondInputChange,
  label,
}: InputsProps) {
  const { min, max, step, disabled, inverted } = useSlider();
  const inputWidth = useMemo(
    () => calculateInputWidth(min, max, step),
    [min, max, step],
  );

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
    <div css={inputsWrapperStyle({ isSingle, inputWidth })}>
      {isSingle ? (
        renderInput(value[0], handleSingleInputChange, error[0])
      ) : (
        <>
          {renderInput(value[0], handleFirstInputChange, error[0])}
          {renderInput(value[1], handleSecondInputChange, error[1])}
        </>
      )}
    </div>
  );
}

export default Inputs;
