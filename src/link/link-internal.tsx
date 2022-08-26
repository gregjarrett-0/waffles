import React, { cloneElement, useRef } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { useMergeRefs } from '../hooks';

import useIconSize from './use-icon-size';
import { linkStyle, innerContentStyle } from './styles';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type LinkBaseProps = {
  /* The content of the link.  */
  children: React.ReactNode;
  /* Defines the font size of the link. In general should be specified only when used as a standalone element. */
  /* @default inherit */
  size?: 'small' | 'medium' | 'large' | 'inherit';
  /* Sets the style of the link suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles or a custom component. */
  iconLeft?: JSX.Element;
  /* An icon displayed to the right. Could be any [icon](/components/icon) from Waffles or a custom component. */
  iconRight?: JSX.Element;
};

export type LinkProps<T extends React.ElementType = 'a'> =
  PolymorphicComponentProps<T, LinkBaseProps>;

function LinkInternal<T extends React.ElementType = 'a'>(
  {
    as,
    size = 'inherit',
    inverted = false,
    iconLeft,
    iconRight,
    children,
    ...restProps
  }: LinkProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'a';
  const { focusProps, isFocusVisible } = useFocusRing();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const iconSize = useIconSize(linkRef);
  const mergedRef = useMergeRefs(linkRef, ref);

  function renderIcon(originalIcon: JSX.Element) {
    return originalIcon.props.size
      ? originalIcon
      : cloneElement(originalIcon, {
          size: iconSize,
        });
  }

  return (
    <Element
      {...mergeProps(focusProps, restProps)}
      ref={mergedRef}
      css={linkStyle({
        size,
        inverted,
        isFocusVisible,
      })}
    >
      {iconLeft && renderIcon(iconLeft)}
      {
        <span
          css={innerContentStyle({
            iconSize,
            hasLeftIcon: !!iconLeft,
            hasRightIcon: !!iconRight,
          })}
        >
          {children}
        </span>
      }
      {iconRight && renderIcon(iconRight)}
    </Element>
  );
}

export default LinkInternal;
