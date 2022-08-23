export type BrandProps = {
  /* Whether the brand is inverted in color or not. */
  /* @default false */
  inverted?: boolean;
  /* Whether the brand is monochrome in color or not. */
  /* @default false */
  monochrome?: boolean;
} & React.SVGAttributes<SVGElement>;
