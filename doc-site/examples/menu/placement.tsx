import React, { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Radio } from '@datacamp/waffles/radio';
import { Menu } from '@datacamp/waffles/menu';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Button } from '@datacamp/waffles/button';

function Example() {
  const [placement, setPlacement] =
    useState<React.ComponentProps<typeof Menu>['placement']>('bottomLeft');

  return (
    <>
      <Menu trigger={<Button>Edit</Button>} placement={placement}>
        <Menu.Category noDivider>
          <Menu.Item label="Cut" />
          <Menu.Item label="Copy" />
          <Menu.Item label="Rename" />
        </Menu.Category>
      </Menu>
      <form
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: ${tokens.spacing.medium};
          margin-top: ${tokens.spacing.large};

          ${mediaQuery.aboveSmall} {
            grid-template-columns: repeat(3, 1fr);
          }
        `}
      >
        <Radio
          name="menuPlacement"
          value="bottomLeft"
          checked={placement === 'bottomLeft'}
          onChange={() => setPlacement('bottomLeft')}
        >
          bottomLeft
        </Radio>
        <Radio
          name="menuPlacement"
          value="bottomRight"
          checked={placement === 'bottomRight'}
          onChange={() => setPlacement('bottomRight')}
        >
          bottomRight
        </Radio>
        <Radio
          name="menuPlacement"
          value="bottom"
          checked={placement === 'bottom'}
          onChange={() => setPlacement('bottom')}
        >
          bottom
        </Radio>
        <Radio
          name="menuPlacement"
          value="topLeft"
          checked={placement === 'topLeft'}
          onChange={() => setPlacement('topLeft')}
        >
          topLeft
        </Radio>
        <Radio
          name="menuPlacement"
          value="topLeft"
          checked={placement === 'topRight'}
          onChange={() => setPlacement('topRight')}
        >
          topRight
        </Radio>
        <Radio
          name="menuPlacement"
          value="top"
          checked={placement === 'top'}
          onChange={() => setPlacement('top')}
        >
          top
        </Radio>
        <Radio
          name="menuPlacement"
          value="left"
          checked={placement === 'left'}
          onChange={() => setPlacement('left')}
        >
          left
        </Radio>
        <Radio
          name="menuPlacement"
          value="right"
          checked={placement === 'right'}
          onChange={() => setPlacement('right')}
        >
          right
        </Radio>
      </form>
    </>
  );
}

export default Example;
