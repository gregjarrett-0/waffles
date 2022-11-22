import React, { useState, useRef, useEffect } from 'react';

import { useCallbackRef } from '../hooks';

import useHeight from './use-height';
import { animatedWrapperStyle } from './styles';
import Card from './card';

type ToastProps = {
  /* The main content of the Toast. */
  title: string;
  /* Supportive content to display below the title. */
  description?: React.ReactNode;
  /* Defines the type of notification. */
  /* @default info */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /* Turns off auto-hide functionality for the specific Toast. Overrides the `ToastProvider` value. */
  /* @default false */
  disableAutoHide?: boolean;
  /* [skip docs] */
  autoHideDuration: number;
  /* [skip docs] */
  onClose: () => void;
};

function Toast({
  title,
  description,
  variant = 'info',
  disableAutoHide,
  autoHideDuration,
  onClose,
}: ToastProps) {
  // A flag to trigger enter / exit animation
  const [isVisible, setIsVisible] = useState(true);
  // For exit animation to work smoothly, height of animated wrapper is required
  const wrapperRef = useRef<HTMLLIElement>(null);
  const height = useHeight(wrapperRef);
  // Internal timer, a timeout after which the Toast is closed automatically
  const autoCloseTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleClose = useCallbackRef(() => {
    onClose();
  });

  // Close Toast after close button is clicked
  // First it triggers exit animation, after that it clears internal timer
  // To let exit animation finish before Toast unmount, close callback is triggered after a delay
  // Finally completely remove the Toast
  function forceClose() {
    if (isVisible) {
      setIsVisible(false);
      clearTimeout(Number(autoCloseTimer.current));
      setTimeout(() => {
        handleClose();
      }, 600);
    }
  }

  // Close toast after timeout, tracked internally
  useEffect(() => {
    if (isVisible && !disableAutoHide) {
      autoCloseTimer.current = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          handleClose();
        }, 600);
      }, autoHideDuration);
    }

    return () => {
      clearTimeout(Number(autoCloseTimer.current));
    };
  }, [isVisible, disableAutoHide, autoHideDuration, handleClose]);

  return (
    <li ref={wrapperRef} css={animatedWrapperStyle({ isVisible, height })}>
      <Card {...{ title, variant, description }} onClose={forceClose} />
    </li>
  );
}

export default Toast;
