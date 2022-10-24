import { useState, useEffect } from 'react';

// Determine if scroll is at the left or right of the container
function useScrollPosition(targetRef: React.RefObject<HTMLElement>) {
  const [isAtLeft, setIsAtLeft] = useState(false);
  const [isAtRight, setIsAtRight] = useState(false);

  useEffect(() => {
    const element = targetRef.current;

    function setPositionFlags() {
      if (element) {
        setIsAtLeft(element.scrollLeft === 0);
        // Leave some wiggle room to take into account differences in calculations between browsers
        setIsAtRight(
          Math.ceil(element.scrollWidth - element.scrollLeft) -
            element.clientWidth <
            2,
        );
      }
    }

    setPositionFlags();

    if (element) {
      element.addEventListener('scroll', setPositionFlags);
      window.addEventListener('resize', setPositionFlags);
    }

    return () => {
      element?.removeEventListener('scroll', setPositionFlags);
      window.removeEventListener('resize', setPositionFlags);
    };
  }, [targetRef]);

  return { isAtLeft, isAtRight };
}

export default useScrollPosition;
