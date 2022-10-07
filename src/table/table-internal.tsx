import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { tableWrapperStyle, tableStyle } from './styles';

type TableProps = React.HTMLAttributes<HTMLTableElement>;

function TableInternal(props: TableProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      {...focusProps}
      role="region"
      aria-label="Some table"
      tabIndex={0}
      css={tableWrapperStyle({ isFocusVisible })}
    >
      <table {...props} css={tableStyle()} />
    </div>
  );
}

export default TableInternal;
