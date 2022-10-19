import React, { useState } from 'react';

import { useAnimateTransition } from '../hooks';

import Card from './card';

type NotificationProps = {
  /* The main content of the Notification. */
  title: string;
  /* Supportive content to display below the title. */
  description?: React.ReactNode;
  /* Whether to display the Notification as a banner or as an inline content. */
  /* @default inline */
  mode?: 'inline' | 'banner';
  /* Defines the type of Notification. */
  /* @default default */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'upgrade';
  /* Sets the style of the Notification suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Shows a close button, and the Notification can be dismissed by a user. */
  /* @default false */
  closable?: boolean;
  /* Handler called when the Notification will close. */
  onClose?: () => void;
  /* Custom Notification action. Use `Notification.ActionButton` subcomponent. Must be a single element. */
  action?: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

function NotificationInternal({
  title,
  description,
  mode = 'inline',
  variant = 'default',
  inverted = false,
  closable = false,
  onClose,
  action,
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
      onClose={handleClose}
    />
  ) : null;
}

export default NotificationInternal;
