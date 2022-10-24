import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { Sort, SortAscending, SortDescending } from '../icon';

import { headCellStyle, headCellSortButtonStyle } from './styles';

type HeadCellProps = {
  /* Show appropriate sort icon, and sets `aria-sort` attribute. Actual sorting action should be handled via regular `onClick`. */
  sort?: 'ascending' | 'descending' | 'indeterminate' | 'none';
  /* [skip docs] */
  onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<React.HTMLAttributes<HTMLTableCellElement>, 'onClick'>;

function HeadCell({
  sort = 'none',
  onClick,
  children,
  ...restProps
}: HeadCellProps) {
  const { focusProps, isFocusVisible } = useFocusRing();
  const isSortable = sort !== 'none';

  function renderIcon() {
    switch (sort) {
      case 'ascending':
        return <SortAscending />;
      case 'descending':
        return <SortDescending />;
      case 'indeterminate':
        return <Sort />;
      default:
        return null;
    }
  }

  // Depending on whether cell is sortable or not, to avoid firing onClick handler twice, pass it only to button or table cell
  return (
    <th
      {...restProps}
      {...(sort !== 'none' &&
        sort !== 'indeterminate' && { 'aria-sort': sort })}
      {...(!isSortable && { onClick })}
      css={headCellStyle({ isSortable })}
    >
      {isSortable ? (
        <button
          {...focusProps}
          onClick={onClick}
          css={headCellSortButtonStyle({ isFocusVisible })}
        >
          {children}
          {renderIcon()}
        </button>
      ) : (
        children
      )}
    </th>
  );
}

export default HeadCell;
