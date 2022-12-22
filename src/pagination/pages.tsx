import { useEffect, useState } from 'react';

import { useMediaQuery } from '../hooks';

import Page from './page';
import {
  MOBILE_VISIBLE_PAGES_LIMIT,
  TRUNCATION_SYMBOL,
  VISIBLE_PAGES_LIMIT,
} from './constants';

type PagesProps = {
  totalPages: number;
  currentPage: number;
  inverted: boolean;
  activePageRef: React.RefObject<HTMLButtonElement>;
  clickHandler: (newPage: number) => void;
};

function Pages({
  totalPages,
  currentPage,
  inverted,
  activePageRef,
  clickHandler,
}: PagesProps) {
  const { isAboveSmall } = useMediaQuery();
  const visiblePageLimit = isAboveSmall
    ? VISIBLE_PAGES_LIMIT
    : MOBILE_VISIBLE_PAGES_LIMIT;
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    const visiblePages: string[] = [];

    function getMiddleStart(truncateLeft: boolean, truncateRight: boolean) {
      // Does not have truncation on left
      if (!truncateLeft) {
        return 2;
      }

      // Has truncation on left, but not on right
      if (!truncateRight) {
        return totalPages - visiblePageLimit + 3;
      }

      // Has truncation on both sides
      return isAboveSmall ? currentPage - 1 : currentPage;
    }

    function getMiddleEnd(
      truncateLeft: boolean,
      truncateRight: boolean,
    ): number {
      // Does not have truncation on right
      if (!truncateRight) {
        return totalPages - 1;

        // Has truncation on right, but not on left
      } else if (!truncateLeft) {
        return visiblePageLimit - 2;
      }

      // Has truncation on both sides
      return isAboveSmall ? currentPage + 1 : currentPage;
    }

    // Always add page one, since there will always be at least one page.
    visiblePages.push('1');

    if (totalPages > 1) {
      // If the totalPages exceeds the visiblePageLimit, then calculate whether to truncate the left, right or both.
      const truncateLeft =
        totalPages > visiblePageLimit &&
        currentPage > Math.floor(visiblePageLimit / 2) + (visiblePageLimit % 2);
      const truncateRight =
        totalPages > visiblePageLimit &&
        totalPages - currentPage >=
          Math.floor(visiblePageLimit / 2) + (visiblePageLimit % 2);

      // Calculate start and end for middle values
      const middleStartValue = getMiddleStart(truncateLeft, truncateRight);
      const middleEndValue = getMiddleEnd(truncateLeft, truncateRight);

      // Add truncation to the left if applicable
      if (truncateLeft) {
        visiblePages.push(TRUNCATION_SYMBOL);
      }

      // Populate middle values
      Array.from(Array(middleEndValue - middleStartValue + 1).keys()).map(
        (value: number) =>
          visiblePages.push((middleStartValue + value).toString()),
      );

      // Add truncation to the right if applicable
      if (truncateRight) {
        visiblePages.push(TRUNCATION_SYMBOL);
      }

      // Always add last item
      visiblePages.push(totalPages.toString());
    }

    setPages(visiblePages);
  }, [currentPage, isAboveSmall, totalPages, visiblePageLimit]);

  return (
    <>
      {pages.map((pageLabel, index) => {
        return (
          <Page
            key={index}
            label={pageLabel}
            isActive={pageLabel === currentPage.toString()}
            inverted={inverted}
            ref={activePageRef}
            clickHandler={clickHandler}
          />
        );
      })}
    </>
  );
}

export default Pages;
