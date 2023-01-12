import { css } from '@emotion/react';

import { Notification } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      {/* Inline */}

      {/* Plain (no action or close button) */}
      <Notification
        title="Notification title"
        description="Notification description."
      />

      {/* Closable */}
      <Notification
        title="Notification title"
        description="Notification description."
        closable
      />

      {/* w/ ActionButton */}
      <Notification
        title="Notification title"
        description="Notification description."
        action={<Notification.ActionButton>Action</Notification.ActionButton>}
      />

      {/* Closable w/ ActionButton */}
      <Notification
        title="Notification title"
        description="Notification description."
        action={<Notification.ActionButton>Action</Notification.ActionButton>}
        closable
      />

      {/* Banner */}

      {/* Plain (no action or close button) */}
      <Notification
        title="Banner notification title"
        description="Banner notification description."
        mode="banner"
      />

      {/* Closable */}
      <Notification
        title="Banner notification title"
        description="Banner notification description."
        mode="banner"
        closable
      />

      {/* w/ ActionButton */}
      <Notification
        title="Banner notification title"
        description="Banner notification description."
        mode="banner"
        action={<Notification.ActionButton>Action</Notification.ActionButton>}
      />

      {/* Closable w/ ActionButton */}
      <Notification
        title="Banner notification title"
        description="Banner notification description."
        mode="banner"
        action={<Notification.ActionButton>Action</Notification.ActionButton>}
        closable
      />
    </div>
  );
}

export default Story;
