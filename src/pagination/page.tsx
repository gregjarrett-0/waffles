import { Button } from '../button';

import { pageButtonStyle } from './styles';
import { TRUNCATION_SYMBOL } from './constants';

type PageProps = {
  label: string;
  isActive: boolean;
  inverted: boolean;
  clickHandler: (newPage: number) => void;
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
      onClick={() => label !== TRUNCATION_SYMBOL && clickHandler(+label)}
      {...(isActive && { 'aria-current': 'page' })}
      {...restProps}
    >
      {label}
    </Button>
  );
}

export default Page;
