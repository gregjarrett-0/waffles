import React from 'react';

import { headCellStyle } from './styles';

type HeadCellProps = React.HTMLAttributes<HTMLTableCellElement>;

function HeadCell(props: HeadCellProps) {
  return <th {...props} css={headCellStyle()} />;
}

export default HeadCell;
