import { setTitleCase } from '@datacamp/waffles/helpers';
import { Paragraph } from '@datacamp/waffles/Paragraph';

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
