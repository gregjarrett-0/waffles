import { forwardRef } from 'react';

import ButtonInternal, { ButtonProps } from './button-internal';

type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T>,
) => JSX.Element | null;

const Button: ButtonComponent = forwardRef(ButtonInternal);

export default Button;
