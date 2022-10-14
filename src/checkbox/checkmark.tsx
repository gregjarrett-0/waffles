import { Checkmark as CheckmarkIcon, Minus } from '../icon';

import { checkmarkStyle } from './styles';

type CheckmarkProps = {
  inverted: boolean;
  checked: boolean;
  isIndeterminate: boolean;
  error: boolean;
  isFocusVisible: boolean;
};

function Checkmark({
  inverted,
  checked,
  isIndeterminate,
  error,
  isFocusVisible,
}: CheckmarkProps) {
  function renderIcon() {
    if (isIndeterminate) {
      return <Minus size="small" />;
    } else if (checked) {
      return <CheckmarkIcon size="small" />;
    }
    return null;
  }

  return (
    <div
      css={checkmarkStyle({
        inverted,
        checked,
        isIndeterminate,
        isFocusVisible,
        hasError: error,
      })}
    >
      {renderIcon()}
    </div>
  );
}

export default Checkmark;
