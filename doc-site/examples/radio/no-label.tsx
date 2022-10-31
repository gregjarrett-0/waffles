import { useState } from 'react';
import { Radio } from '@datacamp/waffles/radio';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio
      checked={checked}
      aria-label="Radio without a label"
      onChange={() => setChecked(!checked)}
    />
  );
}

export default Example;
