import React from 'react';

import { Checkbox } from '../checkbox';

import { useTable } from './table-context';
import { headCellCheckboxStyle } from './styles';

type HeadCellCheckboxProps = {
  /* [skip-docs] */
  isIndeterminate?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'>;

function HeadCellCheckbox({
  'aria-label': ariaLabel = 'Select all',
  ...restProps
}: HeadCellCheckboxProps) {
  const { inverted } = useTable();

  return (
    <th css={headCellCheckboxStyle()}>
      <Checkbox {...restProps} inverted={inverted} aria-label={ariaLabel} />
    </th>
  );
}

export default HeadCellCheckbox;
