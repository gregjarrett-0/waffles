import React, { useRef, useEffect } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { Button } from '../index';
import { AddCircle, ChevronRight } from '../../icon';

// These can probably be moved into a global location for all tests at a later date
const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation();

afterEach(() => {
  consoleErrorMock.mockReset();
  consoleWarnMock.mockReset();
});

const variants = [
  'primary',
  'secondary',
  'plain',
  'destructive',
  'upgrade',
] as const;
const sizes = ['small', 'medium', 'large'] as const;

type TestComponentProps = {
  to: string;
} & React.ComponentPropsWithoutRef<'a'>;

function TestComponent({ children, to, ...restProps }: TestComponentProps) {
  return (
    <a href={to} {...restProps}>
      {children}
    </a>
  );
}

function TestRefButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return <Button ref={buttonRef}>Focused With Ref</Button>;
}

describe('Button', () => {
  // Ensure no warnings or errors have been logged to the console
  afterAll(() => {
    expect(consoleErrorMock).not.toBeCalled();
    expect(consoleWarnMock).not.toBeCalled();
  });

  it('renders a button containing the text', () => {
    const { container } = render(<Button>Follow Taylor Swift</Button>);

    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Follow Taylor Swift');
  });

  it('renders a button containing the text and in title case', () => {
    const { container } = render(
      <Button>view all of taylor swift&apos;s concerts</Button>,
    );

    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("View All of Taylor Swift's Concerts");
  });

  it('renders a button with text without title case', () => {
    const { container } = render(
      <Button disableTitleCase>
        view all of taylor swift&apos;s concerts
      </Button>,
    );

    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("view all of taylor swift's concerts");
  });

  it('handles click event correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Follow Taylor Swift</Button>,
    );

    const button = getByText('Follow Taylor Swift');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles focus correctly', () => {
    const handleFocus = jest.fn();
    const { getByText } = render(
      <Button onFocus={handleFocus}>Follow Taylor Swift</Button>,
    );

    const button = getByText('Follow Taylor Swift');
    fireEvent.focus(button);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('sets the type on the button', () => {
    const { container } = render(<Button type="submit">Submit</Button>);

    const button = container.querySelector('button[type=submit]');

    expect(button).toBeInTheDocument();
  });

  it('sets the data attribute on the button', () => {
    const { getByTestId } = render(
      <Button data-testid="taylors-button">Follow Taylor Swift</Button>,
    );

    const button = getByTestId('taylors-button');

    expect(button).toBeInTheDocument();
  });

  it('sets the aria-label on the button', () => {
    const { getByLabelText } = render(
      <Button aria-label="Accessible button">Follow Taylor Swift</Button>,
    );

    const button = getByLabelText('Accessible button');

    expect(button).toBeInTheDocument();
  });

  it('renders the disabled button', () => {
    const { getByText } = render(<Button disabled>Follow Taylor Swift</Button>);

    const button = getByText('Follow Taylor Swift').closest('button');

    expect(button).toBeDisabled();
  });

  it('renders as a link element', () => {
    const { container } = render(
      <Button as="a" href="https://fanpage.com">
        Go to Fanpage
      </Button>,
    );

    const link = container.querySelector('a');

    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Go to Fanpage');
    expect(link).toHaveAttribute('href', 'https://fanpage.com');
  });

  it('renders button with default size icon only and required aria-label', () => {
    const { container, getByLabelText } = render(
      <Button icon={<AddCircle />} aria-label="Accessible button" />,
    );

    const button = getByLabelText('Accessible button');
    const icon = container.querySelector('svg');

    expect(button).toBeInTheDocument();
    expect(button).toContainElement(icon);
    expect(icon).toHaveAttribute('width', '16');
    expect(icon).toHaveAttribute('height', '16');
  });

  it('renders button with small size and small icon', () => {
    const { container } = render(
      <Button
        size="small"
        icon={<AddCircle />}
        aria-label="Accessible button"
      />,
    );

    const icon = container.querySelector('svg');
    expect(icon).toHaveAttribute('width', '14');
    expect(icon).toHaveAttribute('height', '14');
  });

  it('renders icon of custom size', () => {
    const { container, getByLabelText } = render(
      <Button
        icon={<AddCircle size="xsmall" />}
        aria-label="Accessible button"
      />,
    );

    const button = getByLabelText('Accessible button');
    const icon = container.querySelector('svg');

    expect(button).toBeInTheDocument();
    expect(button).toContainElement(icon);
    expect(icon).toHaveAttribute('width', '12');
    expect(icon).toHaveAttribute('height', '12');
  });

  it('renders left icon', () => {
    const { container, getByText } = render(
      <Button iconLeft={<AddCircle />}>Add to Fanpage</Button>,
    );

    const button = getByText('Add to Fanpage').closest('button');
    const icon = container.querySelector('svg');

    expect(button).toBeInTheDocument();
    expect(button).toContainElement(icon);
  });

  it('renders right icon', () => {
    const { container, getByText } = render(
      <Button iconRight={<ChevronRight />}>Fanpage</Button>,
    );

    const button = getByText('Fanpage').closest('button');
    const icon = container.querySelector('svg');

    expect(button).toBeInTheDocument();
    expect(button).toContainElement(icon);
  });

  it('renders both left and right icons', () => {
    const { container, getByText } = render(
      <Button iconLeft={<AddCircle />} iconRight={<ChevronRight />}>
        Add to Fanpage
      </Button>,
    );

    const button = getByText('Add to Fanpage');
    const icons = container.querySelectorAll('svg');

    expect(button).toBeInTheDocument();
    expect(icons).toHaveLength(2);
  });

  it('renders loader with isLoading prop', () => {
    const { getByText, getByTestId } = render(
      <Button isLoading>Add to Fanpage</Button>,
    );

    const button = getByText('Loading…').closest('button');
    const loader = getByTestId('loader-wrapper');

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(loader).toBeInTheDocument();
  });

  it('renders full width button', () => {
    const { getByText } = render(
      <Button fullWidth>Follow Taylor Swift</Button>,
    );

    const button = getByText('Follow Taylor Swift').closest('button');

    expect(button).toHaveStyle('width: 100%');
  });

  it('requires props owned by custom component passed into "as" prop', () => {
    const { container } = render(
      <Button to="http://fanpage.com" as={TestComponent}>
        As a Custom Component
      </Button>,
    );

    const customComponent = container.querySelector('a');

    expect(customComponent).toBeInTheDocument();
    expect(customComponent).toHaveTextContent('As a Custom Component');
    expect(customComponent).toHaveAttribute('href', 'http://fanpage.com');
  });

  it('renders snapshot of focused state', () => {
    const { getByText } = render(<Button>Test</Button>);

    const button = getByText('Test').closest('button') as HTMLButtonElement;
    fireEvent.focus(button);

    expect(button).toMatchSnapshot();
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefButton />);

    const button = container.querySelector('button');

    expect(button).toHaveFocus();
  });

  describe('renders snapshot of', () => {
    variants.forEach((variant) => {
      sizes.forEach((size) => {
        it(`variant ${variant} and size ${size}`, () => {
          const { container } = render(
            <Button variant={variant} size={size}>
              Test
            </Button>,
          );

          const button = container.querySelector('button');
          expect(button).toMatchSnapshot();
        });
      });
    });
  });

  describe('renders snapshot of inverted', () => {
    variants.forEach((variant) => {
      sizes.forEach((size) => {
        it(`variant ${variant} and size ${size}`, () => {
          const { container } = render(
            <Button inverted variant={variant} size={size}>
              Test
            </Button>,
          );

          const button = container.querySelector('button');
          expect(button).toMatchSnapshot();
        });
      });
    });
  });

  describe('renders snapshot of isLoading variants', () => {
    variants.forEach((variant) => {
      sizes.forEach((size) => {
        it(`variant ${variant} and size ${size}`, () => {
          const { container } = render(
            <Button inverted variant={variant} size={size} isLoading>
              Test
            </Button>,
          );

          const button = container.querySelector('button');
          expect(button).toMatchSnapshot();
        });
      });
    });
  });

  describe('renders snapshot of disabled medium', () => {
    variants.forEach((variant) => {
      it(`variant ${variant}`, () => {
        const { container } = render(
          <Button disabled variant={variant} size="medium">
            Test
          </Button>,
        );

        const button = container.querySelector('button');
        expect(button).toMatchSnapshot();
      });
    });
  });
});

describe('Button errors and warnings', () => {
  it('empty string children should log a console.error', async () => {
    const { container } = render(<Button>{''}</Button>);

    let button;
    await waitFor(() => {
      button = container.querySelector('button');
    });

    expect(button).toBeInTheDocument();
    expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).not.toBeCalled();
  });

  it('assigning redundant icon size should log a console.warn', async () => {
    const { container } = render(
      <Button
        icon={<AddCircle size="medium" />}
        aria-label="Button with icon"
      />,
    );

    let button;
    await waitFor(() => {
      button = container.querySelector('button');
    });

    expect(button).toBeInTheDocument();
    expect(consoleErrorMock).not.toBeCalled();
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
  });
});
