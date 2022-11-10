import { useState } from 'react';
import { Switch } from '@datacamp/waffles/switch';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      aria-label="Switch without a label"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}

export default Example;
