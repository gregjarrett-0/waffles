import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';

const wrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${tokens.spacing.small};
  margin-bottom: ${tokens.spacing.xlarge};
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.transparentNavy};
  border-top: 0;
  border-bottom-left-radius: ${tokens.borderRadius.medium};
  border-bottom-right-radius: ${tokens.borderRadius.medium};
`;

type CodePreviewControlsProps = {
  children: React.ReactNode;
};

function PreviewControls({ children }: CodePreviewControlsProps) {
  return <div css={wrapperStyle}>{children}</div>;
}

export default PreviewControls;
