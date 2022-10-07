import React from 'react';

import { columnStyle } from './styles';

type HeadCellProps = React.HTMLAttributes<HTMLTableCellElement>;

function HeadCell(props: HeadCellProps) {
  return <th {...props} css={columnStyle()} />;
}

export default HeadCell;
