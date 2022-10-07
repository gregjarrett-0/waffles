import React from 'react';

type RowProps = React.HTMLAttributes<HTMLTableRowElement>;

function Row(props: RowProps) {
  return <tr {...props} />;
}

export default Row;
