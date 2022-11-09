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
  closeButtonOverride?: JSX.Element;
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
    closeButtonOverride,
    onClose,
    children,
    ...restProps
  }: NotificationCardProps,
  ref?: React.Ref<HTMLDivElement>,
) {
  const isIconCentered = closable && isContentCentered;

  // Maintain the original onClose behavior, if a custom one is provided
  function handleClick() {
    return closeButtonOverride?.props.onClick
      ? () => {
          closeButtonOverride?.props.onClick();
          onClose?.();
        }
      : onClose;
  }

  function renderCloseButtonOverride() {
    closeButtonOverride
      ? cloneElement(closeButtonOverride, {
          inverted,
          onClick: handleClick(),
        })
      : null;
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
        (closeButtonOverride ? (
          renderCloseButtonOverride()
        ) : (
          <CloseButton inverted={inverted} onClick={onClose} />
        ))}
    </section>
  );
}

export default NotificationCardInternal;
