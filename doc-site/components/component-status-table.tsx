import React from 'react';
import { Table } from '@datacamp/waffles/table';

type ComponentStatusTableProps = {
  children: React.ReactNode;
};

function ComponentStatusTable({ children }: ComponentStatusTableProps) {
  return (
    <Table aria-label="Components overview">
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>React</Table.HeadCell>
          <Table.HeadCell>Figma</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{children}</Table.Body>
    </Table>
  );
}

export default ComponentStatusTable;
