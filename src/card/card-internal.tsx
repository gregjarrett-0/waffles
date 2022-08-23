import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { cardStyle, headstoneStyle } from './styles';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type CardBaseProps = {
  /* The content of the card. */
  children: React.ReactNode;
  /* Content positioned along the top of the card. Could be [Avatar](/components/avatar) from Waffles (use default size) or a custom component. */
  headstone?: React.ReactNode;
  /* Disables on hover shadow effect. */
  /* @default false */
  disableHoverEffect?: boolean;
};

export type CardProps<T extends React.ElementType = 'section'> =
  PolymorphicComponentProps<T, CardBaseProps>;

function CardInternal<T extends React.ElementType = 'section'>(
  {
    as,
    children,
    headstone,
    disableHoverEffect = false,
    ...restProps
  }: CardProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'section';
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Element
      {...mergeProps(focusProps, restProps)}
      ref={ref}
      css={cardStyle({
        isFocusVisible,
        hasHeadstone: !!headstone,
        disableHoverEffect,
      })}
    >
      {headstone && <div css={headstoneStyle()}>{headstone}</div>}
      {children}
    </Element>
  );
}

export default CardInternal;
