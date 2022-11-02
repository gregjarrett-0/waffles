import React, { forwardRef } from 'react';

import HeadstoneAvatar from './headstone-avatar';
import CardInternal from './card-internal';

import type { CardProps } from './card-internal';

type CardComponent = <T extends React.ElementType = 'section'>(
  props: CardProps<T>,
) => JSX.Element | null;

const Card: CardComponent = forwardRef(CardInternal);

const CardNamespace = Object.assign(Card, {
  HeadstoneAvatar,
});

export default CardNamespace;
