import React, { cloneElement } from 'react';
import {
  FloatingFocusManager,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react-dom-interactions';

import { panelWrapperStyle, panelStyle } from './styles';
import { useDialog } from './dialog-context';
import Dialog from './dialog';
import CloseButton from './close-button';

type PanelProps = {
  role: NonNullable<React.ComponentProps<typeof Dialog>['role']>;
  isVisible: boolean;
  onClose: () => void;
  closeButtonOverride?: JSX.Element;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function Panel({
  role,
  isVisible,
  onClose,
  closeButtonOverride,
  children,
  ...restProps
}: PanelProps) {
  const { headerId, bodyId, hasDecorativeHeader, autoFocusRef } = useDialog();
  const { floating, context } = useFloating({
    open: isVisible,
    onOpenChange: onClose, // Handles closing when clicking outside of the Dialog (dismissing)
  });
  const { getFloatingProps } = useInteractions([
    useDismiss(context, {
      bubbles: false,
    }),
  ]);

  function renderCloseButton() {
    function handleClick() {
      closeButtonOverride?.props.onClick?.();
      onClose?.();
    }

    return closeButtonOverride ? (
      cloneElement(closeButtonOverride, {
        onClick: handleClick,
        hasDecorativeHeader,
      })
    ) : (
      <CloseButton
        onClick={onClose}
        hasDecorativeHeader={hasDecorativeHeader}
      />
    );
  }

  return (
    <FloatingFocusManager
      context={context}
      initialFocus={autoFocusRef}
      returnFocus
    >
      <div css={panelWrapperStyle()}>
        <section
          role={role}
          aria-modal
          {...(headerId && { 'aria-labelledby': headerId })}
          {...(bodyId && { 'aria-describedby': bodyId })}
          tabIndex={-1}
          css={panelStyle({ isVisible })}
          {...getFloatingProps({
            ref: floating,
          })}
          {...restProps}
        >
          {renderCloseButton()}
          {children}
        </section>
      </div>
    </FloatingFocusManager>
  );
}

export default Panel;
