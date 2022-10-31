// Split context and provider to enable auto-generated props docs
import { useCallback, useState } from 'react';
import { nanoid } from 'nanoid';

import ToastsList from './toasts-list';
import { ToastContext } from './toast-context';
import Toast from './toast';

import type { ToastOptions } from './toast-context';

type ToastsDataset = Record<
  string,
  Omit<React.ComponentProps<typeof Toast>, 'onClose'>
>;

type ToastProviderProps = {
  /* Turns off Toasts auto-hide functionality. When flag is passed, notifications persist and must be dismissed manually. */
  /* @default false */
  disableAutoHide?: boolean;
  /* The number of milliseconds to wait before automatically dismissing a notification. */
  /* @default 6000 */
  autoHideDuration?: number;
  /* Sets the distance from the top of the page to the Toast's container. */
  /* @default 54px */
  offset?: string;
  /* Content of an app. Generally, it is enough to wrap the whole app close to its root with a single `ToastProvider`. */
  children: React.ReactNode;
};

function ToastProvider({
  disableAutoHide = false,
  autoHideDuration = 6000,
  offset = '54px',
  children,
}: ToastProviderProps) {
  // Keep each new Toast in a hash map under unique ID
  const [toasts, setToasts] = useState<ToastsDataset>({});
  const toastIds = Object.keys(toasts);

  // Create new Toast, exposed by hook
  const toast = useCallback(
    ({ title, variant = 'default', description }: ToastOptions) => {
      const toastId = nanoid(6);

      setToasts((toasts) => {
        return {
          ...toasts,
          [toastId]: {
            title,
            variant,
            description,
            disableAutoHide,
            autoHideDuration,
          },
        };
      });
    },
    [autoHideDuration, disableAutoHide],
  );

  // Remove Toast from hash map by ID
  // Handler is called by Toast after exit animation is finished
  // It's called either automatically by internal Toast timer or after close button is clicked
  function handleClose(toastId: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [toastId]: removed, ...restToasts } = toasts;
    setToasts(restToasts);
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {toastIds.length > 0 && (
        <ToastsList offset={offset}>
          {toastIds.map((toastId) => {
            return (
              <Toast
                key={toastId}
                {...toasts[toastId]}
                onClose={() => handleClose(toastId)}
              />
            );
          })}
        </ToastsList>
      )}
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
