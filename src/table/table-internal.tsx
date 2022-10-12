import React, { useRef } from 'react';
import { useFocusRing } from '@react-aria/focus';

import useScrollPosition from './use-scroll-position';
import {
  outerWrapperStyle,
  tableWrapperStyle,
  tableStyle,
  shadowsStyle,
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
  const { isAtLeft, isAtRight } = useScrollPosition(wrapperRef);
  const hasShadowLeft = !isAtLeft;
  const hasShadowRight = !isAtRight;

  return (
    <div css={outerWrapperStyle({ hasShadowLeft, hasShadowRight })}>
      <div
        css={shadowsStyle({
          inverted,
          hasShadowLeft,
          hasShadowRight,
        })}
      />
      <div
        {...focusProps}
        ref={wrapperRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        css={tableWrapperStyle({
          isFocusVisible,
          hasShadowLeft,
          hasShadowRight,
        })}
      >
        <table
          {...restProps}
          css={tableStyle({ inverted, hasShadowLeft, hasShadowRight })}
        />
      </div>
    </div>
  );
}

export default TableInternal;
