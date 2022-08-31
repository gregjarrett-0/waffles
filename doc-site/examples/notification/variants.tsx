import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Notification } from '@datacamp/waffles/notification';
import { ArrowRight } from '@datacamp/waffles/icon';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.medium};
      `}
    >
      <Notification
        variant="default"
        title="We don't share your personal information"
        description="Your info is only shared with an employer when you
          apply for a job or accept their request."
        closable
      />
      <Notification
        variant="success"
        title="Course completed"
        action={
          <Notification.ActionButton iconRight={<ArrowRight />}>
            Take Assessment
          </Notification.ActionButton>
        }
      />
      <Notification
        variant="warning"
        title="Some personal details are missing"
        description="To discover jobs tailored exclusively for you, we need
          a bit more information about you."
      />
      <Notification
        variant="error"
        title="Do not close this window"
        description="The recording will immediately stop if you close
          this window."
      />
      <Notification
        variant="upgrade"
        title="Upgrade to premium!"
        description="Publish jobs, view full profiles, and contact
          candidates directly."
        action={<Notification.ActionButton>Upgrade</Notification.ActionButton>}
      />
    </div>
  );
}

export default Example;
