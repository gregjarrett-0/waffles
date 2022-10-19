import { FocusOn } from 'react-focus-on';
import React from 'react';

import { Portal } from '../portal';
import { Overlay } from '../overlay';
import { useAnimateTransition } from '../hooks';

import Panel from './panel';

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
  const isAnimating = useAnimateTransition(isOpen, 300);

  return (
    <Portal>
      {isAnimating && (
        <>
          <Overlay isVisible={isOpen} data-testid="drawer-overlay" />
          <FocusOn
            onClickOutside={onClose}
            onEscapeKey={onClose}
            autoFocus
            returnFocus
          >
            <Panel
              isVisible={isOpen}
              onClose={onClose}
              placement={placement}
              {...restProps}
            >
              {children}
            </Panel>
          </FocusOn>
        </>
      )}
    </Portal>
  );
}

export default DrawerInternal;
