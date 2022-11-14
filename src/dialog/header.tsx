import React from 'react';

import { Heading } from '../heading';

import { headerStyle } from './styles';
import { useDialog } from './dialog-context';

type HeaderProps = {
  /* Title of the modal. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

function Header({ children, ...restProps }: HeaderProps) {
  const { headerId } = useDialog();

  return (
    <Heading id={headerId} css={headerStyle()} {...restProps}>
      {children}
    </Heading>
  );
}

export default Header;
