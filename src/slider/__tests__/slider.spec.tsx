import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Slider } from '../index';

function TestSliderWithSingleInput() {
  const [value, setValue] = useState([30]);

  return (
    <Slider
      showInputs
      value={value}
      onChange={(value) => setValue(value)}
      aria-label="Slider with single input"
    />
  );
}

function TestSliderWithInputs() {
  const [value, setValue] = useState([30, 60]);

  return (
    <Slider
      showInputs
      value={value}
      onChange={(value) => setValue(value)}
      aria-label="Slider with inputs"
    />
  );
}

describe('Slider', () => {
  it('renders with one handle, all labels, and accessible aria attributes', () => {
    const { getByTestId, getByRole, getByText } = render(
      <Slider value={[50]} onChange={jest.fn()} aria-label="Test slider" />,
    );

    const track = getByTestId('slider-track');
    const handle = getByRole('slider');
    const currentValueLabel = getByText('50');
    const minLabel = getByText('0');
    const maxLabel = getByText('100');

    expect(track).toBeInTheDocument();
    expect(handle).toBeInTheDocument();
    expect(handle).toHaveAttribute('aria-valuenow', '50');
    expect(handle).toHaveAttribute('aria-valuemin', '0');
    expect(handle).toHaveAttribute('aria-valuemax', '100');
    expect(handle).toHaveAttribute('aria-label', 'Test slider');
    expect(currentValueLabel).toBeInTheDocument();
    expect(minLabel).toBeInTheDocument();
    expect(maxLabel).toBeInTheDocument();
  });

  it('renders with two handles, and all labels', () => {
    const { getByTestId, getAllByRole, getByText } = render(
      <Slider value={[20, 50]} onChange={jest.fn()} aria-label="Test slider" />,
    );

    const track = getByTestId('slider-track');
    const handles = getAllByRole('slider');
    const firstValueLabel = getByText('20');
    const secondValueLabel = getByText('50');
    const minLabel = getByText('0');
    const maxLabel = getByText('100');

    expect(track).toBeInTheDocument();
    expect(handles).toHaveLength(2);
    expect(handles[0]).toHaveAttribute('aria-valuenow', '20');
    expect(handles[1]).toHaveAttribute('aria-valuenow', '50');
    expect(firstValueLabel).toBeInTheDocument();
    expect(secondValueLabel).toBeInTheDocument();
    expect(minLabel).toBeInTheDocument();
    expect(maxLabel).toBeInTheDocument();
  });

  it('renders with custom min and max', () => {
    const { getByText } = render(
      <Slider
        min={-100}
        max={200}
        value={[50]}
        onChange={jest.fn()}
        aria-label="Test slider"
      />,
    );

    const minLabel = getByText('-100');
    const maxLabel = getByText('200');

    expect(minLabel).toBeInTheDocument();
    expect(maxLabel).toBeInTheDocument();
  });

  it('renders with customized labels', () => {
    const { getByText, getByRole } = render(
      <Slider
        value={[50]}
        onChange={jest.fn()}
        aria-label="Test slider"
        formatLabel={(value) => {
          return `${value} $`;
        }}
      />,
    );

    const minLabel = getByText('0 $');
    const maxLabel = getByText('100 $');
    const valueLabel = getByText('50 $');
    const handle = getByRole('slider');

    expect(minLabel).toBeInTheDocument();
    expect(maxLabel).toBeInTheDocument();
    expect(valueLabel).toBeInTheDocument();
    expect(handle).toHaveAttribute('aria-valuetext', '50 $');
  });

  describe('when optional inputs are displayed', () => {
    it('renders one input when one value is provided', () => {
      const { container } = render(
        <Slider
          showInputs
          value={[50]}
          onChange={jest.fn()}
          aria-label="Test slider"
        />,
      );

      const input = container.querySelector('input');

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('value', '50');
      expect(input).toHaveAttribute('aria-label', 'Test slider');
    });

    it('renders two inputs when two values are provided', () => {
      const { container } = render(
        <Slider
          showInputs
          value={[30, 60]}
          onChange={jest.fn()}
          aria-label="Test slider"
        />,
      );

      const inputs = container.querySelectorAll('input');

      expect(inputs).toHaveLength(2);
      expect(inputs[0]).toHaveAttribute('value', '30');
      expect(inputs[1]).toHaveAttribute('value', '60');
    });

    it('when slider is disabled inputs are disabled too', () => {
      const { container } = render(
        <Slider
          showInputs
          disabled
          value={[30, 60]}
          onChange={jest.fn()}
          aria-label="Test slider"
        />,
      );

      const inputs = container.querySelectorAll('input');

      expect(inputs[0]).toBeDisabled();
      expect(inputs[1]).toBeDisabled();
    });

    it("when input's value has changed, slider's value is updated too", () => {
      const { container, getByRole } = render(<TestSliderWithSingleInput />);

      const input = container.querySelector('input');
      input && fireEvent.change(input, { target: { value: '42' } });

      const handle = getByRole('slider');

      expect(input).toBeInTheDocument();
      expect(handle).toHaveAttribute('aria-valuenow', '42');
    });

    it("for single input when it's value is less than slider min value, show error", () => {
      const { container } = render(<TestSliderWithSingleInput />);

      const input = container.querySelector('input');
      input && fireEvent.change(input, { target: { value: '-10' } });

      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it("for single input when it's value is greater than slider max value, show error", () => {
      const { container } = render(<TestSliderWithSingleInput />);

      const input = container.querySelector('input');
      input && fireEvent.change(input, { target: { value: '200' } });

      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it("for single input when it's value doesn't overlap with step, show error", () => {
      const { container } = render(<TestSliderWithSingleInput />);

      const input = container.querySelector('input');
      input && fireEvent.change(input, { target: { value: '10.5' } });

      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it("for two inputs when first one's value is less than slider min value, show error", () => {
      const { container } = render(<TestSliderWithInputs />);

      const inputs = container.querySelectorAll('input');
      inputs[0] && fireEvent.change(inputs[0], { target: { value: '-10' } });

      expect(inputs[0]).toHaveAttribute('aria-invalid', 'true');
    });

    it("for two inputs when first one's value is greater than second one, show error", () => {
      const { container } = render(<TestSliderWithInputs />);

      const inputs = container.querySelectorAll('input');
      inputs[0] && fireEvent.change(inputs[0], { target: { value: '70' } });

      expect(inputs[0]).toHaveAttribute('aria-invalid', 'true');
    });

    it("for two inputs when second one's value is less than first one, show error", () => {
      const { container } = render(<TestSliderWithInputs />);

      const inputs = container.querySelectorAll('input');
      inputs[1] && fireEvent.change(inputs[1], { target: { value: '10' } });

      expect(inputs[1]).toHaveAttribute('aria-invalid', 'true');
    });

    it("for two inputs when second one's value is greater than slider max value, show error", () => {
      const { container } = render(<TestSliderWithInputs />);

      const inputs = container.querySelectorAll('input');
      inputs[1] && fireEvent.change(inputs[1], { target: { value: '200' } });

      expect(inputs[1]).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('renders snapshot', () => {
    it('with one handle', () => {
      const { container } = render(
        <Slider
          inverted
          value={[30]}
          onChange={jest.fn()}
          aria-label="Test slider"
        />,
      );

      const slider = container.firstChild;
      expect(slider).toMatchSnapshot();
    });

    it('with two handles', () => {
      const { container } = render(
        <Slider
          inverted
          value={[20, 40]}
          onChange={jest.fn()}
          aria-label="Test slider"
        />,
      );

      const slider = container.firstChild;
      expect(slider).toMatchSnapshot();
    });

    it('with all labels hidden', () => {
      const { container } = render(
        <Slider
          hideLabels
          value={[20, 40]}
          onChange={jest.fn()}
          aria-label="Test slider"
        />,
      );

      const slider = container.firstChild;
      expect(slider).toMatchSnapshot();
    });

    it('with inputs instead of labels', () => {
      const { container } = render(
        <Slider
          showInputs
          value={[20, 40]}
          onChange={jest.fn()}
          aria-label="Test slider"
        />,
      );

      const slider = container.firstChild;
      expect(slider).toMatchSnapshot();
    });

    it('of inverted', () => {
      const { container } = render(
        <Slider
          inverted
          value={[50]}
          onChange={jest.fn()}
          aria-label="Test slider"
        />,
      );

      const slider = container.firstChild;
      expect(slider).toMatchSnapshot();
    });

    it('of disabled', () => {
      const { container } = render(
        <Slider
          disabled
          value={[50]}
          onChange={jest.fn()}
          aria-label="Test slider"
        />,
      );

      const slider = container.firstChild;
      expect(slider).toMatchSnapshot();
    });
  });
});
