/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { TextArea } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customTextAreaStyle = css`
  border-color: ${tokens.colors.purpleDark};
  color: ${tokens.colors.purpleDarkText};
  background-color: ${tokens.colors.yellowLight};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <TextArea
        css={customTextAreaStyle}
        aria-label="Text area with custom style"
        value="Text area value"
        onChange={() => {}}
        rows={3}
      />
    </div>
  );
}

export default Story;
