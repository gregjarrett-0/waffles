import { useState } from 'react';
import { Radio } from '@datacamp/waffles/radio';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <form>
      <Radio
        checked={checked}
        aria-label="Radio without a label"
        onChange={() => setChecked(!checked)}
      />
    </form>
  );
}

export default Example;
