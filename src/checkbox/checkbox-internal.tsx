import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { Text } from '../text';
import { useId } from '../hooks';

import { wrapperStyle, inputStyle, labelStyle } from './styles';
import Checkmark from './checkmark';

type CheckboxBaseProps = {
  /* Sets the style of the Checkbox suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Sets appropriate error styling, and `aria-invalid` attribute. */
  /* @default false */
  error?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

type CheckboxWithDescription = {
  /* The description displayed next to the Checkbox. */
  children: React.ReactNode;
  'aria-label'?: string;
} & CheckboxBaseProps;

type CheckmarkOnly = {
  children?: never;
  /* [skip docs] */
  'aria-label': string;
} & CheckboxBaseProps;

type CheckboxProps = CheckboxWithDescription | CheckmarkOnly;

function CheckboxInternal(
  {
    inverted = false,
    checked = false,
    disabled = false,
    error = false,
    children,
    'aria-label': ariaLabel,
    ...restProps
  }: CheckboxProps,
  ref?: React.Ref<HTMLInputElement>,
) {
  const { isFocusVisible, focusProps } = useFocusRing();
  const checkboxId = `checkbox-${useId()}`;

  return (
    <div css={wrapperStyle({ disabled })}>
      <input
        {...mergeProps(focusProps, restProps)}
        ref={ref}
        {...(children && { id: checkboxId })}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        aria-invalid={error}
        aria-label={ariaLabel}
        css={inputStyle({ disabled })}
      />
      <Checkmark {...{ inverted, checked, error, isFocusVisible }} />
      {children && (
        <Text
          as="label"
          htmlFor={checkboxId}
          css={labelStyle({ disabled, inverted })}
        >
          {children}
        </Text>
      )}
    </div>
  );
}

export default CheckboxInternal;
