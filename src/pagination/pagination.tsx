import { useMediaQuery } from '../hooks';
import { logError } from '../helpers';

import { isValidPage } from './utils';
import { wrapperStyle } from './styles';
import Pages from './pages';
import Navigation from './navigation';
import { MESSAGES } from './debug-messages';

type NavigationVariant = 'previous' | 'next';

type PaginationProps = {
  /* Total number of pages. Must be greater than 0. */
  totalPages: number;
  /* Current active page. Must be between 1 and `totalPages`. */
  /* @default 1 */
  currentPage?: number;
  /* Sets the style of the Pagination suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
  /* Handler called every time the page should change. */
  onChange: (newPage: number) => void;
  /* Accessible label describing the context of the Pagination. */
  'aria-label': string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;

function Pagination({
  totalPages,
  currentPage = 1,
  inverted = false,
  onChange,
  ...restProps
}: PaginationProps) {
  const { isAboveSmall } = useMediaQuery();

  // Log console error if totalPages is less than 1
  !totalPages && logError(MESSAGES.INVALID_ACTIVE_PAGE);
  // Log console error if currentPage is invalid
  !isValidPage(currentPage, totalPages) &&
    logError(MESSAGES.INVALID_ACTIVE_PAGE);

  // Confirm whether provided page is valid, given the totalPage

  function clickHandler(newPage: number) {
    if (isValidPage(newPage, totalPages)) {
      onChange(newPage);
    }
  }

  function renderNavigationButton(navigationVariant: NavigationVariant) {
    const disabled =
      (navigationVariant === 'previous' && currentPage === 1) ||
      (navigationVariant === 'next' && currentPage === totalPages);

    return (
      <Navigation
        {...{
          navigationVariant,
          currentPage,
          inverted,
          disabled,
          clickHandler,
        }}
      />
    );
  }

  return (
    <nav {...restProps}>
      <ul css={wrapperStyle({ isAboveSmall })}>
        {renderNavigationButton('previous')}
        {totalPages && (
          <Pages {...{ totalPages, currentPage, inverted, clickHandler }} />
        )}
        {renderNavigationButton('next')}
      </ul>
    </nav>
  );
}

export default Pagination;
