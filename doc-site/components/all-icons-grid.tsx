import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import * as allIcons from '@datacamp/waffles/icon';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';

import groupedIcons from '../helpers/grouped-icons';

const regularIconsPreview = css`
  display: flex;
  flex-wrap: wrap;
  padding: ${tokens.spacing.small};
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.transparentNavy};
  border-bottom: 0;
  border-top-left-radius: ${tokens.borderRadius.medium};
  border-top-right-radius: ${tokens.borderRadius.medium};
`;

const solidIconsPreview = css`
  display: flex;
  flex-wrap: wrap;
  padding: ${tokens.spacing.small};
  background-color: ${tokens.colors.navy};
  border: ${tokens.borderWidth.thin} solid transparent;
  border-top: 0;
  border-bottom-right-radius: ${tokens.borderRadius.medium};
  border-bottom-left-radius: ${tokens.borderRadius.medium};
`;

type IconStyleOptions = {
  inverted: boolean;
};

function iconStyle({ inverted }: IconStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    margin: ${tokens.spacing.small};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    width: 220px;

    // Fix issue where Icon would shrink if label is too long
    & svg {
      flex-shrink: 0;
    }
  `;
}

const labelStyle = css`
  padding-left: ${tokens.spacing.small};
  color: inherit;
`;

type IconPreviewType = {
  name: string;
  icon: React.ReactNode;
  isLabelVisible?: boolean;
  inverted?: boolean;
};

function IconPreview({ name, icon, inverted = false }: IconPreviewType) {
  return (
    <div css={iconStyle({ inverted })}>
      {icon}
      <Text css={labelStyle}>{name}</Text>
    </div>
  );
}

function AllIconsGrid() {
  const { regular, solid } = groupedIcons(allIcons);

  return (
    <ErrorBoundary>
      <div css={regularIconsPreview}>
        {Object.entries(regular).map((iconData) => {
          const [name, Icon] = iconData;
          return <IconPreview key={name} name={name} icon={<Icon />} />;
        })}
      </div>
      <div css={solidIconsPreview}>
        {Object.entries(solid).map((iconData) => {
          const [name, Icon] = iconData;
          return (
            <IconPreview key={name} name={name} icon={<Icon />} inverted />
          );
        })}
      </div>
    </ErrorBoundary>
  );
}

export default AllIconsGrid;
