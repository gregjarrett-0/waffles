import React, { useRef } from 'react';
import { useFocusRing } from '@react-aria/focus';

import useScrollPosition from './use-scroll-position';
import useIsScrollable from './use-is-scrollable';
import { TableProvider } from './table-context';
import {
  outerWrapperStyle,
  maskStyle,
  shadowsStyle,
  tableWrapperStyle,
  tableStyle,
} from './styles';

type TableProps = {
  /* Sets the style of the Table and all subcomponents suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Accessible label, should always be provided with context of the Table, e.g. "Available technologies". */
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
    <TableProvider inverted={inverted}>
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
    </TableProvider>
  );
}

export default TableInternal;
