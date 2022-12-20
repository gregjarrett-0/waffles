import { ScreenReaderOnly } from '../screen-reader-only';
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
  const isTruncation = label === TRUNCATION_SYMBOL;

  return (
    <li>
      <Button
        css={pageButtonStyle({ isActive, inverted })}
        variant="plain"
        inverted={inverted}
        disabled={label === TRUNCATION_SYMBOL}
        onClick={() => !isTruncation && clickHandler(+label)}
        {...(isActive && { 'aria-current': 'page' })}
        {...(isTruncation && { 'aria-hidden': true })}
        {...restProps}
      >
        {!isTruncation && <ScreenReaderOnly>Page</ScreenReaderOnly>}
        {label}
      </Button>
    </li>
  );
}

export default Page;
