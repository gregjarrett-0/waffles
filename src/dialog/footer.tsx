import React, { Children, cloneElement, isValidElement } from 'react';

import { footerStyle } from './styles';
import { useDialog } from './dialog-context';
import Button from './button';

type FooterProps = {
  /* Content of the footer. In most cases, should be one or multiple `Dialog.Button` subcomponents. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Footer({ children, ...restProps }: FooterProps) {
  const { alignCenter, autoFocusRef } = useDialog();

  // Add a reference to the button with autoFocus (if present), so that it can be focused on open
  function renderChildren() {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        return child.type === Button && child.props.autoFocus
          ? cloneElement(child, {
              ...child.props,
              ref: autoFocusRef,
            })
          : child;
      }

      return child;
    });
  }

  return (
    <footer {...restProps} css={footerStyle({ alignCenter })}>
      {renderChildren()}
    </footer>
  );
}

export default Footer;
