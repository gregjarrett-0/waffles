import React from 'react';

import { Dialog } from '../dialog';

import { drawerStyle } from './styles';

type DrawerProps = {
  /* Determines if the Drawer is open. */
  isOpen: boolean;
  /* Handler called when the Drawer will close. */
  onClose: () => void;
  /* Custom close button component. In general use `Drawer.CloseButton` subcomponent. */
  closeButtonOverride?: JSX.Element;
  /* Side from which the Drawer originates from. */
  /* @default left */
  placement?: 'left' | 'right';
  /* Content of the Drawer. In general, Drawer's own subcomponents should be used: `Drawer.Header`, `Drawer.Body`, and `Drawer.Footer`. */
  children: React.ReactNode;
  /* [skip docs] */
  'aria-label'?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function DrawerInternal({
  isOpen,
  onClose,
  closeButtonOverride,
  placement = 'left',
  'aria-label': ariaLabel,
  children,
  ...restProps
}: DrawerProps) {
  return (
    <Dialog
      css={drawerStyle({ isVisible: isOpen, placement })}
      {...{
        isOpen,
        onClose,
        closeButtonOverride,
        'aria-label': ariaLabel,
      }}
      {...restProps}
    >
      {children}
    </Dialog>
  );
}

export default DrawerInternal;
