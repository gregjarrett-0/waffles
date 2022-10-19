import { Text } from '../text';

import { chapeauStyle } from './styles';

type ChapeauProps = {
  /* Text content of the Chapeau. */
  children: React.ReactNode;
  /* Sets the style of the Chapeau suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

function Chapeau({ inverted = false, children, ...restProps }: ChapeauProps) {
  return (
    <Text as="p" css={chapeauStyle({ inverted })} {...restProps}>
      {children}
    </Text>
  );
}

export default Chapeau;
