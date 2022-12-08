import React from 'react';

import { Cross } from '../icon';
import { Button } from '../button';

import { closeButtonStyle } from './styles';
import { useDialog } from './dialog-context';

type CloseButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
>;

function CloseButton({ ...restProps }: CloseButtonProps) {
  const { hasDecorativeHeader } = useDialog();

  return (
    <Button
      {...restProps}
      variant="plain"
      icon={<Cross />}
      aria-label="Close"
      {...(hasDecorativeHeader && { inverted: true })}
      css={closeButtonStyle({ hasDecorativeHeader })}
    />
  );
}

export default CloseButton;
