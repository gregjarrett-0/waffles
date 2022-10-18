import React from 'react';

import { tokens } from '../tokens';
import { Menu } from '../menu';

import { cellStyle } from './styles';
import MenuTrigger from './cell-menu-trigger';

type CellProps = {
  label: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLTableCellElement>;

function CellMenu({ label, children, ...restProps }: CellProps) {
  return (
    <td {...restProps} css={cellStyle()}>
      <Menu
        trigger={<MenuTrigger label={label} />}
        offset={tokens.spacing.xsmall}
      >
        {children}
      </Menu>
    </td>
  );
}

export default CellMenu;
