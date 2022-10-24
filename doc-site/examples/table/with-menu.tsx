import { useState } from 'react';
import { css } from '@emotion/react';
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

function Example() {
  const [data, setData] = useState(initialData);

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
          <Table.HeadCell>Language</Table.HeadCell>
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
          const { name, inventedAt, complexity } = language;

          return (
            <Table.Row key={name}>
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
