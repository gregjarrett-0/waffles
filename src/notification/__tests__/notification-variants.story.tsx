import { css } from '@emotion/react';

import { Notification } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

const variants = ['info', 'success', 'warning', 'error', 'upgrade'] as const;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        {variants.map((variant) => {
          return (
            <>
              {/* Inline */}
              <Notification
                key={`${variant}-notification-inline`}
                title={`Long ${variant} inline notification title`}
                description="Long optional regular inline notification description."
                variant={variant}
                action={
                  <Notification.ActionButton>Action</Notification.ActionButton>
                }
                closable
              />
              {/* Banner */}
              <Notification
                key={`${variant}-notification-banner`}
                title={`Long ${variant} banner notification title`}
                description="Long optional regular banner notification description."
                variant={variant}
                mode="banner"
                action={
                  <Notification.ActionButton>Action</Notification.ActionButton>
                }
                closable
              />
            </>
          );
        })}
      </div>
      {/* Inverted */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        {variants.map((variant) => {
          return (
            <>
              {/* Inline */}
              <Notification
                key={`${variant}-notification-inline`}
                title={`Inverted ${variant} inline notification title`}
                description="Long optional inverted inline notification description."
                variant={variant}
                action={
                  <Notification.ActionButton>Action</Notification.ActionButton>
                }
                closable
                inverted
              />
              {/* Banner */}
              <Notification
                key={`${variant}-notification-banner`}
                title={`Inverted ${variant} banner notification title`}
                description="Long optional inverted banner notification description."
                variant={variant}
                mode="banner"
                action={
                  <Notification.ActionButton>Action</Notification.ActionButton>
                }
                closable
                inverted
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Story;
