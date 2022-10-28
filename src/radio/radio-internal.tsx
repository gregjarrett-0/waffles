import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { Text } from '../text';
import { useId } from '../hooks';

import { wrapperStyle, inputStyle, labelStyle } from './styles';
import Radiomark from './radiomark';

type RadioBaseProps = {
  /* Sets the style of the Radio suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Sets appropriate error styling, and `aria-invalid` attribute. */
  /* @default false */
  error?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

type RadioWithLabel = {
  /* The label displayed next to the Radio. */
  children: React.ReactNode;
  /* [skip docs] */
  'aria-label'?: string;
} & RadioBaseProps;

type RadioOnly = {
  children?: never;
  'aria-label': string;
} & RadioBaseProps;

type RadioProps = RadioWithLabel | RadioOnly;

function RadioInternal(
  {
    inverted = false,
    checked = false,
    disabled = false,
    error = false,
    'aria-label': ariaLabel,
    children,
    ...restProps
  }: RadioProps,
  ref?: React.Ref<HTMLInputElement>,
) {
  const { isFocusVisible, focusProps } = useFocusRing();
  const radioId = `radio-${useId()}`;

  return (
    <div css={wrapperStyle({ disabled })}>
      <input
        {...mergeProps(focusProps, restProps)}
        ref={ref}
        {...(children && { id: radioId })}
        type="radio"
        disabled={disabled}
        checked={checked}
        aria-invalid={error}
        aria-label={ariaLabel}
        css={inputStyle({ disabled })}
      />
      <Radiomark {...{ inverted, checked, error, isFocusVisible }} />
      {children && (
        <Text
          as="label"
          htmlFor={radioId}
          css={labelStyle({ inverted, disabled })}
        >
          {children}
        </Text>
      )}
    </div>
  );
}

export default RadioInternal;
