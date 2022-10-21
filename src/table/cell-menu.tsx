import React from 'react';

import { tokens } from '../tokens';
import { Menu } from '../menu';

import { useTable } from './table-context';
import { cellStyle } from './styles';
import MenuTrigger from './cell-menu-trigger';

type CellProps = {
  /* Menu trigger label. */
  label: string;
  /* Content of the Menu, either `Table.CellMenuCategory` or custom components. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLTableCellElement>;

function CellMenu({ label, children, ...restProps }: CellProps) {
  const { inverted } = useTable();

  return (
    <td {...restProps} css={cellStyle()}>
      <Menu
        trigger={<MenuTrigger label={label} inverted={inverted} />}
        offset={tokens.spacing.xsmall}
        inverted={inverted}
      >
        {children}
      </Menu>
    </td>
  );
}

export default CellMenu;
