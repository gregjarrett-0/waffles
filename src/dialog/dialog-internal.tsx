import React, {
  Children,
  createRef,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Portal } from '../portal';
import { Overlay } from '../overlay';
import { useAnimateTransition, useId } from '../hooks';
import { logError } from '../helpers';
import AlertHeader from '../alert-dialog/header';
import AlertBody from '../alert-dialog/body';

import Panel from './panel';
import Header from './header';
import { DialogProvider } from './dialog-context';
import { MESSAGES } from './debug-messages';
import Body from './body';

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
  /* Accessible label for the Dialog, where `Dialog.Body` does not contain descriptive content (e.g. form elements). */
  'aria-label'?: string;
  /* Content of the Dialog. In general, Dialog's own subcomponents should be used: `Dialog.Header`, `Dialog.Body`, and `Dialog.Footer`. */
  children: React.ReactNode;
  /* [skip docs] */
  role?: 'dialog' | 'alertdialog';
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function DialogInternal({
  isOpen,
  onClose,
  closeButtonOverride,
  alignCenter = false,
  children,
  'aria-label': ariaLabel,
  role = 'dialog',
  ...restProps
}: DialogProps) {
  const isAnimating = useAnimateTransition(isOpen, 300);
  const didMount = useRef(false);
  const autoFocusRef = createRef<HTMLButtonElement>();
  const id = `modal-${useId()}`;
  const [headerId, setHeaderId] = useState<string>();
  const [bodyId, setBodyId] = useState<string>();
  const [hasDecorativeHeader, setHasDecorativeHeader] = useState(false);

  useEffect(() => {
    Children.toArray(children).forEach((child) => {
      if (isValidElement(child)) {
        if (child.type === Header || child.type === AlertHeader) {
          setHeaderId(`${id}-header`);
          setHasDecorativeHeader(child.props.mode === 'decorative');
        } else if (child.type === Body || child.type === AlertBody) {
          !ariaLabel && setBodyId(`${id}-body`);
        }
      }
    });
  }, [ariaLabel, children, headerId, id]);

  // Handle avoiding checking for headerId before initial render
  useEffect(() => {
    if (didMount.current && !headerId) {
      logError(MESSAGES.MISSING_HEADER);
    }
    didMount.current = true;
  }, [headerId, id]);

  return (
    <DialogProvider
      {...{ headerId, bodyId, hasDecorativeHeader, alignCenter, autoFocusRef }}
    >
      <Portal>
        {isAnimating && (
          <Overlay isVisible={isOpen} data-testid="modal-overlay">
            <Panel
              {...{
                role,
                isVisible: isOpen,
                onClose,
                closeButtonOverride,
                ariaLabel,
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
