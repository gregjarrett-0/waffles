import React, { useState } from 'react';

import { useAnimateTransition } from '../hooks';

import Card from './card';

type NotificationProps = {
  /* The main content of the notification. */
  title: string;
  /* Supportive content to display below the title. */
  description?: React.ReactNode;
  /* Defines the type of notification. */
  /* @default default */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'upgrade';
  /* Sets the style of the notification suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Shows a close button, and the notification can be dismissed by a user. */
  /* @default false */
  closable?: boolean;
  /* Handler called when the notification will close. */
  onClose?: () => void;
  /* Custom notification action. Use `Notification.ActionButton` subcomponent. Must be a single element. */
  action?: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

function NotificationInternal({
  title,
  description,
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
      {...{ title, description, variant, inverted, closable, action }}
      {...restProps}
      isVisible={isOpen}
      onClose={handleClose}
    />
  ) : null;
}

export default NotificationInternal;
