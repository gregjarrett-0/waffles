import { BrandProps } from '../../types';
import { tokens } from '../../../tokens';

function RecruitLogo({
  inverted = false,
  monochrome = false,
  ...restProps
}: BrandProps) {
  const textColor = inverted ? tokens.colors.white : tokens.colors.navy;
  const logomarkColor = monochrome
    ? inverted
      ? tokens.colors.white
      : tokens.colors.navy
    : tokens.colors.green;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 132 36"
      {...restProps}
    >
      <path
        fill={textColor}
        d="m61.065 28.125-3.861-7.614c2.079-.999 3.645-3.213 3.645-5.643 0-3.24-2.835-6.183-6.021-6.183h-7.803v19.44h3.213v-7.074h3.618l3.591 7.074h3.618zm-6.237-16.227c1.566 0 2.808 1.404 2.808 2.97s-1.242 2.943-2.808 2.943h-4.59v-5.913h4.59zm19.924 10.179c.027-.27.054-.648.054-.999 0-3.861-2.808-7.047-6.48-7.047-3.834 0-6.804 3.132-6.804 7.128 0 4.077 2.916 7.128 6.939 7.128 4.374 0 5.913-3.402 6.102-4.671h-3.267c-.27.783-1.188 1.809-2.835 1.809-2.214 0-3.348-1.485-3.591-3.348h9.882zm-6.426-5.184c1.836 0 2.916 1.269 3.213 2.943h-6.561c.324-1.701 1.458-2.943 3.348-2.943zm21.366 2.295c-.162-1.998-2.187-5.157-6.291-5.157-3.834 0-6.885 3.186-6.885 7.128s3.051 7.128 6.885 7.128c3.78 0 6.102-3.24 6.237-5.157h-3.213c-.297 1.161-1.539 2.133-3.024 2.133-2.187 0-3.645-1.944-3.645-4.104s1.404-4.104 3.645-4.104c1.377 0 2.646.864 2.997 2.133h3.294zm9.33-5.157c-1.647 0-2.97.702-3.753 1.998v-1.836h-3.213v13.932h3.213v-7.182c0-2.619 1.404-3.78 3.483-3.78.783 0 1.377.108 1.701.162v-3.186a8.547 8.547 0 0 0-1.431-.108zm8.143 14.256c1.62 0 3.132-.783 3.942-2.052v1.89h3.132V14.193h-3.213v7.911c0 1.728-1.296 2.997-2.889 2.997-1.62 0-2.889-1.188-2.889-2.916v-7.992h-3.213v8.262c0 3.834 2.025 5.832 5.13 5.832zm11.937-15.849c1.242 0 2.295-.972 2.295-2.214s-.999-2.241-2.295-2.241c-1.215 0-2.214.999-2.214 2.241s.999 2.214 2.214 2.214zm1.593 1.755h-3.213v13.932h3.213V14.193zm9.018 11.124c-.999 0-1.701-.432-1.701-1.539v-6.777h3.429v-2.808h-3.429v-3.942h-3.213v3.942h-2.322v2.808h2.322v6.831c0 3.051 1.647 4.455 4.266 4.455.864 0 1.755-.243 2.376-.432v-2.943c-.405.162-1.107.405-1.728.405z"
      />
      <path
        fill={logomarkColor}
        fillRule="evenodd"
        d="M14.609 11.218h7.259a7.553 7.553 0 0 0-.386-1.355c-.267-.674-.636-1.264-1.132-1.679-.471-.394-1.124-.691-2.103-.691-1.548 0-2.394.751-2.941 1.727-.363.647-.575 1.375-.697 1.998zm10.059 0a10.713 10.713 0 0 0-.618-2.37c-.375-.947-.97-1.979-1.927-2.781-.981-.822-2.267-1.336-3.877-1.336-2.759 0-4.428 1.492-5.35 3.138-.879 1.569-1.113 3.303-1.179 4.129-.092 1.143.835 1.981 1.845 1.981h8.459v9.085l2.762 1.594V13.98h3.18v14.522H8.039v-13.88l-2.762-1.594v15.869a2.367 2.367 0 0 0 2.367 2.367h20.712a2.367 2.367 0 0 0 2.367-2.367V13.585a2.367 2.367 0 0 0-2.367-2.367h-3.688zm-2.603 14.72-.044-.025v.025h.044z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default RecruitLogo;
