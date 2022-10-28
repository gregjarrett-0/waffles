import { useState } from 'react';
import { Checkbox } from '@datacamp/waffles/checkbox';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={() => setChecked(!checked)}
      aria-label="Checkbox without a label"
    />
  );
}

export default Example;
