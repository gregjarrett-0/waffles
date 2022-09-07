import { useState } from 'react';
import { Slider } from '@datacamp/waffles/slider';

function Example() {
  const [value, setValue] = useState([30, 70]);

  return (
    <Slider
      value={value}
      onChange={(value) => setValue(value)}
      aria-label="Range slider"
    />
  );
}

export default Example;
