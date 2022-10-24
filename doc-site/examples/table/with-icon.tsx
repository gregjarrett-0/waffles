import { Table } from '@datacamp/waffles/table';
import { Heart } from '@datacamp/waffles/icon';

function Example() {
  return (
    <Table aria-label="Programming languages overview">
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Language</Table.HeadCell>
          <Table.HeadCell>Invented at</Table.HeadCell>
          <Table.HeadCell icon={<Heart />}>Likes</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Python</Table.Cell>
          <Table.Cell>1991</Table.Cell>
          <Table.Cell>42</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>JavaScript</Table.Cell>
          <Table.Cell>1995</Table.Cell>
          <Table.Cell>144</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rust</Table.Cell>
          <Table.Cell>2014</Table.Cell>
          <Table.Cell>15</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default Example;
