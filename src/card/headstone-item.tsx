import { Avatar } from '../avatar';

type HeadstoneItemProps = {
  /* Content of the item. In general, pass Waffles [Logomark asset](/components/asset/#logomark-assets) or a string containing only one character. */
  content: JSX.Element | string;
  /* [skip docs] */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function HeadstoneItem({
  content,
  inverted = false,
  ...restProps
}: HeadstoneItemProps) {
  return (
    <Avatar
      {...restProps}
      size="medium"
      variant={inverted ? 'white' : 'navy'}
      content={content}
    />
  );
}

export default HeadstoneItem;
