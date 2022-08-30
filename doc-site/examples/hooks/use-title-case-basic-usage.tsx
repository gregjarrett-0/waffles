import { Text } from '@datacamp/waffles/text';
import { useTitleCase } from '@datacamp/waffles/hooks';

function Example() {
  const content = useTitleCase(
    'design a promo strategy for the insurance company',
  );

  return <Text>{content}</Text>;
}

export default Example;
