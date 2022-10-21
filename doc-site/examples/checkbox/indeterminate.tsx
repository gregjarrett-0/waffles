import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Checkbox } from '@datacamp/waffles/checkbox';

function Example() {
  const [checked, setChecked] = useState([true, false]);

  const allChecked = checked.every(Boolean);
  const isIndeterminate = checked.some(Boolean) && !allChecked;

  const wrapperStyle = css`
    display: flex;
    flex-direction: column;
    gap: ${tokens.spacing.medium};
  `;

  return (
    <div css={wrapperStyle}>
      <Checkbox
        isIndeterminate={isIndeterminate}
        checked={allChecked}
        onChange={(event) => {
          setChecked(Array(2).fill(event.target.checked));
        }}
      >
        Check all
      </Checkbox>
      <div
        css={css`
          ${wrapperStyle}
          padding-left: ${tokens.spacing.large};
        `}
      >
        <Checkbox
          checked={checked[0]}
          onChange={(event) => {
            setChecked([event.target.checked, checked[1]]);
          }}
        >
          JavaScript
        </Checkbox>
        <Checkbox
          checked={checked[1]}
          onChange={(event) => {
            setChecked([checked[0], event.target.checked]);
          }}
        >
          Python
        </Checkbox>
      </div>
    </div>
  );
}

export default Example;
