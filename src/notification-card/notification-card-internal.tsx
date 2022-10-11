import React from 'react';

import { notificationStyle, decorStyle, contentStyle } from './styles';
import Icon from './icon';
import CloseButton from './close-button';

type NotificationCardProps = {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'upgrade';
  hideLeftDecor?: boolean;
  isContentCentered?: boolean;
  inverted?: boolean;
  closable?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function NotificationCardInternal(
  {
    variant = 'default',
    hideLeftDecor = false,
    isContentCentered = false,
    inverted = false,
    closable = false,
    onClose,
    children,
    ...restProps
  }: NotificationCardProps,
  ref?: React.Ref<HTMLDivElement>,
) {
  const isIconCentered = closable && isContentCentered;

  return (
    <section
      {...restProps}
      ref={ref}
      role="status"
      css={notificationStyle({ inverted })}
    >
      {!hideLeftDecor && <div css={decorStyle({ variant, inverted })} />}
      <Icon {...{ variant, inverted, isIconCentered }} />
      <div css={contentStyle({ closable, isContentCentered })}>{children}</div>
      {closable && <CloseButton inverted={inverted} onClick={onClose} />}
    </section>
  );
}

export default NotificationCardInternal;
