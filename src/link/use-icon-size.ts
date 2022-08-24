import { useState, useEffect } from 'react';

import { tokens } from '../tokens';

// Return size of the icon based on size of the text
// If the unit is other than px it defaults to medium size
function useIconSize(targetRef: React.RefObject<HTMLElement>) {
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');

  useEffect(() => {
    const element = targetRef.current;

    if (element) {
      const fontSize = window.getComputedStyle(element).fontSize;

      if (fontSize.match(/[0-9]+px/)) {
        if (parseInt(fontSize, 10) < parseInt(tokens.fontSizes.medium, 10)) {
          setSize('small');
        } else if (
          parseInt(fontSize, 10) > parseInt(tokens.fontSizes.xxlarge, 10)
        ) {
          setSize('large');
        }
      }
    }
  }, [targetRef]);

  return size;
}

export default useIconSize;
