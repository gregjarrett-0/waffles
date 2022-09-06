/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Slider } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.medium};
  background-color: ${tokens.colors.navy};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Slider
        inverted
        value={[30]}
        onChange={() => {}}
        aria-label="Inverted slider"
      />
      <Slider
        inverted
        disabled
        value={[30]}
        onChange={() => {}}
        aria-label="Disabled inverted slider"
      />
      <Slider
        inverted
        value={[30, 70]}
        onChange={() => {}}
        aria-label="Inverted range slider"
      />
      <Slider
        inverted
        showInputs
        value={[50]}
        onChange={() => {}}
        aria-label="Inverted slider with input"
      />
      <Slider
        inverted
        disabled
        showInputs
        value={[50]}
        onChange={() => {}}
        aria-label="Disabled inverted slider with input"
      />
      <Slider
        inverted
        showInputs
        value={[20, 40]}
        onChange={() => {}}
        aria-label="Inverted range slider with inputs"
      />
      <Slider
        inverted
        hideLabels
        value={[40]}
        onChange={() => {}}
        aria-label="Inverted slider with no labels"
      />
    </div>
  );
}

export default Story;
