import React from 'react';

import { Cross } from '../icon';
import { Button } from '../button';

import { closeButtonStyle } from './styles';

type CloseButtonProps = {
  inverted?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

function CloseButton({ inverted = false, ...restProps }: CloseButtonProps) {
  return (
    <Button
      variant="plain"
      size="small"
      icon={<Cross size="xsmall" />}
      aria-label="Close notification"
      inverted={inverted}
      css={closeButtonStyle({ inverted })}
      {...restProps}
    />
  );
}

export default CloseButton;
