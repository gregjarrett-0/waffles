import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Star } from '@datacamp/waffles/icon';
import { Badge } from '@datacamp/waffles/badge';

import versionStatus from '../helpers/version-status';
import parseMinorVersion from '../helpers/parse-minor-version';

import type { AdoptionDependenciesStats } from '../types';

const upgradeStatusBadgeStyle = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-right: ${tokens.spacing.small};
`;

const iconStyle = css`
  margin-left: ${tokens.spacing.xsmall};
`;

function lowestVersion(versions: string[]) {
  const parsedLowestMinor = Math.min(
    ...versions.map((version) => {
      return parseMinorVersion(version);
    }),
  );

  return `1.${parsedLowestMinor}.0`;
}

type AdoptionProjectBadgesProps = {
  dependencies: AdoptionDependenciesStats[];
  currentVersion: string;
};

function AdoptionProjectBadges({
  dependencies,
  currentVersion,
}: AdoptionProjectBadgesProps) {
  const newWafflesDependency = dependencies.find((dependency) => {
    return dependency.name === '@datacamp/waffles';
  });
  const oldWafflesDependency = dependencies.find((dependency) => {
    return dependency.name.match(/^@datacamp\/waffles-.+/);
  });
  const status =
    newWafflesDependency &&
    versionStatus(currentVersion, lowestVersion(newWafflesDependency.versions));

  return (
    <span>
      {/* Show green New Waffles badge if it's in dependencies */}
      {newWafflesDependency && (
        <Badge
          variant="green"
          css={css`
            ${status &&
            status !== 'upToDate' &&
            css`
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            `}
            ${status &&
            status === 'upToDate' &&
            oldWafflesDependency &&
            `margin-right: ${tokens.spacing.small};`}
          `}
        >
          New Waffles
        </Badge>
      )}
      {/* Inform whether New Waffles should be upgraded */}
      {status && status !== 'upToDate' && (
        <Badge
          variant={status === 'outdated' ? 'red' : 'yellow'}
          css={upgradeStatusBadgeStyle}
        >
          Upgrade!
        </Badge>
      )}
      {/* Display icon when project is fully migrated to most recent New Waffles */}
      {status && status === 'upToDate' && !oldWafflesDependency && (
        <Star aria-label="Everything up to date!" css={iconStyle} />
      )}
      {/* Show orange Old Waffles badge if it's in dependencies */}
      {oldWafflesDependency && <Badge variant="orange">Old Waffles</Badge>}
    </span>
  );
}

export default AdoptionProjectBadges;
