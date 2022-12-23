import React, { isValidElement, cloneElement } from 'react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Link } from '@datacamp/waffles/link';
import { deepChildrenMap } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { Code } from '@datacamp/waffles/code';

type DarkModeProps = {
  children: React.ReactNode;
};

function DarkMode({ children }: DarkModeProps) {
  function renderInvertedChildren() {
    return deepChildrenMap(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child as JSX.Element, {
          inverted: true,
        });
      }

      return child;
    });
  }

  return <div>{renderInvertedChildren()}</div>;
}

function Example() {
  return (
    <DarkMode>
      <Heading>Naïve dark mode</Heading>
      <Paragraph>
        Notice how none of the components have <Code>inverted</Code> prop set
        explicitly.
      </Paragraph>
      <Paragraph>
        With <Link href="https://www.datacamp.com/">DataCamp</Link> you can gain
        the career-building Python skills you need to succeed as a data
        scientist. In this track, you&apos;ll learn how this versatile language
        allows you to import, clean, manipulate, and visualize data. Through
        interactive exercises, you&apos;ll get hands-on with some of the most
        popular <Link href="https://www.python.org/">Python</Link> libraries.
      </Paragraph>
    </DarkMode>
  );
}

export default Example;
