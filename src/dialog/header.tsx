import React from 'react';

import { NotificationIcon } from '../notification-icon';
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

  function renderIcon() {
    return <NotificationIcon variant={variant} size="large" />;
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
