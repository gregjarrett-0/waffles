import { useState } from 'react';
import { Table } from '@datacamp/waffles/table';

const initialData = [
  {
    name: 'Python',
    inventedAt: 1991,
    complexity: 'Easy',
  },
  {
    name: 'JavaScript',
    inventedAt: 1995,
    complexity: 'Easy',
  },
  {
    name: 'Rust',
    inventedAt: 2014,
    complexity: 'Hard',
  },
];

function sortDataByName(
  data: typeof initialData,
  direction: 'descending' | 'ascending',
) {
  return data.sort((lang1, lang2) => {
    if (lang1.name < lang2.name) {
      return direction === 'descending' ? -1 : 1;
    }
    if (lang1.name > lang2.name) {
      return direction === 'descending' ? 1 : -1;
    }

    return 0;
  });
}

function Example() {
  const [data, setData] = useState(initialData);
  const [sortDirection, setSortDirection] = useState<
    'ascending' | 'descending' | 'indeterminate'
  >('indeterminate');

  function handleSort() {
    if (sortDirection === 'indeterminate') {
      setSortDirection('descending');
      setData(sortDataByName(data, 'descending'));
    } else {
      if (sortDirection === 'descending') {
        setSortDirection('ascending');
        setData(sortDataByName(data, 'ascending'));
      } else {
        setSortDirection('descending');
        setData(sortDataByName(data, 'descending'));
      }
    }
  }

  return (
    <Table aria-label="Programming languages complexity">
      <Table.Head>
        <Table.Row>
          <Table.HeadCell sort={sortDirection} onClick={handleSort}>
            Language
          </Table.HeadCell>
          <Table.HeadCell>Invented at</Table.HeadCell>
          <Table.HeadCell>Complexity</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map((language) => {
          const { name, inventedAt, complexity } = language;

          return (
            <Table.Row key={name}>
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
