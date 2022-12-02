import React, { cloneElement } from 'react';

import { NotificationIcon } from '../notification-icon';
import { Heading } from '../heading';

import { avatarStyle, decorativeHeaderStyle, headerStyle } from './styles';
import { useDialog } from './dialog-context';

type HeaderBaseProps = {
  /* Title of the dialog. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

type HeaderDecorativeProps = {
  /* Mode of the dialog. */
  /* @default plain */
  mode: 'plain' | 'decorative';
  /* Variant of the dialog, only applicable when `mode="decorative"`. */
  /* @default info */
  variant?: 'info' | 'success' | 'warning' | 'error' | 'upgrade';
  /* Custom icon override for the decorative header, only applicable when `mode="decorative"`. In general, use Waffles [Icon](/components/icon). */
  customIconOverride?: JSX.Element;
} & HeaderBaseProps;

type HeaderPlainProps = {
  mode?: never;
  variant?: never;
  customIconOverride?: never;
} & HeaderBaseProps;

type HeaderProps = HeaderPlainProps | HeaderDecorativeProps;

function Header({
  mode = 'plain',
  variant = 'info',
  customIconOverride,
  children,
  ...restProps
}: HeaderProps) {
  const { headerId } = useDialog();

  function renderIcon() {
    return customIconOverride ? (
      // Auto-set size of custom icon
      cloneElement(customIconOverride, { size: 'large' })
    ) : (
      <NotificationIcon variant={variant} size="large" />
    );
  }

  return (
    <>
      {mode === 'decorative' && (
        <div css={decorativeHeaderStyle({ variant })}>
          <span css={avatarStyle({ variant })}>{renderIcon()}</span>
        </div>
      )}
      <Heading id={headerId} css={headerStyle({ mode })} {...restProps}>
        {children}
      </Heading>
    </>
  );
}

export default Header;
