import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { Text } from '../text';

import { labelStyle, inputStyle, contentStyle } from './styles';
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

type CheckboxNoDescription = {
  children?: never;
  /* [skip docs] */
  'aria-label': string;
} & CheckboxBaseProps;

type CheckboxProps = CheckboxWithDescription | CheckboxNoDescription;

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

  return (
    <label css={labelStyle({ disabled })}>
      <input
        {...mergeProps(focusProps, restProps)}
        ref={ref}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        aria-invalid={error}
        aria-label={ariaLabel}
        css={inputStyle()}
      />
      <Checkmark {...{ inverted, checked, error, isFocusVisible }} />
      {children && (
        <Text as="div" css={contentStyle({ inverted })}>
          {children}
        </Text>
      )}
    </label>
  );
}

export default CheckboxInternal;
