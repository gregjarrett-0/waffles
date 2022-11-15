import React from 'react';

import { Dialog } from '../dialog';

import { footerStyle } from './styles';

type FooterProps = {
  /* Content of the footer. In most cases, should be one or multiple `AlertDialog.Button` subcomponents. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Footer({ children, ...restProps }: FooterProps) {
  return (
    <Dialog.Footer {...restProps} css={footerStyle()}>
      {children}
    </Dialog.Footer>
  );
}

export default Footer;
