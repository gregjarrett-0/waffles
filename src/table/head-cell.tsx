import React, { cloneElement } from 'react';
import { useFocusRing } from '@react-aria/focus';

import { Sort, SortAscending, SortDescending } from '../icon';

import {
  headCellStyle,
  headCellSortButtonStyle,
  headCellWithIconStyle,
} from './styles';

type HeadCellProps = {
  /* Show appropriate sort icon, and sets `aria-sort` attribute. Actual sorting action should be handled via regular `onClick`. */
  /* @default none */
  sort?: 'ascending' | 'descending' | 'indeterminate' | 'none';
  /* An icon displayed to the right of the label. Could be any [Icon](/components/icon) from Waffles or a custom component. */
  icon?: JSX.Element;
  /* [skip docs] */
  onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<React.HTMLAttributes<HTMLTableCellElement>, 'onClick'>;

function HeadCell({
  sort = 'none',
  icon,
  onClick,
  children,
  ...restProps
}: HeadCellProps) {
  const { focusProps, isFocusVisible } = useFocusRing();
  const isSortable = sort !== 'none';

  function renderIcon() {
    if (sort === 'ascending') {
      return <SortAscending data-testid="sort-ascending-icon" />;
    }

    if (sort === 'descending') {
      return <SortDescending data-testid="sort-descending-icon" />;
    }

    if (sort === 'indeterminate') {
      return <Sort data-testid="sort-icon" />;
    }

    if (icon) {
      return icon.props.size ? icon : cloneElement(icon, { size: 'xsmall' });
    }

    return null;
  }

  function renderContent() {
    return (
      <>
        {children}
        {renderIcon()}
      </>
    );
  }

  // Depending on whether column is sortable or not, to avoid firing onClick handler twice, pass it only to button or table cell
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
          {renderContent()}
        </button>
      ) : icon ? (
        <span css={headCellWithIconStyle()}>{renderContent()}</span>
      ) : (
        renderContent()
      )}
    </th>
  );
}

export default HeadCell;
