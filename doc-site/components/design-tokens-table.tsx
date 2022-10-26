import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Table } from '@datacamp/waffles/table';

import DesignTokenExample from './design-token-example';

const nameStyle = css`
  width: 40%;
`;

type DesignTokensTableProps = {
  tokensGroup: keyof typeof tokens;
};

function DesignTokensTable({ tokensGroup }: DesignTokensTableProps) {
  return (
    <Table aria-label="Design tokens examples">
      <Table.Head>
        <Table.Row>
          <Table.HeadCell css={nameStyle}>Name</Table.HeadCell>
          <Table.HeadCell>Value</Table.HeadCell>
          <Table.HeadCell>Example</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {Object.entries(tokens[tokensGroup]).map((entry) => {
          const [name, value] = entry;

          return (
            <Table.Row key={`color-${name}`}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{value}</Table.Cell>
              <DesignTokenExample tokensGroup={tokensGroup} value={value} />
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default DesignTokensTable;
