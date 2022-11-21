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

type AdoptionBadgeProps = {
  version: 'new' | 'old';
  children?: React.ReactNode;
  upgradeStatus?: AdoptionUpgradeStatus;
  isNewOnly?: boolean;
};

function AdoptionBadge({
  children,
  version,
  upgradeStatus,
  isNewOnly = false,
}: AdoptionBadgeProps) {
  const backgroundColor = hexToRgba(
    version === 'new' ? tokens.colors.green : tokens.colors.orange,
    0.2,
  );
  const borderColor = hexToRgba(
    version === 'new' ? tokens.colors.green : tokens.colors.orange,
    0.8,
  );

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
          <Star aria-label="Up to date and New Waffles only" size="xsmall" />
        ) : null;
    }
  }

  return (
    <Text
      css={css`
        ${badgeStyle}
        background: linear-gradient(
        0deg,
        ${backgroundColor},
        ${backgroundColor}
      ),
      ${tokens.colors.white};
        border: ${tokens.borderWidth.thin} solid ${borderColor};
      `}
    >
      {children}
      {renderIcon()}
    </Text>
  );
}

export default AdoptionBadge;
