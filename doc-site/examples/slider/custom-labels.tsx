import { useState } from 'react';
import { Slider } from '@datacamp/waffles/slider';

function Example() {
  const [value, setValue] = useState([10]);

  return (
    <Slider
      value={value}
      onChange={(value) => setValue(value)}
      aria-label="Slider with custom labels"
      step={0.25}
      max={50}
      formatLabel={(value) =>
        Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(value)
      }
    />
  );
}

export default Example;
