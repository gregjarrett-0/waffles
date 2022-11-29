import React from 'react';

import {
  AttentionInverted,
  CheckmarkCircleInverted,
  CrossCircleInverted,
  InfoCircleInverted,
  RocketInverted,
} from '../icon';

import { iconBackgroundStyle, iconStyle, iconWrapperStyle } from './styles';

type NotificationIconProps = {
  variant?: 'info' | 'success' | 'warning' | 'error' | 'upgrade';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  inverted?: boolean;
} & React.SVGAttributes<SVGElement>;

function NotificationIcon({
  variant = 'info',
  size = 'medium',
  inverted = false,
  ...restProps
}: NotificationIconProps) {
  function renderIcon() {
    switch (variant) {
      case 'success':
        return <CheckmarkCircleInverted size={size} {...restProps} />;
      case 'warning':
        return <AttentionInverted size={size} {...restProps} />;
      case 'error':
        return <CrossCircleInverted size={size} {...restProps} />;
      case 'upgrade':
        return <RocketInverted size={size} {...restProps} />;
      case 'info':
      default:
        return <InfoCircleInverted size={size} {...restProps} />;
    }
  }

  return (
    <div css={iconWrapperStyle()} data-testid="notification-icon">
      <div css={iconBackgroundStyle({ variant, inverted })} />
      <div css={iconStyle({ variant, inverted })}>{renderIcon()}</div>
    </div>
  );
}

export default NotificationIcon;
