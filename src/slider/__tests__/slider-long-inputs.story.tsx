/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Slider } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.medium};
  background-color: ${tokens.colors.beigeLight};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Slider
        showInputs
        value={[-100000, 100000]}
        min={-100000}
        max={100000}
        step={10000}
        onChange={() => {}}
        aria-label="Slider with inputs"
      />
      <Slider
        showInputs
        value={[-65.75, 55.25]}
        min={-99}
        max={99}
        step={0.25}
        onChange={() => {}}
        aria-label="Slider with inputs and decimal step"
      />
    </div>
  );
}

export default Story;
