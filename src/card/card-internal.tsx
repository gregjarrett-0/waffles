import React, { Children, cloneElement, isValidElement } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { cardStyle, headstoneStyle } from './styles';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type CardBaseProps = {
  /* The content of the Card. */
  children: React.ReactNode;
  /* Content positioned along the top of the Card. Could be `Card.HeadstoneItem` or a custom component. */
  headstone?: React.ReactNode;
  /* Disables on hover shadow effect. */
  /* @default false */
  disableHoverEffect?: boolean;
  /* Sets the style of the Card suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
};

export type CardProps<T extends React.ElementType = 'section'> =
  PolymorphicComponentProps<T, CardBaseProps>;

function CardInternal<T extends React.ElementType = 'section'>(
  {
    as,
    children,
    headstone,
    disableHoverEffect = false,
    inverted = false,
    ...restProps
  }: CardProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'section';
  const { focusProps, isFocusVisible } = useFocusRing();

  function renderHeadstone() {
    return Children.map(headstone, (headstoneItem) => {
      if (isValidElement(headstoneItem)) {
        if (inverted) {
          return cloneElement(headstoneItem as JSX.Element, {
            inverted,
          });
        }

        return headstoneItem;
      }

      return null;
    });
  }

  return (
    <Element
      {...mergeProps(focusProps, restProps)}
      ref={ref}
      css={cardStyle({
        isFocusVisible,
        hasHeadstone: !!headstone,
        disableHoverEffect,
        inverted,
      })}
    >
      {headstone && <div css={headstoneStyle()}>{renderHeadstone()}</div>}
      {children}
    </Element>
  );
}

export default CardInternal;
