import React, { useState } from 'react';

import { ChevronDown } from '../icon';

import { selectWrapperStyle, selectStyle, iconRightStyle } from './styles';

type SelectProps = {
  /* Options to be displayed in the dropdown. To show a placeholder provide an `option` with an empty value, and both `disabled` and `hidden` attributes set. */
  children?: React.ReactNode;
  /* Sets appropriate error style and `aria-invalid` attribute. */
  /* @default false */
  error?: boolean;
  /* Defines the size of the Select. In most cases, the default size should be used. */
  /* @default medium */
  size?: 'small' | 'medium' | 'large';
  /* Sets the style of the Select suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'multiple'>;

function SelectInternal(
  {
    size = 'medium',
    inverted = false,
    disabled = false,
    error = false,
    children,
    value,
    onFocus,
    onBlur,
    ...restProps
  }: SelectProps,
  ref?: React.Ref<HTMLSelectElement>,
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: React.FocusEvent<HTMLSelectElement>) {
    if (onFocus) {
      onFocus(event);
    }
    setIsFocused(true);
  }

  function handleBlur(event: React.FocusEvent<HTMLSelectElement>) {
    if (onBlur) {
      onBlur(event);
    }
    setIsFocused(false);
  }

  return (
    <div css={selectWrapperStyle({ size, disabled, isFocused })}>
      <select
        {...restProps}
        {...{ value, disabled }}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-invalid={error}
        css={selectStyle({
          hasError: error,
          withPlaceholder: value === '' || value === 'placeholder',
          size,
          inverted,
        })}
      >
        {children}
      </select>
      <div css={iconRightStyle({ size, inverted })}>
        <ChevronDown size={size === 'large' ? 'medium' : size} />
      </div>
    </div>
  );
}

export default SelectInternal;
