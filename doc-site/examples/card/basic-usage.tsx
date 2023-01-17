import { Paragraph } from '@datacamp/waffles/paragraph';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';
import { Button } from '@datacamp/waffles/button';

function Example() {
  return (
    <Card>
      <Heading size="large">Intermediate Python</Heading>
      <Paragraph>
        Level up your data science skills by creating visualizations using
        Matplotlib and manipulating DataFrames with pandas.
      </Paragraph>
      <Button variant="primary">Check course</Button>
    </Card>
  );
}

export default Example;
