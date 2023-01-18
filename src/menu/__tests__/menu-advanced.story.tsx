import { forwardRef } from 'react';
import { css } from '@emotion/react';

import { Menu, useMenu } from '../index';
import { tokens } from '../../tokens';
import {
  ChevronUp,
  ChevronDown,
  Checkmark,
  Cross,
  Verified,
  Trash,
} from '../../icon';
import { Button } from '../../button';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

type MenuTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function MenuTriggerInternal(
  props: MenuTriggerProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { isOpen } = useMenu();

  return (
    <Button
      {...props}
      ref={ref}
      iconRight={isOpen ? <ChevronUp /> : <ChevronDown />}
    >
      {isOpen ? 'Close' : 'Open'} Menu
    </Button>
  );
}

const MenuTrigger = forwardRef(MenuTriggerInternal);

function Story() {
  return (
    <div css={wrapperStyle}>
      <Menu trigger={<MenuTrigger />}>
        <Menu.Category noDivider>
          <Menu.Item label="Editor" description="Can edit the workspace." />
          <Menu.Item
            label="Commenter"
            description="Can comment on the workspace with a linger description."
          />
          <Menu.Item
            label="Viewer"
            description="Can view the workspace."
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
