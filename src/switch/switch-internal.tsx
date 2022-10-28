import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { Text } from '../text';
import { useId } from '../hooks';

import Toggle from './toggle';
import { wrapperStyle, inputStyle, labelStyle } from './styles';

type SwitchPropsBase = {
  /* Sets the style of the Switch suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Sets appropriate error styling, and `aria-invalid` attribute. */
  /* @default false */
  error?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

type SwitchWithLabel = {
  /* The label displayed next to the Switch. */
  children: React.ReactNode;
  /* [skip docs] */
  'aria-label'?: string;
} & SwitchPropsBase;

type SwitchOnly = {
  children?: never;
  'aria-label': string;
} & SwitchPropsBase;

type SwitchProps = SwitchWithLabel | SwitchOnly;

function SwitchInternal(
  {
    inverted = false,
    checked = false,
    disabled = false,
    error = false,
    children,
    'aria-label': ariaLabel,
    ...restProps
  }: SwitchProps,
  ref?: React.Ref<HTMLInputElement>,
) {
  const { isFocusVisible, focusProps } = useFocusRing();
  const switchId = `switch-${useId()}`;

  return (
    <div css={wrapperStyle({ disabled })}>
      {children && (
        <Text
          as="label"
          htmlFor={switchId}
          css={labelStyle({ inverted, disabled })}
        >
          {children}
        </Text>
      )}
      <Toggle {...{ inverted, checked, error, isFocusVisible }}>
        <input
          {...mergeProps(focusProps, restProps)}
          ref={ref}
          {...(children && { id: switchId })}
          type="checkbox"
          role="switch"
          disabled={disabled}
          checked={checked}
          aria-checked={checked}
          aria-invalid={error}
          aria-label={ariaLabel}
          css={inputStyle({ disabled })}
        />
      </Toggle>
    </div>
  );
}

export default SwitchInternal;
