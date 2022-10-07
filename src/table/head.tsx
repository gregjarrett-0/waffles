import React from 'react';

type RowProps = React.HTMLAttributes<HTMLTableSectionElement>;

function Head(props: RowProps) {
  return <thead {...props} />;
}

export default Head;
