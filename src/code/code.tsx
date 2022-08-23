import { codeStyle } from './styles';

type CodeProps = {
  /* The content of the inline code sample. */
  children: React.ReactNode;
  /* The element used to render this component. */
  /* @default code */
  as?: 'code' | 'pre';
  /* Defines the font size of the inline code sample. */
  /* @default medium */
  size?: 'medium' | 'large';
  /* Sets the style of the inline code sample suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLElement>;

function Code({
  as,
  size = 'medium',
  inverted = false,
  ...restProps
}: CodeProps) {
  const Element = as || 'code';

  return <Element css={codeStyle({ size, inverted })} {...restProps} />;
}

export default Code;
