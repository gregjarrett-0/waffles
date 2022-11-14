import React, { Children, isValidElement } from 'react';

import { panelWrapperStyle, panelStyle } from './styles';
import Header from './header';
import Dialog from './dialog';
import CloseButton from './close-button';
import Body from './body';

type ChildOptions = {
  hasHeader: boolean;
  hasBody: boolean;
};

type PanelProps = {
  role: NonNullable<React.ComponentProps<typeof Dialog>['role']>;
  headerId: string;
  bodyId: string;
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
  // Determine if `children` contains `Dialog.Header` and/or `Dialog.Body`
  function getChildTypes() {
    return Children.toArray(children).reduce(
      (childOptions: ChildOptions, child) => {
        if (isValidElement(child)) {
          if (child.type === Header) {
            return {
              ...childOptions,
              hasHeader: true,
            };
          } else if (child.type === Body) {
            return {
              ...childOptions,
              hasBody: true,
            };
          }
        }

        return childOptions as ChildOptions;
      },
      {} as ChildOptions,
    );
  }

  const { hasHeader, hasBody } = getChildTypes();

  return (
    <div css={panelWrapperStyle()}>
      <section
        {...restProps}
        role={role}
        aria-modal
        {...(hasHeader && { 'aria-labelledby': headerId })}
        {...(hasBody && { 'aria-describedby': bodyId })}
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
