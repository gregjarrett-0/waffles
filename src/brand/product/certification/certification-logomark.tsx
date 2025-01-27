import { tokens } from '../../../tokens';

import { BrandProps } from './../../types';

function CertificationLogomark({
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
        d="M19.423 3.803a10.795 10.795 0 0 0-4.203-.846c-5.992 0-10.861 4.874-10.861 10.861 0 5.987 4.506 10.489 10.184 10.838v6.083c0 1.771 1.935 2.862 3.448 1.944l5.324-2.957 4.87 2.975c1.513.927 3.457-.163 3.457-1.935V17.893l-2.726 1.644v10.416l-4.461-2.726a2.276 2.276 0 0 0-2.299-.041l-4.888 2.748V24.48c4.574-.872 8.14-4.624 8.726-9.299.059-.445.086-.899.086-1.363 0-.377-.15-.718-.4-.963a1.36 1.36 0 0 0-.963-.4h-7.904a2.271 2.271 0 0 0-2.271 2.271v7.2c-4.175-.345-7.459-3.848-7.459-8.108 0-4.483 3.648-8.136 8.136-8.136.798 0 1.57.116 2.3.332l1.904-2.211zm3.814 11.378h-5.969v6.509a8.139 8.139 0 0 0 5.969-6.509z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default CertificationLogomark;
