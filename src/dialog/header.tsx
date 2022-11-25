import React from 'react';

import { Chat } from '../icon';
import { Heading } from '../heading';

import { avatarStyle, decorativeHeaderStyle, headerStyle } from './styles';
import { useDialog } from './dialog-context';

type HeaderProps = {
  /* */
  /* @default plain */
  mode?: 'plain' | 'decorative';
  /* */
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

  return (
    <>
      {mode === 'decorative' && (
        <div css={decorativeHeaderStyle({ variant })}>
          <span css={avatarStyle({ variant })}>
            <Chat size="large" />
          </span>
        </div>
      )}
      <Heading id={headerId} css={headerStyle()} {...restProps}>
        {children}
      </Heading>
    </>
  );
}

export default Header;
