import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { Text } from '../text';

import {
  itemStyle,
  itemInnerContentStyle,
  itemLabelStyle,
  itemDescriptionStyle,
} from './styles';
import NotificationDot from './notification-dot';
import { useMenu } from './menu-context';

import type { PolymorphicComponentProps } from '../helpers';

type ItemBaseProps = {
  /* The content of the Item. Most of the time should be a plain text. */
  label: React.ReactNode;
  /* Defines the variant of the Item. */
  /* @default primary */
  variant?: 'primary' | 'destructive';
  /* [skip docs] */
  index?: number;
  /* Optional description shown below the label. */
  description?: React.ReactNode;
  /* An icon displayed to the left. Could be any [Icon](/components/icon) from Waffles (use default size) or a custom component. */
  iconLeft?: JSX.Element;
  /* An icon displayed to the right. Could be any [Icon](/components/icon) from Waffles (use default size) or a custom component. */
  iconRight?: JSX.Element;
  /* Displays small notification dot next to the label. Useful for highlighting important Items. */
  /* @default false */
  showNotificationDot?: boolean;
  /* Indicates that the Item is currently active. */
  /* @default false */
  isActive?: boolean;
};

type ItemProps<T extends React.ElementType = 'button'> =
  PolymorphicComponentProps<T, ItemBaseProps>;

function Item<T extends React.ElementType = 'button'>({
  as,
  label,
  variant = 'primary',
  index = 0,
  description,
  iconLeft,
  iconRight,
  showNotificationDot = false,
  isActive = false,
  onClick,
  type,
  ...restProps
}: ItemProps<T>) {
  const Element = as || 'button';

  const { focusProps, isFocusVisible } = useFocusRing();
  const { listRef, setIsOpen, getItemProps, triggerRef, inverted } = useMenu();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
    setIsOpen(false);
    // @ts-expect-error: focus() not recognized
    triggerRef.current?.focus();
  }

  return (
    <Element
      {...getItemProps({
        onClick: handleClick,
        ...focusProps,
        ...restProps,
      })}
      tabIndex={-1}
      type={!type && Element === 'button' ? 'button' : type}
      ref={(node) => (listRef.current[index] = node)}
      role="menuitem"
      css={itemStyle({ variant, isFocusVisible, isActive, inverted })}
    >
      {showNotificationDot && <NotificationDot />}
      {iconLeft}
      <span
        css={itemInnerContentStyle({
          hasLeftIcon: !!iconLeft,
          hasRightIcon: !!iconRight,
          hasDescription: !!description,
        })}
      >
        <Text css={itemLabelStyle({ isActive, hasDescription: !!description })}>
          {label}
        </Text>
        {description && (
          <Text css={itemDescriptionStyle({ inverted })}>{description}</Text>
        )}
      </span>
      {iconRight}
    </Element>
  );
}

export default Item;
