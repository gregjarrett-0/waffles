export type BrandProps = {
  /* Whether the Brand component is inverted in color or not. */
  /* @default false */
  inverted?: boolean;
  /* Whether the Brand component is monochrome in color or not. */
  /* @default false */
  monochrome?: boolean;
} & React.SVGAttributes<SVGElement>;
