import React from 'react';

import {
  AttentionSolid,
  CheckmarkCircleSolid,
  CrossCircleSolid,
  InfoCircleSolid,
  RocketSolid,
} from '../icon';

import { backgroundStyle, iconStyle, wrapperStyle } from './styles';

type NotificationIconProps = {
  variant?: 'info' | 'success' | 'warning' | 'error' | 'upgrade';
  size?: 'medium' | 'large';
  isCentered?: boolean;
  inverted?: boolean;
} & React.SVGAttributes<SVGElement>;

function NotificationIcon({
  variant = 'info',
  size = 'medium',
  isCentered = false,
  inverted = false,
  ...restProps
}: NotificationIconProps) {
  function renderIcon() {
    switch (variant) {
      case 'success':
        return <CheckmarkCircleSolid size={size} {...restProps} />;
      case 'warning':
        return <AttentionSolid size={size} {...restProps} />;
      case 'error':
        return <CrossCircleSolid size={size} {...restProps} />;
      case 'upgrade':
        return <RocketSolid size={size} {...restProps} />;
      case 'info':
      default:
        return <InfoCircleSolid size={size} {...restProps} />;
    }
  }

  return (
    <div css={wrapperStyle({ isCentered })} data-testid="notification-icon">
      <div css={backgroundStyle({ variant, inverted })} />
      <div css={iconStyle({ variant, inverted })}>{renderIcon()}</div>
    </div>
  );
}

export default NotificationIcon;
