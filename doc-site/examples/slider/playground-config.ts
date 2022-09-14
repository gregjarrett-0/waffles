import { useState } from 'react';
import { Slider } from '@datacamp/waffles/slider';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { useState } from 'react';

import { Slider } from '@datacamp/waffles/slider';

function Playground() {
  const [value, setValue] = useState([50]);

  return (
    <Slider
      value={value}
      onChange={(value) => setValue(value)}
      aria-label="Basic slider"
      step={10}
      min={20}
      max={80}
    />
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    Slider,
  },
};

export default playgroundConfig;
