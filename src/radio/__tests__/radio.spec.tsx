import { useRef, useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Radio } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

function TestRefRadio() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Radio ref={inputRef} onChange={jest.fn()}>
      Test label
    </Radio>
  );
}

describe('Radio', () => {
  it('renders label and input', () => {
    const { getByLabelText, getByText } = render(
      <Radio onChange={jest.fn()}>Taylor Swift</Radio>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });
    const label = getByText('Taylor Swift');

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('handles click event correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Radio onChange={handleClick}>Taylor Swift</Radio>,
    );

    const label = getByText('Taylor Swift');
    fireEvent.click(label);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles focus correctly', () => {
    const handleFocus = jest.fn();
    const { getByLabelText } = render(
      <Radio onFocus={handleFocus} onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });
    fireEvent.focus(input);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('sets the data attribute on the radio', () => {
    const { getByTestId } = render(
      <Radio data-testid="taylors-radio" onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const input = getByTestId('taylors-radio');

    expect(input).toBeInTheDocument();
  });

  it('label and input are associated by the same ID', () => {
    const { getByLabelText, getByText } = render(
      <Radio onChange={jest.fn()}>Taylor Swift</Radio>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });
    const label = getByText('Taylor Swift');

    expect(input).toHaveAttribute('id', `radio-${MOCKED_ID}`);
    expect(label).toHaveAttribute('for', `radio-${MOCKED_ID}`);
  });

  it('sets correct aria attributes when has error', () => {
    const { getByLabelText } = render(
      <Radio error onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });

    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders the disabled radio', () => {
    const { getByLabelText } = render(
      <Radio disabled onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });

    expect(input).toBeDisabled();
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefRadio />);

    const input = container.querySelector('input');

    expect(input).toHaveFocus();
  });

  it('renders basic snapshot', () => {
    const { container } = render(
      <Radio onChange={jest.fn()}>Taylor Swift</Radio>,
    );

    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });

  it('renders snapshot of radio without label', () => {
    const { container } = render(
      <Radio aria-label="Taylor Swift" onChange={jest.fn()} />,
    );

    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });

  it('renders snapshot of checked state', () => {
    const { container } = render(
      <Radio checked onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });

  it('renders snapshot with error', () => {
    const { container } = render(
      <Radio error onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { container } = render(
      <Radio inverted onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });

  it('renders snapshot of disabled state', () => {
    const { container } = render(
      <Radio disabled onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });

  it('renders snapshot of focused state', () => {
    const { container, getByLabelText } = render(
      <Radio onChange={jest.fn()}>Taylor Swift</Radio>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });
    fireEvent.focus(input);
    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });
});
