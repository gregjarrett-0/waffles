import { css } from '@emotion/react';
import { Loader } from '@datacamp/waffles/loader';

function Example() {
  return (
    <div
      css={css`
        width: 150px;
      `}
    >
      <Loader inverted aria-label="Inverted Loader example" />
    </div>
  );
}

export default Example;
