import React, { Children, isValidElement } from 'react';

import { Portal } from '../portal';
import { Overlay } from '../overlay';
import { useAnimateTransition, useId } from '../hooks';
import AlertHeader from '../alert-dialog/header';
import AlertBody from '../alert-dialog/body';

import Panel from './panel';
import Header from './header';
import { DialogProvider } from './dialog-context';
import Body from './body';

type ChildOptions = {
  headerId: string;
  bodyId: string;
};

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

  // TODO: Obtain autoFocus button, if applicable

  // Determine if `children` contains `Header` and/or `Body` components
  function getChildTypes() {
    return Children.toArray(children).reduce(
      (childOptions: ChildOptions, child) => {
        if (isValidElement(child)) {
          if (child.type === Header || child.type === AlertHeader) {
            return {
              ...childOptions,
              headerId: `dialog-header-${id}`,
            };
          } else if (child.type === Body || child.type === AlertBody) {
            return {
              ...childOptions,
              bodyId: `dialog-body-${id}`,
            };
          }
        }

        return childOptions as ChildOptions;
      },
      {} as ChildOptions,
    );
  }

  const { headerId, bodyId } = getChildTypes();

  return (
    <DialogProvider {...{ headerId, bodyId }}>
      <Portal>
        {isAnimating && (
          <Overlay isVisible={isOpen} data-testid="dialog-overlay">
            <Panel
              {...{
                role,
                headerId,
                bodyId,
                onClose,
                isVisible: isOpen,
                ...restProps,
              }}
            >
              {children}
            </Panel>
          </Overlay>
        )}
      </Portal>
    </DialogProvider>
  );
}

export default DialogInternal;
