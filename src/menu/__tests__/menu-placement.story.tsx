import React, { useState } from 'react';
import { css } from '@emotion/react';

import { Menu } from '../index';
import { tokens } from '../../tokens';
import { Radio } from '../../radio';
import { Code, Edit, Copy } from '../../icon';
import { Button } from '../../button';

function Story() {
  const [placement, setPlacement] =
    useState<React.ComponentProps<typeof Menu>['placement']>('bottomLeft');

  return (
    <div
      css={css`
        padding: ${tokens.spacing.medium};
      `}
    >
      <form
        css={css`
          display: flex;
          gap: ${tokens.spacing.medium};
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
      <div
        css={css`
          margin-top: 200px;
          margin-left: 300px;
        `}
      >
        <Menu trigger={<Button>Open Menu</Button>} placement={placement}>
          <Menu.Item label="Edit" iconLeft={<Code />} />
          <Menu.Item label="Rename" iconLeft={<Edit />} />
          <Menu.Item label="Duplicate" iconLeft={<Copy />} />
        </Menu>
      </div>
    </div>
  );
}

export default Story;
