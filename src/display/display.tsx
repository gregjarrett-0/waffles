import { Text } from '../text';

import { displayStyle } from './styles';

type DisplayProps = {
  /* Text content to display. */
  children: React.ReactNode;
  /* Sets the style of the Display suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

function Display({ inverted = false, children, ...restProps }: DisplayProps) {
  return (
    <Text as="p" css={displayStyle({ inverted })} {...restProps}>
      {children}
    </Text>
  );
}

export default Display;
