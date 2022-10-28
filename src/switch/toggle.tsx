import { Checkmark as Icon } from '../icon';

import { toggleStyle, handleStyle } from './styles';

type ToggleProps = {
  inverted: boolean;
  checked: boolean;
  error: boolean;
  isFocusVisible: boolean;
  children: React.ReactNode;
};

function Toggle({
  inverted,
  checked,
  error,
  isFocusVisible,
  children,
}: ToggleProps) {
  return (
    <div
      css={toggleStyle({
        inverted,
        checked,
        isFocusVisible,
        hasError: error,
      })}
    >
      <span css={handleStyle({ inverted, checked })}>
        {checked && <Icon size="small" />}
      </span>
      {children}
    </div>
  );
}

export default Toggle;
