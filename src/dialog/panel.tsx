import React, { cloneElement } from 'react';
import {
  FloatingFocusManager,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';

import { panelWrapperStyle, panelStyle } from './styles';
import { useDialog } from './dialog-context';
import Dialog from './dialog';
import CloseButton from './close-button';

type PanelProps = {
  role: NonNullable<React.ComponentProps<typeof Dialog>['role']>;
  isVisible: boolean;
  onClose: () => void;
  closeButtonOverride?: JSX.Element;
  ariaLabel?: string;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function Panel({
  role,
  isVisible,
  onClose,
  closeButtonOverride,
  ariaLabel,
  children,
  ...restProps
}: PanelProps) {
  const { headerId, bodyId, alignCenter, autoFocusRef } = useDialog();
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
      })
    ) : (
      <CloseButton onClick={onClose} />
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
          {...(!ariaLabel && headerId && { 'aria-labelledby': headerId })}
          {...(bodyId
            ? { 'aria-describedby': bodyId }
            : { 'aria-label': ariaLabel })}
          tabIndex={-1}
          css={panelStyle({ isVisible, alignCenter })}
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
