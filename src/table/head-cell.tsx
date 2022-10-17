import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { Sort, SortAscending, SortDescending } from '../icon';

import { headCellStyle, headCellSortButtonStyle } from './styles';

type HeadCellProps = {
  sort?: 'ascending' | 'descending' | 'indeterminate' | 'none';
  onSort?: React.MouseEventHandler<HTMLButtonElement>;
} & React.HTMLAttributes<HTMLTableCellElement>;

function HeadCell({
  sort = 'none',
  onSort,
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

  return (
    <th
      {...restProps}
      {...(sort !== 'none' &&
        sort !== 'indeterminate' && { 'aria-sort': sort })}
      css={headCellStyle({ isSortable })}
    >
      {isSortable ? (
        <button
          {...focusProps}
          onClick={onSort}
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
