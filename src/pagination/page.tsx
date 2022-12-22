import React, { forwardRef } from 'react';

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

function PageInternal(
  { label, isActive, inverted, clickHandler, ...restProps }: PageProps,
  ref?: React.Ref<HTMLButtonElement>,
) {
  const isTruncation = label === TRUNCATION_SYMBOL;

  return (
    <li {...restProps}>
      <Button
        css={pageButtonStyle({ isActive, inverted })}
        variant="plain"
        inverted={inverted}
        disabled={label === TRUNCATION_SYMBOL}
        onClick={() => !isTruncation && clickHandler(+label)}
        {...(isActive && { 'aria-current': 'page', ref: ref })}
        {...(isTruncation && { 'aria-hidden': true })}
        data-testid="pagination-page"
      >
        {!isTruncation && <ScreenReaderOnly>Page</ScreenReaderOnly>}
        {label}
      </Button>
    </li>
  );
}

const Page = forwardRef(PageInternal);

export default Page;
