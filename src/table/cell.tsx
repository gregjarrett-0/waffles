import React from 'react';

import { cellStyle } from './styles';

type CellProps = React.HTMLAttributes<HTMLTableCellElement>;

function Cell(props: CellProps) {
  return <td {...props} css={cellStyle()} />;
}

export default Cell;
