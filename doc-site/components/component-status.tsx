import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Table } from '@datacamp/waffles/table';
import { ScreenReaderOnly } from '@datacamp/waffles/screen-reader-only';
import { ExternalLink } from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

const buttonStyle = css`
  margin-left: -10px;
`;

const textStyle = css`
  display: inline-flex;
  height: ${tokens.sizing.small};
  font-size: ${tokens.fontSizes.small};
  align-items: center;
  color: ${tokens.colors.navySubtleTextOnLight};
  user-select: none;
`;

const markerStyle = css`
  width: 8px;
  height: 8px;
  border-radius: ${tokens.borderRadius.circle};
`;

const availableMarkerStyle = css`
  background-color: ${tokens.colors.green};
`;

const unavailableMarkerStyle = css`
  margin-right: ${tokens.spacing.small};
  background-color: ${tokens.colors.red};
`;

type AvailableStatusProps = {
  href: string;
  external?: boolean;
};

function AvailableStatus({ href, external = false }: AvailableStatusProps) {
  return (
    <Button
      as="a"
      href={href}
      variant="plain"
      size="small"
      iconLeft={<span css={[markerStyle, availableMarkerStyle]} />}
      {...(external && {
        iconRight: <ExternalLink />,
        target: '_blank',
        rel: 'noopener',
      })}
      css={buttonStyle}
    >
      Available
      {external && <ScreenReaderOnly> (opens in a new tab)</ScreenReaderOnly>}
    </Button>
  );
}

function UnavailableStatus() {
  return (
    <Text css={textStyle}>
      <span css={[markerStyle, unavailableMarkerStyle]} />
      Unavailable
    </Text>
  );
}

type ComponentStatusProps = {
  name: string;
  reactComponentUrl?: string;
  figmaComponentUrl?: string;
};

function ComponentStatus({
  name,
  reactComponentUrl,
  figmaComponentUrl,
}: ComponentStatusProps) {
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>
        {reactComponentUrl ? (
          <AvailableStatus href={reactComponentUrl} />
        ) : (
          <UnavailableStatus />
        )}
      </Table.Cell>
      <Table.Cell>
        {figmaComponentUrl ? (
          <AvailableStatus href={figmaComponentUrl} external />
        ) : (
          <UnavailableStatus />
        )}
      </Table.Cell>
    </Table.Row>
  );
}

export default ComponentStatus;
