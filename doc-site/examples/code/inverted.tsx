import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';

function Example() {
  return (
    <Paragraph inverted>
      You can install Waffles components library by running{' '}
      <Code inverted>npm install @datacamp/waffles</Code> with npm or{' '}
      <Code inverted>yarn add @datacamp/waffles</Code> with yarn.
    </Paragraph>
  );
}

export default Example;
