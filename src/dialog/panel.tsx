import React from 'react';
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
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function Panel({
  role,
  isVisible,
  onClose,
  children,
  ...restProps
}: PanelProps) {
  const { headerId, bodyId, autoFocusRef } = useDialog();
  const { floating, context } = useFloating({
    open: isVisible,
    onOpenChange: onClose, // Handles closing when clicking outside of the Dialog (dismissing)
  });
  const { getFloatingProps } = useInteractions([
    useDismiss(context, {
      bubbles: false,
    }),
  ]);

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
            ...restProps,
          })}
        >
          <CloseButton onClick={onClose} />
          {children}
        </section>
      </div>
    </FloatingFocusManager>
  );
}

export default Panel;
