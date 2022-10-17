import * as allBrand from '@datacamp/waffles/brand';

// Group names based on the suffix for Brand components

type BrandGroup = Record<
  string,
  (props: Record<string, unknown>) => JSX.Element
>;

function getBrandGroup(brandType: string): BrandGroup {
  // Find all brand components that are of the provided type
  return Object.entries(allBrand).reduce((brandGroup, entry) => {
    const [name, Brand] = entry;

    return {
      ...brandGroup,
      ...(name.startsWith(brandType) && { [name]: Brand }),
    };
  }, {} as BrandGroup);
}

export default getBrandGroup;
