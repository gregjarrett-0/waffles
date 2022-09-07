import { useState } from 'react';
import { Slider } from '@datacamp/waffles/slider';

function Example() {
  const [value, setValue] = useState([50]);

  return (
    <Slider
      value={value}
      onChange={(value) => setValue(value)}
      aria-label="Basic slider"
    />
  );
}

export default Example;
