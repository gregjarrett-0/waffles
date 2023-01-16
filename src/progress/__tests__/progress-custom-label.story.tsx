import { css } from '@emotion/react';

import { Progress } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  background-color: ${tokens.colors.greyLight};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Progress
        value={40}
        max={100}
        aria-label="Custom label progress"
        customLabel="Custom label for progress"
      />
    </div>
  );
}

export default Story;
