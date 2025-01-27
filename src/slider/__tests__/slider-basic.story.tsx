import { useState } from 'react';
import { css } from '@emotion/react';

import { Slider } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [value, setValue] = useState([50]);

  return (
    <div css={wrapperStyle}>
      <Slider
        value={value}
        onChange={(value) => setValue(value)}
        aria-label="Basic slider"
      />
    </div>
  );
}

export default Story;
