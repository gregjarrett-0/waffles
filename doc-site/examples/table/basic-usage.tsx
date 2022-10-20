import { css } from '@emotion/react';
import { Table } from '@datacamp/waffles/table';

function Example() {
  return (
    <Table aria-label="Programming languages overview">
      <Table.Head>
        <Table.Row>
          <Table.HeadCell
            css={css`
              min-width: 160px;
            `}
          >
            Language
          </Table.HeadCell>
          <Table.HeadCell
            css={css`
              min-width: 160px;
            `}
          >
            Invented at
          </Table.HeadCell>
          <Table.HeadCell
            css={css`
              min-width: 300px;
            `}
          >
            Description
          </Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Python</Table.Cell>
          <Table.Cell>1991</Table.Cell>
          <Table.Cell>
            A programming language that lets you work quickly and integrate
            systems more effectively.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>JavaScript</Table.Cell>
          <Table.Cell>1995</Table.Cell>
          <Table.Cell>
            A programming language that is one of the core technologies of the
            World Wide Web, alongside HTML and CSS.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rust</Table.Cell>
          <Table.Cell>2014</Table.Cell>
          <Table.Cell>
            Rust is blazingly fast and memory-efficient: with no runtime or
            garbage collector.
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default Example;
