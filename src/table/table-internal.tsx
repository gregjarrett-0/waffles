import React, { useRef } from 'react';
import { useFocusRing } from '@react-aria/focus';

import useScrollPosition from './use-scroll-position';
import {
  outerWrapperStyle,
  tableWrapperStyle,
  tableStyle,
  shadowsStyle,
} from './styles';

type TableProps = React.HTMLAttributes<HTMLTableElement>;

function TableInternal(props: TableProps) {
  const { focusProps, isFocusVisible } = useFocusRing();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { isAtLeft, isAtRight } = useScrollPosition(wrapperRef);
  const hasShadowLeft = !isAtLeft;
  const hasShadowRight = !isAtRight;

  return (
    <div css={outerWrapperStyle()}>
      <div
        css={shadowsStyle({
          hasShadowLeft,
          hasShadowRight,
        })}
      />
      <div
        {...focusProps}
        ref={wrapperRef}
        role="region"
        aria-label="Some table"
        tabIndex={0}
        css={tableWrapperStyle({
          isFocusVisible,
          hasShadowLeft,
          hasShadowRight,
        })}
      >
        <table {...props} css={tableStyle({ hasShadowLeft, hasShadowRight })} />
      </div>
    </div>
  );
}

export default TableInternal;
