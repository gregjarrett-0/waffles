/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Slider } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.medium};
  background-color: ${tokens.colors.greyLight};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Slider value={[30]} onChange={() => {}} aria-label="Basic slider" />
      <Slider
        disabled
        value={[30]}
        onChange={() => {}}
        aria-label="Disabled slider"
      />
      <Slider value={[30, 70]} onChange={() => {}} aria-label="Range slider" />
      <Slider
        showInputs
        value={[50]}
        onChange={() => {}}
        aria-label="Slider with input"
      />
      <Slider
        disabled
        showInputs
        value={[50]}
        onChange={() => {}}
        aria-label="Disabled slider with input"
      />
      <Slider
        showInputs
        value={[20, 40]}
        onChange={() => {}}
        aria-label="Range slider with inputs"
      />
      <Slider
        hideLabels
        value={[40]}
        onChange={() => {}}
        aria-label="Slider with no labels"
      />
    </div>
  );
}

export default Story;
