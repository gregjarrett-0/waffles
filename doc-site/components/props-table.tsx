import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';
import { Code } from '@datacamp/waffles/code';
import { Badge } from '@datacamp/waffles/badge';

import convertedProps from '../helpers/converted-props';
import markdownElements from '../components/props-table-markdown-elements';

import Table from './table';

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
  padding: 2px;
  background-color: ${hexToRgba(tokens.colors.blue, tokens.opacity.low)};
`;

const descriptionStyle = css`
  width: 50%;
`;

const defaultValueWrapperStyle = css`
  display: flex;
  padding-top: ${tokens.spacing.small};
`;

const defaultValueBadgeStyle = css`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const defaultValueStyle = css`
  margin-left: 0;
  padding: 0 ${tokens.spacing.xsmall};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
      <Table>
        <thead>
          <tr>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell css={descriptionStyle}>Description</Table.HeadCell>
          </tr>
        </thead>
        <tbody>
          {propsMetadata.map((singleProp) => {
            return (
              <tr key={`prop-${singleProp.name}`}>
                <Table.Cell>
                  <Code css={nameStyle}>{singleProp.name}</Code>
                  {!singleProp.isOptional && (
                    <span aria-label="Is required" css={requiredMarkerStyle} />
                  )}
                </Table.Cell>
                <Table.Cell>
                  <div css={propTypeStyle}>
                    {singleProp.type.split(' | ').map((type) => {
                      return <Code key={type}>{type}</Code>;
                    })}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  {singleProp.description ? (
                    <ReactMarkdown components={markdownElements}>
                      {singleProp.description}
                    </ReactMarkdown>
                  ) : (
                    '—'
                  )}
                  {singleProp.defaultValue && (
                    <div css={defaultValueWrapperStyle}>
                      <Badge css={defaultValueBadgeStyle} variant="grey">
                        Default
                      </Badge>
                      <Code css={defaultValueStyle}>
                        {singleProp.defaultValue}
                      </Code>
                    </div>
                  )}
                </Table.Cell>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </ErrorBoundary>
  );
}

export default PropsTable;
