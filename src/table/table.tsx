import TableInternal from './table-internal';
import Row from './row';
import HeadCell from './head-cell';
import Head from './head';
import Cell from './cell';
import Body from './body';

const TableNamespace = Object.assign(TableInternal, {
  Row,
  Head,
  HeadCell,
  Cell,
  Body,
});

export default TableNamespace;
