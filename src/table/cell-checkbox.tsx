import React from 'react';

import { Checkbox } from '../checkbox';

import { useTable } from './table-context';
import { headCellCheckboxStyle } from './styles';

type CellCheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'children'
>;

function CellCheckbox({
  'aria-label': ariaLabel = 'Select',
  ...restProps
}: CellCheckboxProps) {
  const { inverted } = useTable();

  return (
    <td css={headCellCheckboxStyle()}>
      <Checkbox {...restProps} inverted={inverted} aria-label={ariaLabel} />
    </td>
  );
}

export default CellCheckbox;
