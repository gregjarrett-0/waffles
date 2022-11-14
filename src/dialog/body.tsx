import React, { useRef } from 'react';

import { useShowScrollHint } from '../hooks';

import { bodyStyle } from './styles';
import { useDialog } from './dialog-context';

type BodyProps = {
  /* Dialog main content or description. When it is getting long, subtle scroll indicators appear at the top and bottom. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Body({ children, ...restProps }: BodyProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const {
    showStartHint: isShadowTopVisible,
    showEndHint: isShadowBottomVisible,
  } = useShowScrollHint(wrapperRef, 'vertical');

  const { bodyId } = useDialog();

  return (
    <div
      id={bodyId}
      ref={wrapperRef}
      css={bodyStyle({
        isShadowTopVisible,
        isShadowBottomVisible,
      })}
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Body;
