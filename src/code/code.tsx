import { codeStyle } from './styles';

type CodeProps = {
  /* The content of the inline code sample. */
  children: React.ReactNode;
  /* The element used to render this component. */
  /* @default code */
  as?: 'code' | 'pre';
  /* Defines the font size of the code sample. In general should be specified only when used as a stand-alone element. */
  /* @default inherit */
  size?: 'small' | 'medium' | 'large' | 'inherit';
  /* Sets the style of the inline code sample suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLElement>;

function Code({
  as,
  size = 'inherit',
  inverted = false,
  ...restProps
}: CodeProps) {
  const Element = as || 'code';

  return <Element css={codeStyle({ size, inverted })} {...restProps} />;
}

export default Code;
