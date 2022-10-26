import React, { cloneElement } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { Text } from '../text';
import { Badge } from '../badge';

import { itemStyle, itemInnerContentStyle, badgeStyle } from './styles';
import { useSidebar } from './sidebar-context';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type ItemBaseProps = {
  /* The content of navigation Item. Most of the time should be a plain text. */
  children: React.ReactNode;
  /* An icon displayed to the left. Could be any [Icon](/components/icon) from Waffles or a custom component. Depending on the Item size, use default or `xsmall` icon. */
  iconLeft?: JSX.Element;
  /* An icon displayed to the right. Could be any [Icon](/components/icon) from Waffles or a custom component. Depending on the Item size, use default or `xsmall` icon. */
  iconRight?: JSX.Element;
  /* Defines the size of the item element. In most cases, the default size should be used. */
  /* @default medium */
  size?: 'small' | 'medium';
  /* Indicates that the Item is currently active. */
  /* @default false */
  isActive?: boolean;
  /* Useful for highlighting new important positions. */
  /* @default false */
  isNew?: boolean;
  /* Determines if an Item is rendered as a part of the subcategory. In general, it's passed automatically. */
  /* @default false */
  isSubcategoryItem?: boolean;
};

export type ItemProps<T extends React.ElementType = 'a'> =
  PolymorphicComponentProps<T, ItemBaseProps>;

function Item<T extends React.ElementType = 'a'>(
  {
    as,
    children,
    iconLeft,
    iconRight,
    size = 'medium',
    isActive = false,
    isNew = false,
    isSubcategoryItem = false,
    onClick,
    ...restProps
  }: ItemProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'a';

  const { focusProps, isFocusVisible } = useFocusRing();
  const sidebarState = useSidebar();

  function handleClick(event: React.MouseEvent) {
    if (sidebarState) {
      sidebarState.onClose();
    }
    onClick?.(event);
  }

  function renderIcon(originalIcon: JSX.Element) {
    // Check if the icon has a provided custom size prop already
    return originalIcon.props.size
      ? originalIcon
      : cloneElement(originalIcon, {
          // Handle small buttons having xsmall sized icons by default.
          size: size === 'small' ? 'xsmall' : size,
        });
  }

  return (
    <li>
      <Element
        {...mergeProps(focusProps, restProps)}
        {...(isActive && { 'aria-current': 'page' })}
        onClick={handleClick}
        ref={ref}
        css={itemStyle({ isActive, isFocusVisible })}
      >
        {!isSubcategoryItem && iconLeft && renderIcon(iconLeft)}
        <Text
          css={itemInnerContentStyle({
            hasLeftIcon: !!iconLeft,
            hasRightIcon: !!iconRight,
            size,
            isSubcategoryItem,
            isActive,
          })}
        >
          {children}
          {isNew && (
            <Badge
              css={badgeStyle()}
              variant="green"
              data-testid="new-item-indicator"
            >
              New
            </Badge>
          )}
        </Text>
        {iconRight && renderIcon(iconRight)}
      </Element>
    </li>
  );
}

export default Item;
