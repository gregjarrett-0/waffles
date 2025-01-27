import { useEffect, useRef } from 'react';

import { ScreenReaderOnly } from '../screen-reader-only';
import { Button } from '../button';

import { pageButtonStyle } from './styles';
import { TRUNCATION_SYMBOL } from './constants';

type PageProps = {
  label: string;
  isActive: boolean;
  inverted: boolean;
  isFocusVisible: boolean;
  onClick: (newPage: number) => void;
};

function Page({
  label,
  isActive,
  inverted,
  isFocusVisible,
  onClick,
  ...restProps
}: PageProps) {
  const pageRef = useRef<HTMLButtonElement>(null);
  const isTruncation = label === TRUNCATION_SYMBOL;

  useEffect(() => {
    // Handle maintaining focus on page change when navigating with a keyboard
    if (isActive && pageRef.current && isFocusVisible) {
      setTimeout(() => {
        pageRef.current?.focus();
      }, 50);
    }
  }, [pageRef, isActive, isFocusVisible]);

  return (
    <li {...restProps}>
      <Button
        css={pageButtonStyle({ isActive, inverted })}
        variant="plain"
        inverted={inverted}
        disabled={label === TRUNCATION_SYMBOL}
        onClick={() => !isTruncation && onClick(+label)}
        {...(isActive && { 'aria-current': 'page', ref: pageRef })}
        {...(isTruncation && { 'aria-hidden': true })}
        data-testid="pagination-page"
      >
        {!isTruncation && <ScreenReaderOnly>Page</ScreenReaderOnly>}
        {label}
      </Button>
    </li>
  );
}

export default Page;
