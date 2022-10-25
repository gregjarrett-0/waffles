import React, { useRef } from 'react';

import { useShowScrollHint } from '../hooks';

import { tabListStyle, tabsWrapper } from './styles';

type TabListProps = {
  inverted: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function TabList({ inverted, children, ...restProps }: TabListProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const {
    showStartHint: isLeftGradientMaskVisible,
    showEndHint: isRightGradientMaskVisible,
  } = useShowScrollHint(wrapperRef);

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      css={tabListStyle({
        isLeftGradientMaskVisible,
        isRightGradientMaskVisible,
      })}
      ref={wrapperRef}
    >
      <div {...restProps} css={tabsWrapper({ inverted })}>
        {children}
      </div>
    </div>
  );
}

export default TabList;
