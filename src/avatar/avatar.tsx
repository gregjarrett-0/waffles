/** @jsx jsx */
import React from 'react';

import { avatarContentStyle, avatarStyle } from './styles';

type AvatarProps = {
  /* Defines the size of the Avatar. In general, use default size. */
  /* @default medium */
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
  /* Determines the variant of the Avatar, based on the set of predefined background colors. */
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
    | 'greyLight';
  /* Content of the Avatar component. In general, pass Waffles [Asset](/components/asset), [Icon](/components/icon), regular image or a string containing only one character. Must be a single element or string. */
  content: JSX.Element | string;
  /* Whether the content should fill the whole avatar space or be restricted to the default Avatar sizing values.  */
  /* @default false */
  contentFill?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Avatar({
  size = 'medium',
  variant = 'navy',
  content,
  contentFill = false,
  ...restProps
}: AvatarProps) {
  return (
    <div css={avatarStyle({ size, variant, contentFill })} {...restProps}>
      <div css={avatarContentStyle({ size, contentFill })}>
        {content && typeof content === 'string'
          ? content.charAt(0).toUpperCase()
          : content}
      </div>
    </div>
  );
}

export default Avatar;
