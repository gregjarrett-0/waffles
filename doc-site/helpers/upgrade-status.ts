import parseMinorVersion from './parse-minor-version';

import type { AdoptionUpgradeStatus } from '../types';

// TODO: For now, we can rely on minor versions when comparing various Waffles releases, but it will change in future - blurbyte

// Determine how old the New Waffles dependency is
function upgradeStatus(
  currentVersion: string,
  version: string,
): AdoptionUpgradeStatus {
  const currentMinor = parseMinorVersion(currentVersion);
  const minor = parseMinorVersion(version);
  const difference = currentMinor - minor;

  if (difference >= 6) {
    return 'outdated';
  } else if (difference >= 2) {
    return 'slightlyOutdated';
  }

  return 'upToDate';
}

export default upgradeStatus;
