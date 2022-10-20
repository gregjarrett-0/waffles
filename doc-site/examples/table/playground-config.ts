import { Table } from '@datacamp/waffles/table';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Table } from '@datacamp/waffles/table';

function Playground() {
  return (
    <Table aria-label="Programming languages overview">
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Language</Table.HeadCell>
          <Table.HeadCell>Invented at</Table.HeadCell>
          <Table.HeadCell>Complexity</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Python</Table.Cell>
          <Table.Cell>1991</Table.Cell>
          <Table.Cell>4</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>JavaScript</Table.Cell>
          <Table.Cell>1995</Table.Cell>
          <Table.Cell>5</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rust</Table.Cell>
          <Table.Cell>2014</Table.Cell>
          <Table.Cell>8</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Table,
  },
};

export default playgroundConfig;
