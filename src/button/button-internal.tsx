import React, { cloneElement } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { logError, setTitleCase } from '../helpers';

import { buttonStyle, innerContentStyle } from './styles';
import ButtonLoader from './loader';
import { MESSAGES } from './debug-messages';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type ButtonBaseProps = {
  /* Defines the variant of the Button. */
  /* @default primary */
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive' | 'upgrade';
  /* Defines the size of the Button. In most cases, the default size should be used. */
  /* @default medium */
  size?: 'small' | 'medium' | 'large';
  /* Whether the Button is in it's loading state. The Button will maintain the minimum width of it's child content. */
  /* @default false */
  isLoading?: boolean;
  /* Allows the Button to grow to the width of its container. */
  /* @default false */
  fullWidth?: boolean;
  /* Sets the style of the Button suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Disables the default _Title Casing_ when text Button content is provided. Use only in rare situations. */
  /* @default false */
  disableTitleCase?: boolean;
};

type ButtonIconOnlyProps = {
  /* An icon displayed as the only content of the Button. Because of that `aria-label` attribute must be specified. Could be any [Icon](/components/icon) from Waffles (use default size) or a custom component. */
  icon: JSX.Element;
  children?: never;
  iconLeft?: never;
  iconRight?: never;
  'aria-label': string;
} & ButtonBaseProps;

type ButtonNoIconProps = {
  icon?: never;
  /* The content inside the Button. Most of the time should be a plain text. Should never be an empty string. */
  children: React.ReactNode;
  /* An icon displayed to the left. Could be any [Icon](/components/icon) from Waffles (use default size) or a custom component. */
  iconLeft?: JSX.Element;
  /* An icon displayed to the right. Could be any [Icon](/components/icon) from Waffles (use default size) or a custom component. */
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
    disableTitleCase = false,
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
  // Log console.error when an empty string is passed as incorrect syntax
  if (typeof children === 'string' && children.length === 0) {
    logError(MESSAGES.EMPTY_CHILDREN);
  }

  const Element = as || 'button';
  const { focusProps, isFocusVisible } = useFocusRing();

  function renderIcon(originalIcon: JSX.Element, key: string) {
    // Check if the Icon has a provided custom size prop already
    return originalIcon.props.size
      ? originalIcon
      : cloneElement(originalIcon, {
          key,
          // Handle large buttons having medium sized Icons by default, and small / medium as defined
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
      aria-label={ariaLabel}
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
        renderIcon(icon, 'button-icon-only')
      ) : (
        <span
          css={innerContentStyle({
            size,
          })}
        >
          {iconLeft && renderIcon(iconLeft, 'button-left-icon')}
          {typeof children === 'string' && !disableTitleCase
            ? setTitleCase(children as string)
            : children}
          {iconRight && renderIcon(iconRight, 'button-right-icon')}
        </span>
      )}
      {isLoading && (
        <ButtonLoader
          key="button-loader"
          {...{
            size,
            variant,
            inverted,
            isIconOnly: !!icon,
          }}
        />
      )}
    </Element>
  );
}

export default ButtonInternal;
