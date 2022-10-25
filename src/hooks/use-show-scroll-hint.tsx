import React, { useState, useEffect } from 'react';

const orientationMap = {
  horizontal: {
    dimension: 'offsetWidth',
    scrollDimension: 'scrollWidth',
    scroll: 'scrollLeft',
  },
  vertical: {
    dimension: 'offsetHeight',
    scrollDimension: 'scrollHeight',
    scroll: 'scrollTop',
  },
} as const;

/**
 * Occasionally for better user experience there is a need to hint that container is scrollable. Container should have `overflow: auto` or `overflow: scroll` specified via CSS.
 *
 * Depending on `orientation` and based on scroll position, show shadows or gradient masks at the appropriate positions.
 *
 * @param wrapperRef Ref of scrollable wrapper element
 * @param orientation Whether to show hints to the left and right or top and bottom, either `horizontal` or `vertical`
 * @returns Object of boolean values with `showStartHint`, and `showEndHint` entries
 */
function useShowScrollHint(
  wrapperRef: React.RefObject<HTMLElement>,
  orientation: 'horizontal' | 'vertical' = 'horizontal',
) {
  const [showStartHint, setShowStartHint] = useState(false);
  const [showEndHint, setShowEndHint] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    function handleShowHints() {
      if (wrapper) {
        setShowStartHint(wrapper[orientationMap[orientation].scroll] > 0);
        // Because of differences between browsers, bottom or right positions are close approximation
        // Leave some wiggle room to take into account differences in calculations
        setShowEndHint(
          Math.ceil(
            wrapper[orientationMap[orientation].scrollDimension] -
              wrapper[orientationMap[orientation].scroll],
          ) -
            wrapper[orientationMap[orientation].dimension] >
            2,
        );
      }
    }

    handleShowHints();

    wrapper?.addEventListener('scroll', handleShowHints);
    window.addEventListener('resize', handleShowHints);

    return () => {
      wrapper?.removeEventListener('scroll', handleShowHints);
      window.removeEventListener('resize', handleShowHints);
    };
  }, [wrapperRef, orientation]);

  return { showStartHint, showEndHint };
}

export default useShowScrollHint;
