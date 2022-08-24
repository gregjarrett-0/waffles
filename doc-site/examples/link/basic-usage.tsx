import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Link } from '@datacamp/waffles/link';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.small};
      `}
    >
      <Paragraph size="large">
        With <Link href="https://www.datacamp.com/">DataCamp</Link> you can gain
        the career-building Python skills you need to succeed as a data
        scientist. In this track, you&apos;ll learn how this versatile language
        allows you to import, clean, manipulate, and visualize data. Through
        interactive exercises, you&apos;ll get hands-on with some of the most
        popular <Link href="https://www.python.org/">Python</Link> libraries.
      </Paragraph>
      <Paragraph>
        With <Link href="https://www.datacamp.com/">DataCamp</Link> you can gain
        the career-building Python skills you need to succeed as a data
        scientist. In this track, you&apos;ll learn how this versatile language
        allows you to import, clean, manipulate, and visualize data. Through
        interactive exercises, you&apos;ll get hands-on with some of the most
        popular <Link href="https://www.python.org/">Python</Link> libraries.
      </Paragraph>
      <Paragraph size="small">
        With <Link href="https://www.datacamp.com/">DataCamp</Link> you can gain
        the career-building Python skills you need to succeed as a data
        scientist. In this track, you&apos;ll learn how this versatile language
        allows you to import, clean, manipulate, and visualize data. Through
        interactive exercises, you&apos;ll get hands-on with some of the most
        popular <Link href="https://www.python.org/">Python</Link> libraries.
      </Paragraph>
    </div>
  );
}

export default Example;
