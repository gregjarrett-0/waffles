import React from 'react';

import { Checkbox } from '../checkbox';

import { useTable } from './table-context';
import { headCellCheckboxStyle } from './styles';

type CellCheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

function CellCheckbox(props: CellCheckboxProps) {
  const { inverted } = useTable();

  return (
    <td css={headCellCheckboxStyle()}>
      <Checkbox {...props} inverted={inverted} aria-label="Select" />
    </td>
  );
}

export default CellCheckbox;
