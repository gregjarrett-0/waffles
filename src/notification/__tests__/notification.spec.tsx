import { render, fireEvent, act, waitFor } from '@testing-library/react';

import { Notification } from '../index';

describe('Notification', () => {
  it('renders title and description', async () => {
    const { getByText } = render(
      <Notification
        title="Taylor Swift tour announced"
        description="The World Tour is going to start this summer."
      />,
    );

    let title;
    await waitFor(() => {
      title = getByText('Taylor Swift tour announced');
    });
    const description = getByText(/the world tour/i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('renders close button when closable flag is passed', async () => {
    const { getByLabelText } = render(
      <Notification title="Taylor Swift tour announced" closable />,
    );

    let button;
    await waitFor(() => {
      button = getByLabelText('Close notification');
    });

    expect(button).toBeInTheDocument();
  });

  it('renders action button', async () => {
    const { getByText } = render(
      <Notification
        title="Taylor Swift tour announced"
        action={
          <Notification.ActionButton>Check Details</Notification.ActionButton>
        }
      />,
    );

    let button;
    await waitFor(() => {
      button = getByText('Check Details');
    });

    expect(button).toBeInTheDocument();
  });

  it('when custom close button is provided, appropriate onClose and onClick handlers are fired', async () => {
    jest.useFakeTimers();

    const handleClick = jest.fn();
    const handleClose = jest.fn();
    const { getByTestId, queryByText } = render(
      <Notification
        title="Taylor Swift tour announced"
        closable
        onClose={handleClose}
        closeButtonOverride={
          <Notification.CloseButton
            data-testid="custom-close-button"
            onClick={handleClick}
          />
        }
      />,
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

    const title = queryByText('Taylor Swift tour announced');

    // Check default `onClose` behavior still works
    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(title).not.toBeInTheDocument();
    // Check custom close button `onClick` has also been called
    expect(handleClick).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });

  it('after close button is clicked, correct handler is triggered, and notification disappears', async () => {
    jest.useFakeTimers();

    const handleClick = jest.fn();
    const { queryByText, getByLabelText } = render(
      <Notification
        title="Taylor Swift tour announced"
        closable
        onClose={handleClick}
      />,
    );

    let button;
    await waitFor(() => {
      button = getByLabelText('Close notification');
    });
    button && fireEvent.click(button);

    // Component unmount is delayed because of close animation
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const title = queryByText('Taylor Swift tour announced');

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(title).not.toBeInTheDocument();

    jest.useRealTimers();
  });

  it('sets the data attribute on the notification', async () => {
    const { getByTestId } = render(
      <Notification data-testid="test-notification" title="Test" />,
    );

    let notification;
    await waitFor(() => {
      notification = getByTestId('test-notification');
    });

    expect(notification).toBeInTheDocument();
  });

  describe('accessible announcement', () => {
    it('should be rendered by success notification', async () => {
      const { getByText } = render(
        <Notification title="Notification title" variant="success" />,
      );

      let announcement;
      await waitFor(() => {
        announcement = getByText('Success:');
      });

      expect(announcement).toBeInTheDocument();
    });

    it('should be rendered by warning notification', async () => {
      const { getByText } = render(
        <Notification title="Notification title" variant="warning" />,
      );

      let announcement;
      await waitFor(() => {
        announcement = getByText('Warning:');
      });

      expect(announcement).toBeInTheDocument();
    });

    it('should be rendered by error notification', async () => {
      const { getByText } = render(
        <Notification title="Notification title" variant="error" />,
      );

      let announcement;
      await waitFor(() => {
        announcement = getByText('Error:');
      });

      expect(announcement).toBeInTheDocument();
    });
  });

  it('renders snapshot of regular inline notification with all optional content', async () => {
    const { container, getByText } = render(
      <Notification
        title="Notification title"
        description={
          <>
            Notification <strong>description</strong>.
          </>
        }
        closable
        action={<Notification.ActionButton>Action</Notification.ActionButton>}
      />,
    );

    let title;
    await waitFor(() => {
      title = getByText('Notification title');
    });
    const notification = container.querySelector('section');

    expect(title).toBeInTheDocument();
    expect(notification).toMatchSnapshot();
  });

  it('renders snapshot of inverted inline notification with all optional content', async () => {
    const { container, getByText } = render(
      <Notification
        inverted
        title="Inverted notification title"
        description={
          <>
            Inverted notification <strong>description</strong>.
          </>
        }
        closable
        action={<Notification.ActionButton>Action</Notification.ActionButton>}
      />,
    );

    let title;
    await waitFor(() => {
      title = getByText('Inverted notification title');
    });
    const notification = container.querySelector('section');

    expect(title).toBeInTheDocument();
    expect(notification).toMatchSnapshot();
  });

  it('renders snapshot of regular banner notification with all optional content', async () => {
    const { container, getByText } = render(
      <Notification
        title="Banner notification title"
        description={
          <>
            Banner notification <strong>description</strong>.
          </>
        }
        mode="banner"
        closable
        action={<Notification.ActionButton>Action</Notification.ActionButton>}
      />,
    );

    let title;
    await waitFor(() => {
      title = getByText('Banner notification title');
    });
    const notification = container.querySelector('section');

    expect(title).toBeInTheDocument();
    expect(notification).toMatchSnapshot();
  });

  it('renders snapshot of inverted banner notification with all optional content', async () => {
    const { container, getByText } = render(
      <Notification
        inverted
        title="Banner notification title"
        description={
          <>
            Banner notification <strong>description</strong>.
          </>
        }
        mode="banner"
        closable
        action={<Notification.ActionButton>Action</Notification.ActionButton>}
      />,
    );

    let title;
    await waitFor(() => {
      title = getByText('Banner notification title');
    });
    const notification = container.querySelector('section');

    expect(title).toBeInTheDocument();
    expect(notification).toMatchSnapshot();
  });
});
