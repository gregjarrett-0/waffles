import React from 'react';

import { Cross } from '../icon';
import { Button } from '../button';

import { closeButtonStyle } from './styles';

type CloseButtonProps = {
  hasDecorativeHeader?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

function CloseButton({
  hasDecorativeHeader = false,
  ...restProps
}: CloseButtonProps) {
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
