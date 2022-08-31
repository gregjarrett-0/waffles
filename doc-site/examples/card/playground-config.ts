import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';
import { Avatar } from '@datacamp/waffles/avatar';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';
import { Avatar } from '@datacamp/waffles/avatar';

function Playground() {
  // Using style, because emotion css prop doesn't work in Playground

  return (
    <Card>
      <Heading size="large">Card title</Heading>
      <Paragraph style={{ marginBottom: 0 }}>
        Custom content of the card.
      </Paragraph>
    </Card>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    tokens,
    Paragraph,
    Heading,
    Card,
    Avatar,
  },
};

export default playgroundConfig;
