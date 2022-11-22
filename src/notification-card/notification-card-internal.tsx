import React, { cloneElement } from 'react';

import { notificationStyle, decorStyle, contentStyle } from './styles';
import Icon from './icon';
import CloseButton from './close-button';

type NotificationCardProps = {
  variant?: 'info' | 'success' | 'warning' | 'error' | 'upgrade';
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
    variant = 'info',
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

  function renderCloseButton() {
    function handleClick() {
      closeButtonOverride?.props.onClick?.();
      onClose?.();
    }

    if (closable) {
      return closeButtonOverride ? (
        cloneElement(closeButtonOverride, {
          inverted,
          onClick: handleClick,
        })
      ) : (
        <CloseButton inverted={inverted} onClick={onClose} />
      );
    }

    return null;
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
      {renderCloseButton()}
    </section>
  );
}

export default NotificationCardInternal;
