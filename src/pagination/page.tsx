import { Button } from '../button';

import { pageButtonStyle } from './styles';
import Pagination from './pagination';
import { TRUNCATION_SYMBOL } from './constants';

type PageProps = {
  label: string | number;
  isActive: boolean;
  inverted: boolean;
  clickHandler: NonNullable<
    React.ComponentProps<typeof Pagination>['onChange']
  >;
};

function Page({
  label,
  isActive,
  inverted,
  clickHandler,
  ...restProps
}: PageProps) {
  return (
    <Button
      css={pageButtonStyle({ isActive, inverted })}
      variant="plain"
      inverted={inverted}
      disabled={label === TRUNCATION_SYMBOL}
      onClick={() => typeof label === 'number' && clickHandler(label)}
      {...(isActive && { 'aria-current': 'page' })}
      {...restProps}
    >
      {label}
    </Button>
  );
}

export default Page;
