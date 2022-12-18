import { render, screen, fireEvent } from '@testing-library/react';
import { MonthSelector } from './MonthSelector';

describe('MonthSelector', () => {
  const props = {
    value: new Date(2022, 0, 1),
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the correct month and year', () => {
    render(<MonthSelector {...props} />);

    expect(screen.getByText('January')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  it('calls onChange when the left button is clicked', () => {
    render(<MonthSelector {...props} />);

    fireEvent.click(screen.getByLabelText('go to previous month'));

    expect(props.onChange).toHaveBeenCalledWith(new Date(2021, 11, 1));
  });

  it('calls onChange when the right button is clicked', () => {
    render(<MonthSelector {...props} />);

    fireEvent.click(screen.getByLabelText('go to next month'));

    expect(props.onChange).toHaveBeenCalledWith(new Date(2022, 1, 1));
  });

  it('should pass props directly to button components when using the buttonProps prop', () => {
    render(
      <MonthSelector
        {...props}
        buttonProps={{
          left: {
            disabled: true,
          },
          right: {
            disabled: true,
          },
        }}
      />
    );

    expect(screen.getByLabelText('go to previous month')).toBeDisabled();
    expect(screen.getByLabelText('go to next month')).toBeDisabled();
  });
});
