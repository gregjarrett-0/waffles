import React, { useState } from 'react';
import { Table } from '@datacamp/waffles/table';

const enhancedInitialData = [
  {
    isChecked: false,
    name: 'Python',
    inventedAt: 1991,
    complexity: 'Easy',
  },
  {
    isChecked: true,
    name: 'JavaScript',
    inventedAt: 1995,
    complexity: 'Easy',
  },
  {
    isChecked: false,
    name: 'Rust',
    inventedAt: 2014,
    complexity: 'Hard',
  },
];

function Example() {
  const [data, setData] = useState(enhancedInitialData);

  function handleCheck(index: number) {
    const updatedData = data.map((lang, langIndex) => {
      if (index === langIndex) {
        return {
          ...lang,
          isChecked: !lang.isChecked,
        };
      }

      return lang;
    });

    setData(updatedData);
  }

  function handleCheckAll(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedData = data.map((lang) => {
      return {
        ...lang,
        isChecked: event.target.checked,
      };
    });

    setData(updatedData);
  }

  const checkedMap = data.map((lang) => {
    return lang.isChecked;
  });
  const allChecked = checkedMap.every(Boolean);
  const isIndeterminate = checkedMap.some(Boolean) && !allChecked;

  return (
    <Table aria-label="Programming languages complexity">
      <Table.Head>
        <Table.Row>
          <Table.HeadCellCheckbox
            checked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={handleCheckAll}
          />
          <Table.HeadCell>Language</Table.HeadCell>
          <Table.HeadCell>Invented at</Table.HeadCell>
          <Table.HeadCell>Complexity</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map((language, index) => {
          const { isChecked, name, inventedAt, complexity } = language;

          return (
            <Table.Row key={name}>
              <Table.CellCheckbox
                checked={isChecked}
                onChange={() => handleCheck(index)}
              />
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{inventedAt}</Table.Cell>
              <Table.Cell>{complexity}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default Example;
