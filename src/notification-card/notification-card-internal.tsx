import React, { cloneElement } from 'react';

import { notificationStyle, decorStyle, contentStyle } from './styles';
import Icon from './icon';
import CloseButton from './close-button';

type NotificationCardProps = {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'upgrade';
  hideLeftDecor?: boolean;
  isContentCentered?: boolean;
  inverted?: boolean;
  closable?: boolean;
  closeButton?: JSX.Element;
  onClose: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function NotificationCardInternal(
  {
    variant = 'default',
    hideLeftDecor = false,
    isContentCentered = false,
    inverted = false,
    closable = false,
    closeButton,
    onClose,
    children,
    ...restProps
  }: NotificationCardProps,
  ref?: React.Ref<HTMLDivElement>,
) {
  const isIconCentered = closable && isContentCentered;

  function renderCloseButtonOverride(button: JSX.Element) {
    if (!closeButton) return;

    // Maintain the original onClose behavior, if a custom one is provided
    return cloneElement(button, {
      inverted,
      onClick: closeButton?.props.onClick
        ? () => {
            closeButton?.props.onClick();
            onClose();
          }
        : onClose,
    });
  }

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
      {closable &&
        (closeButton ? (
          renderCloseButtonOverride(closeButton)
        ) : (
          <CloseButton inverted={inverted} onClick={onClose} />
        ))}
    </section>
  );
}

export default NotificationCardInternal;
