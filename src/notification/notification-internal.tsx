import React, { useState } from 'react';

import { useAnimateTransition } from '../hooks';

import Card from './card';

type NotificationBaseProps = {
  /* The main content of the Notification. */
  title: React.ReactNode;
  /* Supportive content to display below the title. */
  description?: React.ReactNode;
  /* Whether to display the Notification as a banner or as an inline content. */
  /* @default inline */
  mode?: 'inline' | 'banner';
  /* Defines the type of Notification. */
  /* @default info */
  variant?: 'info' | 'success' | 'warning' | 'error' | 'upgrade';
  /* Sets the style of the Notification suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Handler called when the Notification will close. */
  onClose?: () => void;
  /* Custom Notification action. Use `Notification.ActionButton` subcomponent. Must be a single element. */
  action?: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

type NotificationClosable = {
  /* Shows a close button, and the Notification can be dismissed by a user. */
  /* @default false */
  closable: boolean;
  /* Custom close button component. In general use `Notification.CloseButton` subcomponent. */
  closeButtonOverride?: JSX.Element;
} & NotificationBaseProps;

type NotificationPersistent = {
  closable?: never;
  closeButtonOverride?: never;
} & NotificationBaseProps;

type NotificationProps = NotificationClosable | NotificationPersistent;

function NotificationInternal({
  title,
  description,
  mode = 'inline',
  variant = 'info',
  inverted = false,
  closable = false,
  onClose,
  action,
  closeButtonOverride,
  ...restProps
}: NotificationProps) {
  const [isOpen, setIsOpen] = useState(true);
  const isAnimating = useAnimateTransition(isOpen, 400);

  function handleClose() {
    onClose?.();
    setIsOpen(false);
  }

  return isAnimating ? (
    <Card
      {...{ title, description, variant, mode, inverted, closable, action }}
      {...restProps}
      isVisible={isOpen}
      closeButtonOverride={closeButtonOverride}
      onClose={handleClose}
    />
  ) : null;
}

export default NotificationInternal;
