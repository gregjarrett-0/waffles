import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Table } from '@datacamp/waffles/table';

const enhancedInitialData = [
  {
    isChecked: false,
    name: 'Python',
    inventedAt: 1991,
    complexity: 'Easy',
  },
  {
    isChecked: false,
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

function sortDataByName(
  data: typeof enhancedInitialData,
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
  const [data, setData] = useState(enhancedInitialData);
  const [sortDirection, setSortDirection] = useState<
    'ascending' | 'descending' | 'indeterminate'
  >('indeterminate');

  // Checkboxes

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

  const areChecked = data.map((lang) => {
    return lang.isChecked;
  });
  const allChecked = areChecked.every(Boolean);
  const isIndeterminate = areChecked.some(Boolean) && !allChecked;

  // Sorting

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

  // Menu

  function handleComplexity(index: number, complexity: string) {
    const updatedData = data.map((lang, langIndex) => {
      if (index === langIndex) {
        return {
          ...lang,
          complexity,
        };
      }

      return lang;
    });

    setData(updatedData);
  }

  return (
    <Table aria-label="Programming languages complexity">
      <Table.Head>
        <Table.Row>
          <Table.HeadCellCheckbox
            checked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={handleCheckAll}
          />
          <Table.HeadCell sort={sortDirection} onSort={handleSort}>
            Language
          </Table.HeadCell>
          <Table.HeadCell
            css={css`
              min-width: 160px;
            `}
          >
            Invented at
          </Table.HeadCell>
          <Table.HeadCell
            css={css`
              min-width: 160px;
              text-align: right;
            `}
          >
            Complexity
          </Table.HeadCell>
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
              <Table.CellMenu
                label={complexity}
                css={css`
                  display: flex;
                  justify-content: flex-end;
                `}
              >
                <Table.CellMenuCategory noDivider>
                  <Table.CellMenuItem
                    label="Easy"
                    onClick={() => handleComplexity(index, 'Easy')}
                  />
                  <Table.CellMenuItem
                    label="Medium"
                    onClick={() => handleComplexity(index, 'Medium')}
                  />
                  <Table.CellMenuItem
                    label="Hard"
                    onClick={() => handleComplexity(index, 'Hard')}
                  />
                </Table.CellMenuCategory>
              </Table.CellMenu>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default Example;
