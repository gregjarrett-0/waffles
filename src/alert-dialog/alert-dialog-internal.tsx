import { Dialog } from '../dialog';

import { dialogStyle } from './styles';

type AlertDialogProps = {
  /* Determines if the Alert Dialog is open. */
  isOpen: boolean;
  /* Handler called when the Alert Dialog will close. */
  onClose: () => void;
  /* Custom close button component. In general use `AlertDialog.CloseButton` subcomponent. */
  closeButtonOverride?: JSX.Element;
  /* Content of the Alert Dialog. In general, Alert Dialog's own subcomponents should be used: `AlertDialog.Header`, `AlertDialog.Body`, and `AlertDialog.Footer`. */
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function AlertDialogInternal({ children, ...restProps }: AlertDialogProps) {
  return (
    <Dialog
      css={dialogStyle()}
      role="alertdialog"
      idPrefix="alert-dialog"
      {...restProps}
    >
      {children}
    </Dialog>
  );
}

export default AlertDialogInternal;
