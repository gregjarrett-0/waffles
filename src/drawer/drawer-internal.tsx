import React from 'react';

import { Dialog } from '../dialog';

import { drawerStyle } from './styles';

type DrawerProps = {
  /* Determines if the Drawer is open. */
  isOpen: boolean;
  /* Handler called when the Drawer will close. */
  onClose: () => void;
  /* Side from which the Drawer originates from. */
  /* @default left */
  placement?: 'left' | 'right';
  /* Content of the Drawer. In general, Drawer's own subcomponents should be used: `Drawer.Header`, `Drawer.Body`, and `Drawer.Footer`. */
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function DrawerInternal({
  isOpen,
  onClose,
  placement = 'left',
  children,
  ...restProps
}: DrawerProps) {
  return (
    <Dialog
      css={drawerStyle({ isVisible: isOpen, placement })}
      isOpen={isOpen}
      onClose={onClose}
      idPrefix="drawer"
      {...restProps}
    >
      {children}
    </Dialog>
  );
}

export default DrawerInternal;
