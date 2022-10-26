import { css } from '@emotion/react';

import { Loader } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  width: 200px;
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Loader aria-label="Basic Loader example" />
    </div>
  );
}

export default Story;
