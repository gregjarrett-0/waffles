import { BrandProps } from '../../types';
import { tokens } from '../../../tokens';

function WorkspaceLogomark({
  inverted = false,
  monochrome = false,
  ...restProps
}: BrandProps) {
  const logomarkColor = monochrome
    ? inverted
      ? tokens.colors.white
      : tokens.colors.navy
    : tokens.colors.green;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 36 36"
      {...restProps}
    >
      <path
        fill={logomarkColor}
        fillRule="evenodd"
        d="m2.623 8.63 3.115 1.906v16.208c0 1.025 1.117 2.116 1.997 1.588l14.555-8.7c.853-.51.853-1.751 0-2.265l-10.455-6.246H30.73v15.255h-9.463l-3.777 2.639h14.12a1.76 1.76 0 0 0 1.759-1.759V10.241c0-.972-.792-1.759-1.759-1.759H7.497c-.018 0-.057.004-.057.004L4.973 6.988 2.623 8.63zm5.754 16.245 10.662-6.373-10.662-6.378v12.751z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default WorkspaceLogomark;
