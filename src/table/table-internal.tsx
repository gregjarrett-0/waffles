import React from 'react';

import { tableStyle } from './styles';

type TableProps = React.HTMLAttributes<HTMLTableElement>;

function TableInternal(props: TableProps) {
  return <table {...props} css={tableStyle()} />;
}

export default TableInternal;
