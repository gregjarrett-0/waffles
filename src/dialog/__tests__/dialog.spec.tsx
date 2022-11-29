/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent, waitFor, act } from '@testing-library/react';

import { Dialog } from '../index';
import { ArrowUp } from '../../icon';

const MOCKED_ID = '123abC';
const variants = ['info', 'success', 'warning', 'error', 'upgrade'] as const;

jest.mock('../../icon', () => {
  return {
    Cross: () => 'CrossIcon',
    ArrowUp: () => 'ArrowUpIcon',
    CrossCircleInverted: () => 'CrossCircleInvertedIcon',
    CheckmarkCircleInverted: () => 'CheckmarkCircleInvertedIcon',
    AttentionInverted: () => 'AttentionInvertedIcon',
    RocketInverted: () => 'RocketInvertedIcon',
    InfoCircleInverted: () => 'InfoCircleInvertedIcon',
  };
});

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

type DialogTestProps = {
  isOpen: boolean;
  onClose: () => void;
};

function DialogTest({ isOpen, onClose }: DialogTestProps) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Dialog.Header>Taylor Swift discography</Dialog.Header>
      <Dialog.Body>Discover amazing pop songs by Taylor Swift.</Dialog.Body>
      <Dialog.Footer>
        <Dialog.Button onClick={onClose}>Dismiss</Dialog.Button>
        <Dialog.Button autoFocus>Confirm</Dialog.Button>
      </Dialog.Footer>
    </Dialog>
  );
}

describe('Dialog', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders dialog and all subcomponents with all a11y attributes passed', async () => {
    const { getByRole, getByTestId, getByText, getByLabelText } = render(
      <DialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let overlay;
    await waitFor(() => {
      overlay = getByTestId('dialog-overlay');
    });
    const dialog = getByRole('dialog');
    const header = getByText('Taylor Swift discography');
    const body = getByText(/amazing pop songs/i);
    const closeButton = getByLabelText('Close');
    const confirmButton = getByText('Confirm');

    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute(
      'aria-labelledby',
      `dialog-${MOCKED_ID}-header`,
    );
    expect(dialog).toHaveAttribute(
      'aria-describedby',
      `dialog-${MOCKED_ID}-body`,
    );
    expect(overlay).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(header).toHaveAttribute('id', `dialog-${MOCKED_ID}-header`);
    expect(body).toBeInTheDocument();
    expect(body).toHaveAttribute('id', `dialog-${MOCKED_ID}-body`);
    expect(closeButton).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
  });

  it("doesn't render dialog when it is closed", () => {
    const { queryByTestId, queryByRole } = render(
      <DialogTest isOpen={false} onClose={() => {}} />,
    );

    const overlay = queryByTestId('dialog-overlay');
    const dialog = queryByRole('dialog');

    expect(dialog).not.toBeInTheDocument();
    expect(overlay).not.toBeInTheDocument();
  });

  it('when custom close button is provided, appropriate onClose and onClick handlers are fired', async () => {
    jest.useFakeTimers();

    const handleClick = jest.fn();
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <Dialog
        isOpen={true}
        onClose={handleClose}
        closeButtonOverride={
          <Dialog.CloseButton
            data-testid="custom-close-button"
            onClick={handleClick}
          />
        }
      >
        <Dialog.Header>Taylor Swift discography</Dialog.Header>
        <Dialog.Body>Discover amazing pop songs by Taylor Swift.</Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button onClick={handleClick}>Dismiss</Dialog.Button>
        </Dialog.Footer>
      </Dialog>,
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
      <DialogTest isOpen={true} onClose={handleClose} />,
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
      <DialogTest isOpen={true} onClose={handleClose} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let dismissButton;
    await waitFor(() => {
      dismissButton = getByText('Dismiss');
    });

    dismissButton && fireEvent.click(dismissButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('when dialog is open, button with autoFocus flag set should be focused', async () => {
    const { getByText } = render(
      <DialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let confirmButton;
    await waitFor(() => {
      confirmButton = getByText('Confirm').closest('button');
    });

    expect(confirmButton).toHaveFocus();
  });

  it('renders snapshot', async () => {
    const { getByRole } = render(
      <DialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let dialog;
    await waitFor(() => {
      dialog = getByRole('dialog');
    });

    expect(dialog).toMatchSnapshot();
  });

  it('renders center aligned snapshot', async () => {
    const { getByRole } = render(
      <Dialog isOpen={true} onClose={() => {}} alignCenter>
        <Dialog.Header>Taylor Swift discography</Dialog.Header>
        <Dialog.Body>Discover amazing pop songs by Taylor Swift.</Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button onClick={() => {}}>Dismiss</Dialog.Button>
          <Dialog.Button autoFocus>Confirm</Dialog.Button>
        </Dialog.Footer>
      </Dialog>,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let dialog;
    await waitFor(() => {
      dialog = getByRole('dialog');
    });

    expect(dialog).toMatchSnapshot();
  });

  describe('with decorative header', () => {
    it(`renders custom icon when specified`, async () => {
      const { getByRole, getByText } = render(
        <Dialog isOpen={true} onClose={() => {}}>
          <Dialog.Header mode="decorative" customIconOverride={<ArrowUp />}>
            Taylor Swift discography
          </Dialog.Header>
          <Dialog.Body>Discover amazing pop songs by Taylor Swift.</Dialog.Body>
          <Dialog.Footer>
            <Dialog.Button onClick={() => {}}>Dismiss</Dialog.Button>
            <Dialog.Button autoFocus>Confirm</Dialog.Button>
          </Dialog.Footer>
        </Dialog>,
      );

      // Let fade in animations finish
      act(() => {
        jest.advanceTimersByTime(500);
      });

      let dialog;
      await waitFor(() => {
        dialog = getByRole('dialog');
      });

      // Find mocked icon
      const icon = getByText('ArrowUpIcon');
      expect(dialog).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
    });

    variants.forEach((variant) => {
      it(`as ${variant} variant`, async () => {
        const { getByRole } = render(
          <Dialog isOpen={true} onClose={() => {}}>
            <Dialog.Header mode="decorative" variant={variant}>
              Taylor Swift discography
            </Dialog.Header>
            <Dialog.Body>
              Discover amazing pop songs by Taylor Swift.
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Button onClick={() => {}}>Dismiss</Dialog.Button>
              <Dialog.Button autoFocus>Confirm</Dialog.Button>
            </Dialog.Footer>
          </Dialog>,
        );

        // Let fade in animations finish
        act(() => {
          jest.advanceTimersByTime(500);
        });

        let dialog;
        await waitFor(() => {
          dialog = getByRole('dialog');
        });

        expect(dialog).toMatchSnapshot();
      });
    });
  });
});
