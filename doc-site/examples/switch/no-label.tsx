import { useState } from 'react';
import { css } from '@emotion/react';
import { Switch } from '@datacamp/waffles/switch';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <form
      css={css`
        width: 300px;
      `}
    >
      <Switch
        aria-label="Switch without a label"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </form>
  );
}

export default Example;
