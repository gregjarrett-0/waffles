import React from 'react';

import {
  Attention,
  AttentionInverted,
  CheckmarkCircleInverted,
  CrossCircle,
  CrossCircleInverted,
  InfoCircleInverted,
  Rocket,
  RocketInverted,
} from '../icon';
import { Heading } from '../heading';

import { avatarStyle, decorativeHeaderStyle, headerStyle } from './styles';
import { useDialog } from './dialog-context';

type HeaderProps = {
  /* Mode of the dialog. */
  /* @default plain */
  mode?: 'plain' | 'decorative';
  /* Variant of the dialog, when `mode="decorative"`. */
  /* @default info */
  variant?: 'info' | 'success' | 'warning' | 'error' | 'upgrade';
  /* Title of the dialog. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

function Header({
  mode = 'plain',
  variant = 'info',
  children,
  ...restProps
}: HeaderProps) {
  const { headerId } = useDialog();

  // TODO: replace icon rendering with generic 'notification-icon` component?
  // TODO: handle navyDark background for success and warning icon
  function renderIcon() {
    switch (variant) {
      case 'success':
        return <CheckmarkCircleInverted size="large" />;
      case 'warning':
        return <AttentionInverted size="large" />;
      case 'error':
        return <CrossCircleInverted size="large" />;
      case 'upgrade':
        return <RocketInverted size="large" />;
      default:
        return <InfoCircleInverted size="large" />;
    }
  }

  return (
    <>
      {mode === 'decorative' && (
        <div css={decorativeHeaderStyle({ variant })}>
          <span css={avatarStyle({ variant })}>{renderIcon()}</span>
        </div>
      )}
      <Heading id={headerId} css={headerStyle()} {...restProps}>
        {children}
      </Heading>
    </>
  );
}

export default Header;
