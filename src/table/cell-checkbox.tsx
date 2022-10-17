import React from 'react';

import { Checkbox } from '../checkbox';

import { headCellCheckboxStyle } from './styles';

type CellCheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

function CellCheckbox(props: CellCheckboxProps) {
  return (
    <td css={headCellCheckboxStyle()}>
      <Checkbox {...props} aria-label="Select" />
    </td>
  );
}

export default CellCheckbox;
