import React from 'react';
import { FloatingOverlay } from '@floating-ui/react-dom-interactions';

import { overlayStyle } from './styles';

type OverlayProps = {
  isVisible: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Overlay({ isVisible, ...restProps }: OverlayProps) {
  return <FloatingOverlay {...restProps} css={overlayStyle({ isVisible })} />;
}

export default Overlay;
