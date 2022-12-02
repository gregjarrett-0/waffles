import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';

import upgradeStatus from '../helpers/upgrade-status';
import parseMinorVersion from '../helpers/parse-minor-version';

import Badge from './adoption-badge';

const wrapperStyle = css`
  display: flex;
  gap: ${tokens.spacing.small};
  width: 200px;
  flex-shrink: 0;
`;

import type { AdoptionDependenciesStats } from '../types';

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

// Badges displayed next to project name, highlighting Waffles versions used
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

  return (
    <span css={wrapperStyle}>
      {/* Show green New Waffles badge if it's in dependencies */}
      {newWafflesDependency && (
        <Badge
          version="new"
          upgradeStatus={upgradeStatus(
            currentVersion,
            lowestVersion(newWafflesDependency.versions),
          )}
          isNewOnly={!oldWafflesDependency}
        >
          Waffles
        </Badge>
      )}
      {/* Show orange Old Waffles badge if it's in dependencies */}
      {oldWafflesDependency && <Badge version="old">Old Waffles</Badge>}
    </span>
  );
}

export default AdoptionProjectBadges;
