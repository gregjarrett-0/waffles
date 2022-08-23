import React, { cloneElement } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { buttonStyle, innerContentStyle } from './styles';
import ButtonLoader from './loader';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type ButtonBaseProps = {
  /* Defines the variant of the button. */
  /* @default primary */
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive' | 'upgrade';
  /* Defines the size of the button. In most cases, the default size should be used. */
  /* @default medium */
  size?: 'small' | 'medium' | 'large';
  /* Whether the button is in it's loading state. The button will maintain the minimum width of it's child content. */
  /* @default false */
  isLoading?: boolean;
  /* Allows the button to grow to the width of its container. */
  /* @default false */
  fullWidth?: boolean;
  /* Sets the style of the button suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
};

type ButtonIconOnlyProps = {
  /* An icon displayed as the only content of the button. Because of that `aria-label` attribute must be specified. Could be any [icon](/components/icon) from Waffles (use default size) or a custom component. */
  icon: JSX.Element;
  children?: never;
  iconLeft?: never;
  iconRight?: never;
  'aria-label': string;
} & ButtonBaseProps;

type ButtonNoIconProps = {
  icon?: never;
  /* The content inside the button. Most of the time should be a plain text. */
  children: React.ReactNode;
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles (use default size) or a custom component. */
  iconLeft?: JSX.Element;
  /* An icon displayed to the right. Could be any [icon](/components/icon) from Waffles (use default size) or a custom component. */
  iconRight?: JSX.Element;
  /* [skip docs] */
  'aria-label'?: string;
} & ButtonBaseProps;

export type ButtonProps<T extends React.ElementType = 'button'> =
  PolymorphicComponentProps<T, ButtonNoIconProps | ButtonIconOnlyProps>;

function ButtonInternal<T extends React.ElementType = 'button'>(
  {
    as,
    variant = 'primary',
    size = 'medium',
    isLoading = false,
    inverted = false,
    fullWidth = false,
    icon,
    iconLeft,
    iconRight,
    children,
    type,
    'aria-label': ariaLabel,
    ...restProps
  }: ButtonProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'button';
  const { focusProps, isFocusVisible } = useFocusRing();

  function renderIcon(originalIcon: JSX.Element) {
    // Check if the icon has a provided custom size prop already
    return originalIcon.props.size
      ? originalIcon
      : cloneElement(originalIcon, {
          // Handle large buttons having medium sized icons by default, and small / medium as defined
          size: size === 'large' ? 'medium' : size,
        });
  }

  return (
    <Element
      {...mergeProps(focusProps, restProps)}
      {...(isLoading && {
        disabled: true,
      })}
      type={!type && Element === 'button' ? 'button' : type}
      aria-label={isLoading ? ariaLabel?.concat(' ', 'Loading') : ariaLabel}
      ref={ref}
      css={buttonStyle({
        variant,
        size,
        inverted,
        fullWidth,
        isIconOnly: !!icon,
        isLoading,
        isFocusVisible,
      })}
    >
      {icon ? (
        renderIcon(icon)
      ) : (
        <span
          css={innerContentStyle({
            size,
          })}
        >
          {iconLeft && renderIcon(iconLeft)}
          {children}
          {iconRight && renderIcon(iconRight)}
        </span>
      )}
      {isLoading && (
        <ButtonLoader {...{ size, variant, inverted, isIconOnly: !!icon }} />
      )}
    </Element>
  );
}

export default ButtonInternal;
