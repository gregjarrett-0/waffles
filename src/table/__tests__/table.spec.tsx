/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';

import { Table } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

describe('Table', () => {
  describe('HeadCellCheckbox', () => {
    it('when clicked, appropriate handler is fired', () => {
      const handleChange = jest.fn();
      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCellCheckbox onChange={handleChange} />
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const checkbox = container.querySelector('input');
      checkbox && fireEvent.click(checkbox);

      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('CellCheckbox', () => {
    it('when clicked, appropriate handler is fired', () => {
      const handleChange = jest.fn();
      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Body>
            <Table.Row>
              <Table.CellCheckbox onChange={handleChange} />
            </Table.Row>
          </Table.Body>
        </Table>,
      );

      const checkbox = container.querySelector('input');
      checkbox && fireEvent.click(checkbox);

      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('CellMenu', () => {
    it('renders trigger label', () => {
      const { getByText } = render(
        <Table aria-label="Dummy table">
          <Table.Body>
            <Table.Row>
              <Table.CellMenu label="Options">
                <Table.CellMenuCategory>
                  <Table.CellMenuItem label="Edit" />
                  <Table.CellMenuItem label="Copy" />
                </Table.CellMenuCategory>
              </Table.CellMenu>
            </Table.Row>
          </Table.Body>
        </Table>,
      );

      const trigger = getByText('Options');

      expect(trigger).toBeInTheDocument();
    });

    it('when trigger is clicked, render menu dropdown', () => {
      const { getByText, getByRole } = render(
        <Table aria-label="Dummy table">
          <Table.Body>
            <Table.Row>
              <Table.CellMenu label="Options">
                <Table.CellMenuCategory>
                  <Table.CellMenuItem label="Edit" />
                  <Table.CellMenuItem label="Copy" />
                </Table.CellMenuCategory>
              </Table.CellMenu>
            </Table.Row>
          </Table.Body>
        </Table>,
      );

      const trigger = getByText('Options');
      fireEvent.click(trigger);
      const dropdown = getByRole('menu');

      expect(trigger).toBeInTheDocument();
      expect(dropdown).toBeInTheDocument();
    });
  });

  describe('HeadCell', () => {
    it('when sort is specified, and cell is clicked, appropriate handler is fired', () => {
      const handleSort = jest.fn();
      const { getByText } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="descending" onSort={handleSort}>
                Name
              </Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const cell = getByText('Name');
      fireEvent.click(cell);

      expect(handleSort).toHaveBeenCalled();
    });

    it("when sort is set to 'descending', appropriate aria attribute and icon are present", () => {
      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="descending">Name</Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const cell = container.querySelector('th');
      const icon = container.querySelector('svg');

      expect(cell).toHaveAttribute('aria-sort', 'descending');
      expect(cell).toContainElement(icon);
    });

    it("when sort is set to 'ascending', appropriate aria attribute and icon are present", () => {
      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="ascending">Name</Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const cell = container.querySelector('th');
      const icon = container.querySelector('svg');

      expect(cell).toHaveAttribute('aria-sort', 'ascending');
      expect(cell).toContainElement(icon);
    });

    it("when sort is set to 'none', don't provide aria-sort attribute", () => {
      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="none">Name</Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const cell = container.querySelector('th');
      const icon = container.querySelector('svg');

      expect(cell).not.toHaveAttribute('aria-sort');
      expect(icon).not.toBeInTheDocument();
    });

    it("when sort is set to 'indeterminate', show icon but don't provide aria-sort attribute", () => {
      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="indeterminate">Name</Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const cell = container.querySelector('th');
      const icon = container.querySelector('svg');

      expect(cell).not.toHaveAttribute('aria-sort');
      expect(cell).toContainElement(icon);
    });
  });

  describe('renders snapshot', () => {
    it('of basic table', () => {
      const { container } = render(
        <Table aria-label="Basic table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Genre</Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Taylor Swift</Table.Cell>
              <Table.Cell>Pop</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Ariana Grande</Table.Cell>
              <Table.Cell>Pop</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Roger Waters</Table.Cell>
              <Table.Cell>Rock</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );

      const table = container.firstChild;
      expect(table).toMatchSnapshot();
    });

    it('of basic inverted table', () => {
      const { container } = render(
        <Table inverted aria-label="Inverted table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Genre</Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Taylor Swift</Table.Cell>
              <Table.Cell>Pop</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Ariana Grande</Table.Cell>
              <Table.Cell>Pop</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Roger Waters</Table.Cell>
              <Table.Cell>Rock</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );

      const table = container.firstChild;
      expect(table).toMatchSnapshot();
    });

    it('of table with checkboxes column', () => {
      const { container } = render(
        <Table aria-label="Table with checkboxes">
          <Table.Head>
            <Table.Row>
              <Table.HeadCellCheckbox isIndeterminate onChange={() => {}}>
                Name
              </Table.HeadCellCheckbox>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Genre</Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.CellCheckbox checked onChange={() => {}}>
                Name
              </Table.CellCheckbox>
              <Table.Cell>Taylor Swift</Table.Cell>
              <Table.Cell>Pop</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellCheckbox checked onChange={() => {}}>
                Name
              </Table.CellCheckbox>
              <Table.Cell>Ariana Grande</Table.Cell>
              <Table.Cell>Pop</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellCheckbox onChange={() => {}}>Name</Table.CellCheckbox>
              <Table.Cell>Roger Waters</Table.Cell>
              <Table.Cell>Rock</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );

      const table = container.firstChild;
      expect(table).toMatchSnapshot();
    });

    it('of table with sortable column', () => {
      const { container } = render(
        <Table aria-label="Sortable table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="indeterminate" onSort={() => {}}>
                Name
              </Table.HeadCell>
              <Table.HeadCell>Genre</Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Taylor Swift</Table.Cell>
              <Table.Cell>Pop</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Roger Waters</Table.Cell>
              <Table.Cell>Rock</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );

      const table = container.firstChild;
      expect(table).toMatchSnapshot();
    });

    it('of table with menu cell', () => {
      const { container } = render(
        <Table aria-label="Table with menu">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="indeterminate" onSort={() => {}}>
                Name
              </Table.HeadCell>
              <Table.HeadCell>Genre</Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Taylor Swift</Table.Cell>
              <Table.Cell>Pop</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Roger Waters</Table.Cell>
              <Table.CellMenu label="Rock">
                <Table.CellMenuCategory>
                  <Table.CellMenuItem label="Rock" />
                  <Table.CellMenuItem label="Psychedelic Rock" />
                  <Table.CellMenuItem label="Progressive Rock" />
                </Table.CellMenuCategory>
              </Table.CellMenu>
            </Table.Row>
          </Table.Body>
        </Table>,
      );

      const table = container.firstChild;
      expect(table).toMatchSnapshot();
    });
  });
});
