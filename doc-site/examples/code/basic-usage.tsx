import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';

function Example() {
  return (
    <Paragraph>
      You can install Waffles components library by running{' '}
      <Code>npm install @datacamp/waffles</Code> with npm or{' '}
      <Code>yarn add @datacamp/waffles</Code> with yarn.
    </Paragraph>
  );
}

export default Example;
