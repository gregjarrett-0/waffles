import { Dialog } from '../dialog';

import { dialogStyle } from './styles';

type AlertDialogProps = {
  /* Determines if the Alert Dialog is open. */
  isOpen: boolean;
  /* Handler called when the Alert Dialog will close. */
  onClose: () => void;
  /* Content of the Alert Dialog. In general, Alert Dialog's own subcomponents should be used: `AlertDialog.Header`, `AlertDialog.Body`, and `AlertDialog.Footer`. */
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function AlertDialogInternal({ children, ...restProps }: AlertDialogProps) {
  return (
    <Dialog {...restProps} role="alertdialog" css={dialogStyle()}>
      {children}
    </Dialog>
  );
}

export default AlertDialogInternal;
