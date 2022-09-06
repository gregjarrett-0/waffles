import { useState } from 'react';
import { css } from '@emotion/react';

import { Slider } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [value, setValue] = useState([20]);

  return (
    <div css={wrapperStyle}>
      <Slider
        value={value}
        step={0.25}
        min={10}
        max={30}
        onChange={(value) => setValue(value)}
        formatLabel={(value) =>
          Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(value)
        }
        aria-label="Customized slider"
      />
    </div>
  );
}

export default Story;
