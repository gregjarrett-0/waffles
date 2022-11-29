import React, { Children, createRef, isValidElement } from 'react';

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
  hasDecorativeHeader?: boolean;
  headerId?: string;
  bodyId?: string;
};

type DialogProps = {
  /* Determines if the Dialog is open. */
  isOpen: boolean;
  /* Handler called when the Dialog will close. */
  onClose: () => void;
  /* Custom close button component. In general use `Dialog.CloseButton` subcomponent. */
  closeButtonOverride?: JSX.Element;
  /* Whether to center align the Dialog content and buttons. */
  /* @default false */
  alignCenter?: boolean;
  /* Content of the Dialog. In general, Dialog's own subcomponents should be used: `Dialog.Header`, `Dialog.Body`, and `Dialog.Footer`. */
  children: React.ReactNode;
  /* [skip docs] */
  role?: 'dialog' | 'alertdialog';
  /* [skip docs] */
  idPrefix?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function DialogInternal({
  isOpen,
  onClose,
  closeButtonOverride,
  alignCenter = false,
  children,
  role = 'dialog',
  idPrefix = 'dialog',
  ...restProps
}: DialogProps) {
  const isAnimating = useAnimateTransition(isOpen, 300);
  const id = `${idPrefix}-${useId()}`;
  const autoFocusRef = createRef<HTMLButtonElement>();

  // Determine if `children` contains `Header` and/or `Body` components
  function childConfig() {
    return Children.toArray(children).reduce(
      (childOptions: ChildOptions, child) => {
        if (isValidElement(child)) {
          if (child.type === Header || child.type === AlertHeader) {
            return {
              ...childOptions,
              headerId: `${id}-header`,
              hasDecorativeHeader: child.props.mode === 'decorative',
            };
          } else if (child.type === Body || child.type === AlertBody) {
            return {
              ...childOptions,
              bodyId: `${id}-body`,
            };
          }
        }

        return childOptions as ChildOptions;
      },
      {} as ChildOptions,
    );
  }

  const { headerId, bodyId, hasDecorativeHeader } = childConfig();

  return (
    <DialogProvider
      {...{ headerId, bodyId, hasDecorativeHeader, alignCenter, autoFocusRef }}
    >
      <Portal>
        {isAnimating && (
          <Overlay isVisible={isOpen} data-testid={`${idPrefix}-overlay`}>
            <Panel
              {...{
                role,
                isVisible: isOpen,
                onClose,
                closeButtonOverride,
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
