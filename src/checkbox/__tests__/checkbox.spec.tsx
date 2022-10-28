import { useRef, useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Checkbox } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

function TestRefCheckbox() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Checkbox ref={inputRef} onChange={jest.fn()}>
      Test label
    </Checkbox>
  );
}

describe('Checkbox', () => {
  it('renders label and input', () => {
    const { getByLabelText, getByText } = render(
      <Checkbox onChange={jest.fn()}>Taylor Swift</Checkbox>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });
    const label = getByText('Taylor Swift');

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('renders input only with and aria-label provided', () => {
    const { container } = render(
      <Checkbox aria-label="Taylor Swift" onChange={jest.fn()} />,
    );

    const input = container.querySelector('input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-label', 'Taylor Swift');
    expect(input).not.toHaveAttribute('id');
  });

  it('handles click event correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Checkbox onChange={handleClick}>Taylor Swift</Checkbox>,
    );

    const label = getByText('Taylor Swift');
    fireEvent.click(label);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles focus correctly', () => {
    const handleFocus = jest.fn();
    const { getByLabelText } = render(
      <Checkbox onFocus={handleFocus} onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });
    fireEvent.focus(input);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('sets the data attribute on the checkbox', () => {
    const { getByTestId } = render(
      <Checkbox data-testid="taylors-checkbox" onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const input = getByTestId('taylors-checkbox');

    expect(input).toBeInTheDocument();
  });

  it('label and input are associated by the same ID', () => {
    const { getByLabelText, getByText } = render(
      <Checkbox onChange={jest.fn()}>Taylor Swift</Checkbox>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });
    const label = getByText('Taylor Swift');

    expect(input).toHaveAttribute('id', `checkbox-${MOCKED_ID}`);
    expect(label).toHaveAttribute('for', `checkbox-${MOCKED_ID}`);
  });

  it('sets correct aria attributes when has error', () => {
    const { getByLabelText } = render(
      <Checkbox error onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });

    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders the disabled checkbox', () => {
    const { getByLabelText } = render(
      <Checkbox disabled onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });

    expect(input).toBeDisabled();
  });

  it("renders indeterminate checkbox, even when it's checked", () => {
    const { getByLabelText } = render(
      <Checkbox isIndeterminate checked onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });

    expect(input).toHaveAttribute('aria-checked', 'mixed');
  });

  it("renders indeterminate checkbox, even when it's unchecked", () => {
    const { getByLabelText } = render(
      <Checkbox isIndeterminate checked={false} onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });

    expect(input).toHaveAttribute('aria-checked', 'mixed');
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefCheckbox />);

    const input = container.querySelector('input');

    expect(input).toHaveFocus();
  });

  describe('renders snapshot', () => {
    it('with label and input', () => {
      const { container } = render(
        <Checkbox onChange={jest.fn()}>Taylor Swift</Checkbox>,
      );

      const checkbox = container.firstChild;

      expect(checkbox).toMatchSnapshot();
    });

    it('without label', () => {
      const { container } = render(
        <Checkbox aria-label="Taylor Swift" onChange={jest.fn()} />,
      );

      const checkbox = container.firstChild;

      expect(checkbox).toMatchSnapshot();
    });

    it('with input only', () => {
      const { container } = render(
        <Checkbox aria-label="Taylor Swift" onChange={jest.fn()} />,
      );

      const checkbox = container.firstChild;

      expect(checkbox).toMatchSnapshot();
    });

    it('of checked state', () => {
      const { container } = render(
        <Checkbox checked onChange={jest.fn()}>
          Taylor Swift
        </Checkbox>,
      );

      const checkbox = container.firstChild;

      expect(checkbox).toMatchSnapshot();
    });

    it('with error', () => {
      const { container } = render(
        <Checkbox error onChange={jest.fn()}>
          Taylor Swift
        </Checkbox>,
      );

      const checkbox = container.firstChild;

      expect(checkbox).toMatchSnapshot();
    });

    it('of inverted', () => {
      const { container } = render(
        <Checkbox inverted onChange={jest.fn()}>
          Taylor Swift
        </Checkbox>,
      );

      const checkbox = container.firstChild;

      expect(checkbox).toMatchSnapshot();
    });

    it('of disabled', () => {
      const { container } = render(
        <Checkbox disabled onChange={jest.fn()}>
          Taylor Swift
        </Checkbox>,
      );

      const checkbox = container.firstChild;

      expect(checkbox).toMatchSnapshot();
    });

    it('of indeterminate', () => {
      const { container } = render(
        <Checkbox isIndeterminate onChange={jest.fn()}>
          Taylor Swift
        </Checkbox>,
      );

      const checkbox = container.firstChild;

      expect(checkbox).toMatchSnapshot();
    });

    it('of focused', () => {
      const { container, getByLabelText } = render(
        <Checkbox onChange={jest.fn()}>Taylor Swift</Checkbox>,
      );

      const input = getByLabelText('Taylor Swift', { selector: 'input' });
      fireEvent.focus(input);
      const checkbox = container.firstChild;

      expect(checkbox).toMatchSnapshot();
    });
  });
});
