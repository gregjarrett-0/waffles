import React from 'react';

import { Button } from '../button';

import { buttonStyle } from './styles';

type ButtonProps = {
  /* [skip docs] */
  variant?: React.ComponentProps<typeof Button>['variant'];
  /* [skip docs] */
  size?: React.ComponentProps<typeof Button>['size'];
  /* [skip docs] */
  isLoading?: boolean;
  /* [skip docs] */
  iconLeft?: JSX.Element;
  /* [skip docs] */
  iconRight?: JSX.Element;
  /* [skip docs] */
  children: React.ReactNode;
  /* [skip docs] */
  inverted?: boolean;
  /* [skip docs] */
  fullWidth?: boolean;
  /* Focus this particular button when dialog is opened. */
  /* @default false */
  autoFocus?: boolean;
} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'autoFocus' | 'children'
>;

// Override autoFocus behavior to play nicely with react-focus-on
function ButtonInternal(
  { autoFocus = false, ...restProps }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <Button
      {...restProps}
      data-autofocus={autoFocus ? true : null}
      ref={ref}
      css={buttonStyle()}
    />
  );
}

export default ButtonInternal;
