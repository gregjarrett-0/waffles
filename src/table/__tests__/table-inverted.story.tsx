/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Table } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  background-color: ${tokens.colors.navy};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Table inverted aria-label="Inverted table">
        <Table.Head>
          <Table.Row>
            <Table.HeadCellCheckbox isIndeterminate onChange={() => {}} />
            <Table.HeadCell sort="indeterminate" onSort={() => {}}>
              Technology
            </Table.HeadCell>
            <Table.HeadCell sort="ascending" onSort={() => {}}>
              Complexity
            </Table.HeadCell>
            <Table.HeadCell sort="descending" onSort={() => {}}>
              Invented at
            </Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.CellCheckbox checked onChange={() => {}} />
            <Table.Cell>Python</Table.Cell>
            <Table.CellMenu label="Easy">
              <Table.CellMenuCategory noDivider>
                <Table.CellMenuItem label="Easy" />
                <Table.CellMenuItem label="Medium" />
                <Table.CellMenuItem label="Hard" />
              </Table.CellMenuCategory>
            </Table.CellMenu>
            <Table.Cell>1991</Table.Cell>
            <Table.Cell>
              Lets you work quickly and integrate systems more effectively.
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellCheckbox checked onChange={() => {}} />
            <Table.Cell>JavaScript</Table.Cell>
            <Table.CellMenu label="Easy">
              <Table.CellMenuCategory noDivider>
                <Table.CellMenuItem label="Easy" />
                <Table.CellMenuItem label="Medium" />
                <Table.CellMenuItem label="Hard" />
              </Table.CellMenuCategory>
            </Table.CellMenu>
            <Table.Cell>1995</Table.Cell>
            <Table.Cell>
              One of the core technologies of the World Wide Web, alongside HTML
              and CSS.
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellCheckbox />
            <Table.Cell>Rust</Table.Cell>
            <Table.CellMenu label="Hard">
              <Table.CellMenuCategory noDivider>
                <Table.CellMenuItem label="Easy" />
                <Table.CellMenuItem label="Medium" />
                <Table.CellMenuItem label="Hard" />
              </Table.CellMenuCategory>
            </Table.CellMenu>
            <Table.Cell>2014</Table.Cell>
            <Table.Cell>
              Blazingly fast and memory-efficient: with no runtime or garbage
              collector.
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default Story;
