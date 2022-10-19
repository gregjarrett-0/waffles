import React from 'react';

import { Text } from '../text';

import { headingStyle, sizeToElement } from './styles';

type HeadingProps = {
  /* The content of the Heading. */
  children: React.ReactNode;
  /* The level of heading used to render this component. Use to fine-tune heading level to preserve correct heading hierarchy on the page. In general, specifying only Heading `size` should be enough. */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /* Defines the font size of the Heading. Each size has it's default Heading level associated with it, e.g. `xxlarge` is rendered as `h1`. */
  /* @default xlarge */
  size?: 'xxlarge' | 'xlarge' | 'large' | 'medium';
  /* Sets the style of the Heading suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

function Heading({
  as,
  size = 'xlarge',
  inverted = false,
  ...restProps
}: HeadingProps) {
  return (
    <Text
      as={as ? as : sizeToElement({ size })}
      css={headingStyle({ size, inverted })}
      {...restProps}
    />
  );
}

export default Heading;
