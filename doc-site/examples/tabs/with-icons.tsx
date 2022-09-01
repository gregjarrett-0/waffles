import React, { useState } from 'react';
import { Tabs } from '@datacamp/waffles/tabs';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Bell, Clock, Heart } from '@datacamp/waffles/icon';
import { Code } from '@datacamp/waffles/code';

function Example() {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>(0);

  return (
    <Tabs
      activeTab={activeTabIndex}
      onChange={(activeTab) => {
        setActiveTabIndex(activeTab);
      }}
    >
      <Tabs.Tab icon={<Heart />} label="First">
        <Paragraph>
          Default Icon size is set to <Code>xsmall</Code> automatically.
        </Paragraph>
      </Tabs.Tab>
      <Tabs.Tab icon={<Clock />} label="Second">
        <Paragraph>Second tab content.</Paragraph>
      </Tabs.Tab>
      <Tabs.Tab icon={<Bell />} label="Third">
        <Paragraph>Third tab content.</Paragraph>
      </Tabs.Tab>
    </Tabs>
  );
}

export default Example;
