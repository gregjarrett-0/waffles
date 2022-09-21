import React from 'react';

import { badgeStyle, innerContentStyle } from './styles';

type BadgeProps = {
  /* Determines the variant of the badge, based on the set of predefined background colors. */
  /* @default navy */
  variant?:
    | 'green'
    | 'navy'
    | 'white'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'blue'
    | 'purple'
    | 'pink'
    | 'grey'
    | 'greySubtle';
  /* The text content of the badge. */
  children: React.ReactNode;
  /* Defines the size of the badge. In general, default size should be used. */
  /* @default medium */
  size?: 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLSpanElement>;

function Badge({
  variant = 'navy',
  size = 'medium',
  children,
  ...restProps
}: BadgeProps) {
  return (
    <span {...restProps} css={badgeStyle({ variant, size })}>
      <span css={innerContentStyle()}>{children}</span>
    </span>
  );
}

export default Badge;
