import { BrandProps } from '../../types';
import { tokens } from '../../../tokens';

function RecruitLogomark({
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
        d="M14.609 11.218h7.259a7.553 7.553 0 0 0-.386-1.355c-.267-.674-.636-1.264-1.132-1.679-.471-.394-1.124-.691-2.103-.691-1.548 0-2.394.751-2.941 1.727-.363.647-.575 1.375-.697 1.998zm10.059 0a10.713 10.713 0 0 0-.618-2.37c-.375-.947-.97-1.979-1.927-2.781-.981-.822-2.267-1.336-3.877-1.336-2.759 0-4.428 1.492-5.35 3.138-.879 1.569-1.113 3.303-1.179 4.129-.092 1.143.835 1.981 1.845 1.981h8.459v9.085l2.762 1.594V13.98h3.18v14.522H8.039v-13.88l-2.762-1.594v15.869a2.367 2.367 0 0 0 2.367 2.367h20.712a2.367 2.367 0 0 0 2.367-2.367V13.585a2.367 2.367 0 0 0-2.367-2.367h-3.688zm-2.603 14.72-.044-.025v.025h.044z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default RecruitLogomark;
