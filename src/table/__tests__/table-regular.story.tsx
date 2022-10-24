/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Table } from '../index';
import { tokens } from '../../tokens';
import { Heart } from '../../icon';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Table aria-label="Regular table">
        <Table.Head>
          <Table.Row>
            <Table.HeadCellCheckbox isIndeterminate onChange={() => {}} />
            <Table.HeadCell sort="indeterminate" onClick={() => {}}>
              Technology
            </Table.HeadCell>
            <Table.HeadCell
              sort="ascending"
              onClick={() => {}}
              css={css`
                min-width: 160px;
              `}
            >
              Complexity
            </Table.HeadCell>
            <Table.HeadCell
              sort="descending"
              onClick={() => {}}
              css={css`
                min-width: 160px;
              `}
            >
              Invented at
            </Table.HeadCell>
            <Table.HeadCell
              icon={<Heart />}
              css={css`
                min-width: 100px;
              `}
            >
              Likes
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
            <Table.Cell>42</Table.Cell>
            <Table.Cell>
              A programming language that lets you work quickly and integrate
              systems more effectively.
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
            <Table.Cell>142</Table.Cell>
            <Table.Cell>
              A programming language that is one of the core technologies of the
              World Wide Web, alongside HTML and CSS.
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
            <Table.Cell>6</Table.Cell>
            <Table.Cell>
              Rust is blazingly fast and memory-efficient: with no runtime or
              garbage collector.
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default Story;
