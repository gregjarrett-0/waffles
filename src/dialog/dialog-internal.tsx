import { FocusOn } from 'react-focus-on';
import React from 'react';

import { Portal } from '../portal';
import { Overlay } from '../overlay';
import { useAnimateTransition, useId } from '../hooks';

import Panel from './panel';
import { DialogProvider } from './dialog-context';

type DialogProps = {
  /* Determines if the Dialog is open. */
  isOpen: boolean;
  /* Handler called when the Dialog will close. */
  onClose: () => void;
  /* Defines the Dialog role. */
  /* @default dialog */
  role?: 'dialog' | 'alertdialog';
  /* Content of the Dialog. In general, Dialog's own subcomponents should be used: `Dialog.Header`, `Dialog.Body`, and `Dialog.Footer`. */
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function DialogInternal({
  isOpen,
  onClose,
  role = 'dialog',
  children,
  ...restProps
}: DialogProps) {
  const isAnimating = useAnimateTransition(isOpen, 300);
  const id = useId();
  const headerId = `dialog-header-${id}`;
  const bodyId = `dialog-body-${id}`;

  return (
    <DialogProvider {...{ headerId, bodyId }}>
      <Portal>
        {isAnimating && (
          <>
            <Overlay isVisible={isOpen} data-testid="dialog-overlay" />
            <FocusOn
              onClickOutside={onClose}
              onEscapeKey={onClose}
              autoFocus
              returnFocus
            >
              <Panel
                role={role}
                headerId={headerId}
                bodyId={bodyId}
                isVisible={isOpen}
                onClose={onClose}
                {...restProps}
              >
                {children}
              </Panel>
            </FocusOn>
          </>
        )}
      </Portal>
    </DialogProvider>
  );
}

export default DialogInternal;
