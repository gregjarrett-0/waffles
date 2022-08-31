import { css } from '@emotion/react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';
import { Avatar } from '@datacamp/waffles/avatar';
import {
  PythonLogomark,
  SqlLogomark,
  RLogomark,
} from '@datacamp/waffles/asset';

function Example() {
  return (
    <Card
      headstone={
        <>
          <Avatar content={<PythonLogomark />} />
          <Avatar content={<SqlLogomark />} />
          <Avatar content={<RLogomark />} />
        </>
      }
      css={css`
        margin-top: 20px;
      `}
    >
      <Heading size="large">Introduction to DataCamp projects</Heading>
      <Paragraph
        css={css`
          margin-bottom: 0;
        `}
      >
        Use Python, SQL or R to build a project that has a specific solution,
        with guided tasks and real-time automated code checks.
      </Paragraph>
    </Card>
  );
}

export default Example;
