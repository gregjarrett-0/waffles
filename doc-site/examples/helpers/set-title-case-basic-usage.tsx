import { Paragraph } from '@datacamp/waffles/paragraph';
import { setTitleCase } from '@datacamp/waffles/helpers';

function Example() {
  return (
    <>
      <Paragraph>
        {setTitleCase('design a promo strategy for the insurance company')}
      </Paragraph>
      <Paragraph>
        {setTitleCase(
          'Download DataCamp for Mobile today. Available on iPhone and Android',
        )}
      </Paragraph>
    </>
  );
}

export default Example;
