import { Text } from '@datacamp/waffles/text';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Text } from '@datacamp/waffles/text';

function Playground() {
  return (
    <Text>Start your Certification journey</Text>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Text,
  },
};

export default playgroundConfig;
