import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { Code } from '../code';

import { codeBlockStyle } from './styles';

type CodeBlockProps = {
  /* The content of the Code Block. */
  children: React.ReactNode;
  /* Defines the font size of the Code Block. */
  /* @default medium */
  size?: 'small' | 'medium' | 'large';
  /* Sets the style of the Code Block suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLPreElement>;

function CodeBlock({
  children,
  size = 'medium',
  ...restProps
}: CodeBlockProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Code
      as="pre"
      {...mergeProps(focusProps, restProps)}
      size={size}
      css={codeBlockStyle({ isFocusVisible })}
      tabIndex={0}
    >
      <code>{children}</code>
    </Code>
  );
}

export default CodeBlock;
