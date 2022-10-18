import { Menu } from '../menu';

import TableInternal from './table-internal';
import Row from './row';
import HeadCellCheckbox from './head-cell-checkbox';
import HeadCell from './head-cell';
import Head from './head';
import CellMenu from './cell-menu';
import CellCheckbox from './cell-checkbox';
import Cell from './cell';
import Body from './body';

const TableNamespace = Object.assign(TableInternal, {
  Row,
  Head,
  HeadCell,
  HeadCellCheckbox,
  Body,
  Cell,
  CellCheckbox,
  CellMenu,
  CellMenuCategory: Menu.Category,
  CellMenuItem: Menu.Item,
});

export default TableNamespace;
