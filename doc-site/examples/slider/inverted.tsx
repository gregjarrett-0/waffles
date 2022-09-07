import { useState } from 'react';
import { Slider } from '@datacamp/waffles/slider';

function Example() {
  const [value, setValue] = useState([50]);

  return (
    <Slider
      inverted
      value={value}
      onChange={(value) => setValue(value)}
      aria-label="Inverted style basic slider"
    />
  );
}

export default Example;
