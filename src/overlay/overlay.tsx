import React from 'react';
import { FloatingOverlay } from '@floating-ui/react';

import { overlayStyle } from './styles';

type OverlayProps = {
  isVisible: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Overlay({ isVisible, ...restProps }: OverlayProps) {
  return (
    <FloatingOverlay
      lockScroll
      {...restProps}
      css={overlayStyle({ isVisible })}
    />
  );
}

export default Overlay;
