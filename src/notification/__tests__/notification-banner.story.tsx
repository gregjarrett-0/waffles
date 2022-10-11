import { css } from '@emotion/react';

import { Notification } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Notification
        title="Banner notification title"
        description="Banner notification description."
        closable
        mode="banner"
      />
    </div>
  );
}

export default Story;
