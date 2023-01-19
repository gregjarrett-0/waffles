import { css } from '@emotion/react';

import { Menu } from '../index';
import { tokens } from '../../tokens';
import { Checkmark, Cross, Verified, Trash } from '../../icon';
import { Button } from '../../button';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  background-color: ${tokens.colors.navy};
  height: 100vh;
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Menu inverted trigger={<Button>Open Menu</Button>}>
        <Menu.Category noDivider>
          <Menu.Item label="Editor" description="Can edit the workspace." />
          <Menu.Item
            label="Commenter"
            description="Can comment on the workspace with a linger description."
          />
          <Menu.Item
            label="Viewer"
            description="Can view the workspace"
            isActive
            iconRight={<Checkmark />}
          />
        </Menu.Category>
        <Menu.Category label="Access">
          <Menu.Item
            label="Enable"
            showNotificationDot
            iconLeft={<Verified />}
          />
          <Menu.Item label="Disable" disabled iconLeft={<Cross />} />
          <Menu.Item
            variant="destructive"
            label="Remove"
            iconLeft={<Trash />}
          />
        </Menu.Category>
        <Menu.Category>
          <Menu.Button variant="primary">View Workspace</Menu.Button>
        </Menu.Category>
      </Menu>
    </div>
  );
}

export default Story;
