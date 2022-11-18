// Extract New Waffles minor version for various comparisons
function parseMinorVersion(version: string) {
  return parseInt(version.split('.')[1], 10);
}

export default parseMinorVersion;
