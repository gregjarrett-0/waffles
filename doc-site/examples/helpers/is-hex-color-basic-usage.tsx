import { useState } from 'react';
import { Input } from '@datacamp/waffles/input';
import { isHexColor } from '@datacamp/waffles/helpers';
import { FormField } from '@datacamp/waffles/form-field';

function Example() {
  const [value, setValue] = useState('#03EF62');

  return (
    <FormField
      label="Provide HEX color"
      requiredIndicator="none"
      {...(!isHexColor(value) && { error: 'Not in HEX notation' })}
    >
      <Input value={value} onChange={(event) => setValue(event.target.value)} />
    </FormField>
  );
}

export default Example;
