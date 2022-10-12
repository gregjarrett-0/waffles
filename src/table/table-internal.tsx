import React, { useRef } from 'react';
import { useFocusRing } from '@react-aria/focus';

import useScrollPosition from './use-scroll-position';
import useIsScrollable from './use-is-scrollable';
import {
  outerWrapperStyle,
  maskStyle,
  shadowsStyle,
  tableWrapperStyle,
  tableStyle,
} from './styles';

type TableProps = {
  inverted?: boolean;
  'aria-label': string;
} & React.HTMLAttributes<HTMLTableElement>;

function TableInternal({
  inverted = false,
  'aria-label': ariaLabel,
  ...restProps
}: TableProps) {
  const { focusProps, isFocusVisible } = useFocusRing();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const isScrollable = useIsScrollable(wrapperRef, tableRef);
  const { isAtLeft, isAtRight } = useScrollPosition(wrapperRef);
  const hasShadowLeft = !isAtLeft;
  const hasShadowRight = !isAtRight;

  return (
    <div
      css={outerWrapperStyle({
        isFocusVisible: isFocusVisible && isScrollable,
        hasShadowLeft,
        hasShadowRight,
      })}
    >
      <div css={maskStyle({ hasShadowLeft, hasShadowRight })}>
        <div
          css={shadowsStyle({
            inverted,
            hasShadowLeft,
            hasShadowRight,
          })}
        />
        <div
          {...focusProps}
          tabIndex={isScrollable ? 0 : -1}
          ref={wrapperRef}
          role="region"
          aria-label={ariaLabel}
          css={tableWrapperStyle()}
        >
          <table
            {...restProps}
            ref={tableRef}
            css={tableStyle({ inverted, hasShadowLeft, hasShadowRight })}
          />
        </div>
      </div>
    </div>
  );
}

export default TableInternal;
