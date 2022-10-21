import React from 'react';

import { Checkbox } from '../checkbox';

import { useTable } from './table-context';
import { headCellCheckboxStyle } from './styles';

type HeadCellCheckboxProps = {
  /* [skip-docs] */
  isIndeterminate?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function HeadCellCheckbox(props: HeadCellCheckboxProps) {
  const { inverted } = useTable();

  return (
    <th css={headCellCheckboxStyle()}>
      <Checkbox {...props} inverted={inverted} aria-label="Select all" />
    </th>
  );
}

export default HeadCellCheckbox;
