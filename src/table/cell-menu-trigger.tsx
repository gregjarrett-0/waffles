import { forwardRef } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { useMenu } from '../menu';
import { ChevronUp, ChevronDown } from '../icon';

import { cellMenuTriggerStyle } from './styles';

type CellMenuTriggerProps = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function CellMenuTriggerInternal(
  { label, ...restProps }: CellMenuTriggerProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { focusProps, isFocusVisible } = useFocusRing();
  const { isOpen } = useMenu();

  return (
    <button
      {...mergeProps(focusProps, restProps)}
      ref={ref}
      css={cellMenuTriggerStyle({ isFocusVisible })}
    >
      {label}
      {isOpen ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
}

const CellMenuTrigger = forwardRef(CellMenuTriggerInternal);

export default CellMenuTrigger;
