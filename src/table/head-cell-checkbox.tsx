import React from 'react';

import { Checkbox } from '../checkbox';

import { headCellCheckboxStyle } from './styles';

type HeadCellCheckboxProps = {
  isIndeterminate?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function HeadCellCheckbox(props: HeadCellCheckboxProps) {
  return (
    <th css={headCellCheckboxStyle()}>
      <Checkbox {...props} aria-label="Select all" />
    </th>
  );
}

export default HeadCellCheckbox;
