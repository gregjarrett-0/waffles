import React from 'react';

import { PolymorphicComponentProps, PolymorphicRef } from '../helpers';
import { ButtonBaseProps } from '../button/button-internal';
import { Button } from '../button';

import { buttonStyle } from './styles';

type DialogButtonProps = {
  /* [skip docs] */
  children: React.ReactNode;
  /* [skip docs] */
  iconLeft?: JSX.Element;
  /* [skip docs] */
  iconRight?: JSX.Element;
  /* Focus this particular Button when Dialog is opened. */
  /* @default false */
  autoFocus?: boolean;
} & Omit<ButtonBaseProps, 'fullWidth' | 'inverted'>;

export type ButtonProps<T extends React.ElementType = 'button'> =
  PolymorphicComponentProps<T, DialogButtonProps>;

function ButtonInternal<T extends React.ElementType = 'button'>(
  {
    as,
    variant = 'primary',
    size = 'medium',
    isLoading = false,
    disableTitleCase = false,
    iconLeft,
    iconRight,
    autoFocus,
    children,
    ...restProps
  }: ButtonProps<T>,
  ref?: PolymorphicRef<T>,
) {
  return (
    <Button
      as={as}
      {...{
        size,
        variant,
        isLoading,
        disableTitleCase,
        iconLeft,
        iconRight,
        autoFocus,
        ...restProps,
      }}
      ref={ref}
      css={buttonStyle()}
    >
      {children}
    </Button>
  );
}

export default ButtonInternal;
