import React from 'react';

import { Cross } from '../icon';
import { Button } from '../button';

import { closeButtonStyle } from './styles';

type CloseButtonProps = {
  inverted?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function CloseButton({
  inverted = false,
  onClick,
  ...restProps
}: CloseButtonProps) {
  return (
    <Button
      variant="plain"
      size="small"
      icon={<Cross size="xsmall" />}
      aria-label="Close notification"
      inverted={inverted}
      onClick={onClick}
      css={closeButtonStyle({ inverted })}
      {...restProps}
    />
  );
}

export default CloseButton;
