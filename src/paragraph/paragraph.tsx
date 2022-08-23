import { Text } from '../text';

import { paragraphStyle } from './styles';

type ParagraphProps = {
  /* The content of the paragraph. */
  children: React.ReactNode;
  /* Defines the variant of the paragraph. */
  /* @default primary */
  variant?: 'primary' | 'secondary';
  /* Defines the font size of the paragraph. In general, default size should be used. */
  /* @default medium */
  size?: 'small' | 'medium' | 'large';
  /* Sets the style of the paragraph suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

function Paragraph({
  variant = 'primary',
  size = 'medium',
  inverted = false,
  ...restProps
}: ParagraphProps) {
  return (
    <Text
      as="p"
      css={paragraphStyle({ variant, size, inverted })}
      {...restProps}
    />
  );
}

export default Paragraph;
