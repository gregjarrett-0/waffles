import React, { useState } from 'react';

import { useId } from '../hooks';

import { textAreaWrapper, textAreaStyle } from './styles';
import CharacterCount from './character-count';
import AutoGrow from './auto-grow';

type TextAreaBaseProps = {
  /* Sets appropriate error style and `aria-invalid` attribute. */
  /* @default false */
  error?: boolean;
  /* Sets the style of the text area suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Allows height to expand as much as it needs to in order to contain the current value. */
  /* @default false */
  autoGrow?: boolean;
  /* Defines the size of the text area. In most cases, the default size should be used. */
  /* @default medium */
  size?: 'small' | 'medium' | 'large';
};

type TextAreaNoCouter = {
  /* Indicates whether or not the character count should be displayed. In addition, set a character limit with `maxLength`. */
  /* @default false */
  showCharacterCount?: boolean;
} & TextAreaBaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type TextAreaWithCounter = {
  showCharacterCount: true;
  /* [skip docs] */
  maxLength: number;
  /* [skip docs] */
  value: React.TextareaHTMLAttributes<HTMLTextAreaElement>['value'];
  /* [skip docs] */
  onChange: React.TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'];
} & TextAreaBaseProps &
  Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange' | 'maxLength'
  >;

type TextAreaProps = TextAreaNoCouter | TextAreaWithCounter;

function TextAreaInternal(
  {
    value,
    inverted = false,
    autoGrow = false,
    error = false,
    showCharacterCount,
    maxLength,
    size = 'medium',
    onFocus,
    onBlur,
    ...restProps
  }: TextAreaProps,
  ref?: React.Ref<HTMLTextAreaElement>,
) {
  const characterCounterId = `character-count-${useId()}`;
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: React.FocusEvent<HTMLTextAreaElement>) {
    if (onFocus) {
      onFocus(event);
    }
    setIsFocused(true);
  }

  function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
    if (onBlur) {
      onBlur(event);
    }
    setIsFocused(false);
  }

  return (
    <AutoGrow {...{ value, autoGrow, size }}>
      <div css={textAreaWrapper({ isFocused, autoGrow })}>
        <textarea
          {...restProps}
          {...(showCharacterCount && {
            'aria-describedby': characterCounterId,
          })}
          ref={ref}
          value={value}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={error}
          css={textAreaStyle({ hasError: !!error, inverted, size })}
        />
        {showCharacterCount && maxLength && (
          <CharacterCount
            id={characterCounterId}
            value={value}
            limit={maxLength}
            inverted={inverted}
          />
        )}
      </div>
    </AutoGrow>
  );
}

export default TextAreaInternal;
