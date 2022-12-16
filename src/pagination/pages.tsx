import { useEffect, useState } from 'react';

import { useMediaQuery } from '../hooks';

import { pagesWrapperStyle } from './styles';
import Pagination from './pagination';
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
  clickHandler: NonNullable<
    React.ComponentProps<typeof Pagination>['onChange']
  >;
};

function Pages({
  totalPages,
  currentPage,
  inverted,
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
      // Has no truncateLeft
      if (!truncateLeft) {
        return 2;
      }

      // Has truncateLeft but not truncateRight
      if (!truncateRight) {
        return totalPages - visiblePageLimit + 3;
      }

      // Has both truncateLeft and truncateRight
      return isAboveSmall ? currentPage - 1 : currentPage;
    }

    function getMiddleEnd(
      truncateLeft: boolean,
      truncateRight: boolean,
    ): number {
      // Has no truncateRight
      if (!truncateRight) {
        return totalPages - 1;

        // Has truncateRight but not truncateLeft
      } else if (!truncateLeft) {
        return visiblePageLimit - 2;
      }

      // Has both truncateLeft and truncateRight
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

      const middleStartValue = getMiddleStart(truncateLeft, truncateRight);
      const middleEndValue = getMiddleEnd(truncateLeft, truncateRight);

      // Add truncation to the left if applicable
      if (truncateLeft) {
        visiblePages.push(TRUNCATION_SYMBOL);
      }

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
    <div css={pagesWrapperStyle()}>
      {pages.map((pageLabel, index) => {
        return (
          <Page
            key={index}
            label={pageLabel}
            isActive={pageLabel === currentPage.toString()}
            inverted={inverted}
            clickHandler={clickHandler}
          />
        );
      })}
    </div>
  );
}

export default Pages;
