import React from 'react';

import { panelWrapperStyle, panelStyle } from './styles';
import Dialog from './dialog';
import CloseButton from './close-button';

type PanelProps = {
  role: NonNullable<React.ComponentProps<typeof Dialog>['role']>;
  headerId?: string;
  bodyId?: string;
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function Panel({
  role,
  headerId,
  bodyId,
  isVisible,
  onClose,
  children,
  ...restProps
}: PanelProps) {
  return (
    <div css={panelWrapperStyle()}>
      <section
        {...restProps}
        role={role}
        aria-modal
        {...(headerId && { 'aria-labelledby': headerId })}
        {...(bodyId && { 'aria-describedby': bodyId })}
        tabIndex={-1}
        css={panelStyle({ isVisible })}
      >
        <CloseButton onClick={onClose} />
        {children}
      </section>
    </div>
  );
}

export default Panel;
