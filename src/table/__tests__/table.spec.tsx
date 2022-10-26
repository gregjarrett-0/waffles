/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';

import { Table } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

function DummyIcon() {
  return (
    <svg viewBox="0 0 100 100" data-testid="dummy-icon">
      <circle cx="50" cy="50" r="50" />
    </svg>
  );
}

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

    it("has 'Select all' aria-label by default", () => {
      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCellCheckbox onChange={() => {}} />
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const checkbox = container.querySelector('input');

      expect(checkbox).toHaveAttribute('aria-label', 'Select all');
    });

    it('aria-label could be customized', () => {
      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCellCheckbox
                aria-label="Custom accessible label"
                onChange={() => {}}
              />
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const checkbox = container.querySelector('input');

      expect(checkbox).toHaveAttribute('aria-label', 'Custom accessible label');
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

    it("has 'Select' aria-label by default", () => {
      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.CellCheckbox onChange={() => {}} />
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const checkbox = container.querySelector('input');

      expect(checkbox).toHaveAttribute('aria-label', 'Select');
    });

    it('aria-label could be customized', () => {
      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.CellCheckbox
                aria-label="Custom accessible label"
                onChange={() => {}}
              />
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const checkbox = container.querySelector('input');

      expect(checkbox).toHaveAttribute('aria-label', 'Custom accessible label');
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
      const handleClick = jest.fn();

      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="descending" onClick={handleClick}>
                Name
              </Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const button = container.querySelector('button');
      button && fireEvent.click(button);

      expect(handleClick).toHaveBeenCalled();
    });

    it('when sort is not specified, and cell is clicked, appropriate handler is fired', () => {
      const handleClick = jest.fn();

      const { container } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell onClick={handleClick}>Name</Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const cell = container.querySelector('th');
      cell && fireEvent.click(cell);

      expect(handleClick).toHaveBeenCalled();
    });

    it("when sort is set to 'descending', appropriate aria attribute and icon are present", () => {
      const { container, getByTestId } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="descending">Name</Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const cell = container.querySelector('th');
      const icon = getByTestId('sort-descending-icon');

      expect(cell).toHaveAttribute('aria-sort', 'descending');
      expect(cell).toContainElement(icon);
    });

    it("when sort is set to 'ascending', appropriate aria attribute and icon are present", () => {
      const { container, getByTestId } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="ascending">Name</Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const cell = container.querySelector('th');
      const icon = getByTestId('sort-ascending-icon');

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
      const { container, getByTestId } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="indeterminate">Name</Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const cell = container.querySelector('th');
      const icon = getByTestId('sort-icon');

      expect(cell).not.toHaveAttribute('aria-sort');
      expect(cell).toContainElement(icon);
    });

    it('when icon is provided, show it next to label', () => {
      const { container, getByTestId } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell icon={<DummyIcon />}>Name</Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const cell = container.querySelector('th');
      const icon = getByTestId('dummy-icon');

      expect(cell).toContainElement(icon);
    });

    it('when both icon and sort are specified, sort icon takes precedence', () => {
      const { getByTestId, queryByTestId } = render(
        <Table aria-label="Dummy table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell sort="ascending" icon={<DummyIcon />}>
                Name
              </Table.HeadCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );

      const sortIcon = getByTestId('sort-ascending-icon');
      const icon = queryByTestId('dummy-icon');

      expect(sortIcon).toBeInTheDocument();
      expect(icon).not.toBeInTheDocument();
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
              <Table.HeadCellCheckbox isIndeterminate onChange={() => {}} />
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Genre</Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.CellCheckbox checked onChange={() => {}} />
              <Table.Cell>Taylor Swift</Table.Cell>
              <Table.Cell>Pop</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellCheckbox checked onChange={() => {}} />
              <Table.Cell>Ariana Grande</Table.Cell>
              <Table.Cell>Pop</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellCheckbox onChange={() => {}} />
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
              <Table.HeadCell sort="indeterminate" onClick={() => {}}>
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

    it('of table with custom column icon', () => {
      const { container } = render(
        <Table aria-label="Sortable table">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell
                sort="descending"
                icon={<DummyIcon />}
                onClick={() => {}}
              >
                Name
              </Table.HeadCell>
              <Table.HeadCell icon={<DummyIcon />}>Genre</Table.HeadCell>
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
              <Table.HeadCell sort="indeterminate" onClick={() => {}}>
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
