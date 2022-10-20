import { css } from '@emotion/react';
import { Table } from '@datacamp/waffles/table';

function Example() {
  return (
    <Table inverted aria-label="Programming languages overview">
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
          <Table.Cell>Julia</Table.Cell>
          <Table.Cell>2009</Table.Cell>
          <Table.Cell>
            Provides asynchronous I/O, metaprogramming, debugging, logging,
            profiling, and package manager.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>R</Table.Cell>
          <Table.Cell>1993</Table.Cell>
          <Table.Cell>
            A programming language for statistical computing and graphics.
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default Example;
