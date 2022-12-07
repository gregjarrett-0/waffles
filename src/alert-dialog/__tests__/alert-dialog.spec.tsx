/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent, waitFor, act } from '@testing-library/react';

import { AlertDialog } from '../index';

const MOCKED_ID = '123abC';

jest.mock('../../icon', () => {
  return {
    Cross: () => 'CrossIcon',
  };
});

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

type AlertDialogTestProps = {
  isOpen: boolean;
  onClose: () => void;
};

function AlertDialogTest({ isOpen, onClose }: AlertDialogTestProps) {
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialog.Header>Warning!</AlertDialog.Header>
      <AlertDialog.Body>Oops, something happened.</AlertDialog.Body>
      <AlertDialog.Footer>
        <AlertDialog.Button autoFocus onClick={onClose}>
          Got It!
        </AlertDialog.Button>
      </AlertDialog.Footer>
    </AlertDialog>
  );
}

describe('AlertDialogTest', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders alert dialog and all subcomponents with all a11y attributes passed', async () => {
    const { getByTestId, getByRole, getByText, getByLabelText } = render(
      <AlertDialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let overlay;
    await waitFor(() => {
      overlay = getByTestId('modal-overlay');
    });
    const dialog = getByRole('alertdialog');
    const header = getByText('Warning!');
    const body = getByText(/something happened/i);
    const closeButton = getByLabelText('Close');
    const dismissButton = getByText('Got It!');

    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute(
      'aria-labelledby',
      `modal-${MOCKED_ID}-header`,
    );
    expect(overlay).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(header).toHaveAttribute('id', `modal-${MOCKED_ID}-header`);
    expect(body).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(dismissButton).toBeInTheDocument();
  });

  it("doesn't render alert dialog when it is closed", () => {
    const { queryByTestId } = render(
      <AlertDialogTest isOpen={false} onClose={() => {}} />,
    );

    const overlay = queryByTestId('modal-overlay');
    const dialog = queryByTestId('test-dialog');

    expect(dialog).not.toBeInTheDocument();
    expect(overlay).not.toBeInTheDocument();
  });

  it('when custom close button is provided, appropriate onClose and onClick handlers are fired', async () => {
    jest.useFakeTimers();

    const handleClick = jest.fn();
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <AlertDialog
        isOpen={true}
        onClose={handleClose}
        closeButtonOverride={
          <AlertDialog.CloseButton
            data-testid="custom-close-button"
            onClick={handleClick}
          />
        }
      >
        <AlertDialog.Header>Taylor Swift discography</AlertDialog.Header>
        <AlertDialog.Body>
          Discover amazing pop songs by Taylor Swift.
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <AlertDialog.Button onClick={handleClick}>Dismiss</AlertDialog.Button>
        </AlertDialog.Footer>
      </AlertDialog>,
    );

    let closeButton;
    await waitFor(() => {
      closeButton = getByTestId('custom-close-button');
    });

    expect(closeButton).toBeInTheDocument();
    closeButton && fireEvent.click(closeButton);

    // Component unmount is delayed because of close animation
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Check default `onClose` behavior still works
    expect(handleClose).toHaveBeenCalledTimes(1);
    // Check custom close button `onClick` has also been called
    expect(handleClick).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });

  it('when close button at the top is clicked, onClose handler is called', async () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <AlertDialogTest isOpen={true} onClose={handleClose} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let closeButton;
    await waitFor(() => {
      closeButton = getByLabelText('Close');
    });

    closeButton && fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('when dismiss button in the footer is clicked, onClose handler is called', async () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <AlertDialogTest isOpen={true} onClose={handleClose} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let dismissButton;
    await waitFor(() => {
      dismissButton = getByText('Got It!');
    });

    dismissButton && fireEvent.click(dismissButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('when alert dialog is open, button with autoFocus flag set should be focused', async () => {
    const { getByText } = render(
      <AlertDialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let dismissButton;
    await waitFor(() => {
      dismissButton = getByText('Got It!').closest('button');
    });

    expect(dismissButton).toHaveFocus();
  });

  it('renders snapshot', async () => {
    const { getByRole } = render(
      <AlertDialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let alertDialog;
    await waitFor(() => {
      alertDialog = getByRole('alertdialog');
    });

    expect(alertDialog).toMatchSnapshot();
  });
});
