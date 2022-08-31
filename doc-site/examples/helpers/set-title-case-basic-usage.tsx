import { Text } from '@datacamp/waffles/text';
import { setTitleCase } from '@datacamp/waffles/helpers';

function Example() {
  return (
    <Text>
      {setTitleCase('design a promo strategy for the insurance company')}
    </Text>
  );
}

export default Example;
