import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { ArrowUp, Star } from '@datacamp/waffles/icon';
import { hexToRgba } from '@datacamp/waffles/helpers';

import type { AdoptionUpgradeStatus } from '../types';

const badgeStyle = css`
  display: inline-flex;
  align-items: center;
  gap: ${tokens.spacing.xsmall};
  flex-shrink: 0;
  line-height: ${tokens.lineHeights.tight};
  height: 18px;
  border-radius: ${tokens.borderRadius.medium};
  font-size: ${tokens.fontSizes.small};
  padding: 0 ${tokens.spacing.xsmall};
`;

const versionMap = {
  new: {
    backgroundColor: hexToRgba(tokens.colors.green, 0.2),
    borderColor: hexToRgba(tokens.colors.green, 0.8),
  },
  old: {
    backgroundColor: hexToRgba(tokens.colors.orange, 0.2),
    borderColor: hexToRgba(tokens.colors.orange, 0.8),
  },
};

type AdoptionBadgeProps = {
  version: 'new' | 'old';
  children?: React.ReactNode;
  upgradeStatus?: AdoptionUpgradeStatus;
  isNewOnly?: boolean;
};

// Single badge shown next to project name
function AdoptionBadge({
  children,
  version,
  upgradeStatus,
  isNewOnly = false,
}: AdoptionBadgeProps) {
  function renderIcon() {
    switch (upgradeStatus) {
      case 'outdated':
        return (
          <ArrowUp
            aria-label="Needs upgrade urgently"
            size="xsmall"
            css={css`
              color: ${tokens.colors.red};
            `}
          />
        );
      case 'slightlyOutdated':
        return <ArrowUp aria-label="Should be upgraded" size="xsmall" />;
      default:
        return isNewOnly ? (
          <Star
            aria-label="Up to date, the latest Waffles version"
            size="xsmall"
          />
        ) : null;
    }
  }

  return (
    <Text
      css={css`
        ${badgeStyle}
        background: linear-gradient(
        0deg,
        ${versionMap[version].backgroundColor},
        ${versionMap[version].backgroundColor}
      ),
      ${tokens.colors.white};
        border: ${tokens.borderWidth.thin} solid
          ${versionMap[version].borderColor};
      `}
    >
      {children}
      {renderIcon()}
    </Text>
  );
}

export default AdoptionBadge;
