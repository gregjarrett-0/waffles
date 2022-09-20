import React, { useMemo } from 'react';

import { Input } from '../input';

import { calculateInputWidth } from './utils';
import { inputsWrapperStyle } from './styles';
import { useSlider } from './slider-context';

type InputsProps = {
  id: string;
  value: Array<string | number>;
  error: string[];
  isSingle: boolean;
  handleSingleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleFirstInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSecondInputChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
};

function Inputs({
  id,
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
    index: number,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
  ) {
    const errorId = `${id}-${index}`;

    return (
      <Input
        {...{
          value: value[index],
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
