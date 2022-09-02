import React, { cloneElement } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { tabStyle, tabInnerContentStyle, tabFauxContentStyle } from './styles';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type TabBaseProps = {
  /* The label displayed on the tab. */
  label: string;
  /* Content of a tab panel displayed below corresponding tab. */
  children?: React.ReactNode;
  /* An icon displayed to the left of the label. Could be any [Icon](/components/icon) from Waffles or a custom component. */
  icon?: JSX.Element;
  /* [skip docs] */
  isActive?: boolean;
  /* [skip docs] */
  inverted?: boolean;
};

export type TabProps<T extends React.ElementType = 'button'> =
  PolymorphicComponentProps<T, TabBaseProps>;

function TabInternal<T extends React.ElementType = 'button'>(
  {
    as,
    label,
    icon,
    isActive = false,
    inverted = false,
    type,
    ...restProps
  }: TabProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'button';
  const { focusProps, isFocusVisible } = useFocusRing();

  function renderIcon() {
    if (!icon) return;
    // Check if the Icon has a provided custom size prop already, or set it as 'xsmall'
    return icon.props.size
      ? icon
      : cloneElement(icon, {
          size: 'xsmall',
        });
  }

  return (
    <Element
      {...mergeProps(focusProps, restProps)}
      type={!type && Element === 'button' ? 'button' : type}
      ref={ref}
      role="tab"
      css={tabStyle({ isActive, isFocusVisible, inverted })}
    >
      {renderIcon()}
      <span css={tabInnerContentStyle({ hasIcon: !!icon })}>
        {label}
        <span css={tabFauxContentStyle()} aria-hidden="true">
          {label}
        </span>
      </span>
    </Element>
  );
}

export default TabInternal;
