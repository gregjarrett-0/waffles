import parseMinorVersion from './parse-minor-version';

// TODO: So far we can relay on minor versions when comparing various Waffles release, but will change in future - blurbyte

// Determine how old the New Waffles dependency is
function versionStatus(currentVersion: string, version: string) {
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

export default versionStatus;
