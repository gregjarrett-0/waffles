import { forwardRef } from 'react';

import ButtonInternal, { ButtonProps } from './button-internal';

// TODO: Move contents to button-internal.tsx during modal refactor - ixTec

type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T>,
) => JSX.Element | null;

const Button: ButtonComponent = forwardRef(ButtonInternal);

export default Button;
