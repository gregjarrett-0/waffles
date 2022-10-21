import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Table } from '@datacamp/waffles/table';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';
import { Code } from '@datacamp/waffles/code';
import { Chapeau } from '@datacamp/waffles/chapeau';

import convertedProps from '../helpers/converted-props';
import markdownElements from '../components/props-table-markdown-elements';

const POLYMORPHIC_METADATA = {
  name: 'as',
  description:
    'The element used to render this component, e.g. `a` or react router `Link`.',
  type: 'React.ElementType',
  isOptional: true,
};

const nameStyle = css`
  display: inline-block;
  white-space: normal;
  word-break: break-word;
  background-color: ${hexToRgba(tokens.colors.blue, tokens.opacity.low)};
`;

const descriptionCellStyle = css`
  width: 50%;
  min-width: 300px;
`;

const cellStyle = css`
  vertical-align: text-top;
`;

const defaultValueWrapperStyle = css`
  display: flex;
  align-items: baseline;
  padding-top: ${tokens.spacing.small};
`;

const defaultValueStyle = css`
  padding: 0 ${tokens.spacing.xsmall};
  height: 18px;
`;

const propTypeStyle = css`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${tokens.spacing.xsmall};
`;

const requiredMarkerStyle = css`
  display: inline-block;
  background-color: ${tokens.colors.red};
  margin-left: ${tokens.spacing.xsmall};
  width: 6px;
  height: 6px;
  border-radius: ${tokens.borderRadius.circle};
  flex-shrink: 0;
`;

type PropsTableProps = {
  metadata: Record<string, unknown>;
  isPolymorphic: boolean;
};

function PropsTable({ metadata, isPolymorphic = false }: PropsTableProps) {
  const propsMetadata = convertedProps(metadata);

  if (isPolymorphic) {
    propsMetadata.unshift(POLYMORPHIC_METADATA);
  }

  return (
    <ErrorBoundary>
      <Table aria-label="Props overview">
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell css={descriptionCellStyle}>
              Description
            </Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {propsMetadata.map((singleProp) => {
            return (
              <Table.Row key={`prop-${singleProp.name}`}>
                <Table.Cell css={cellStyle}>
                  <Code css={nameStyle}>{singleProp.name}</Code>
                  {!singleProp.isOptional && (
                    <span aria-label="Is required" css={requiredMarkerStyle} />
                  )}
                </Table.Cell>
                <Table.Cell css={cellStyle}>
                  <div css={propTypeStyle}>
                    {singleProp.type.split(' | ').map((type) => {
                      return <Code key={type}>{type}</Code>;
                    })}
                  </div>
                </Table.Cell>
                <Table.Cell css={cellStyle}>
                  {singleProp.description ? (
                    <ReactMarkdown components={markdownElements}>
                      {singleProp.description}
                    </ReactMarkdown>
                  ) : (
                    '—'
                  )}
                  {singleProp.defaultValue && (
                    <div css={defaultValueWrapperStyle}>
                      <Chapeau>Default:</Chapeau>
                      <Code css={defaultValueStyle}>
                        {singleProp.defaultValue}
                      </Code>
                    </div>
                  )}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </ErrorBoundary>
  );
}

export default PropsTable;
