import { useState, useEffect } from 'react';

// Check whether wrapper is scrollable or not
function useIsScrollable(
  wrapperRef: React.RefObject<HTMLElement>,
  contentRef: React.RefObject<HTMLElement>,
) {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    function setFlag() {
      if (wrapper && content) {
        setIsScrollable(content.clientWidth > wrapper.clientWidth);
      }
    }

    setFlag();

    if (wrapper && content) {
      window.addEventListener('resize', setFlag);
    }

    return () => {
      window.removeEventListener('resize', setFlag);
    };
  }, [wrapperRef, contentRef]);

  return isScrollable;
}

export default useIsScrollable;
