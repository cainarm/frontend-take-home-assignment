import { render, screen, fireEvent, act } from '@testing-library/react';
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

  describe('arrow keys', () => {
    it('handles the keydown event for the left arrow key', async () => {
      render(<MonthSelector {...props} />);

      fireEvent.focus(screen.getByLabelText('year'));

      fireEvent.keyDown(screen.getByLabelText('year'), { key: 'ArrowLeft' });

      expect(props.onChange).toHaveBeenCalled();
    });

    it('handles the keydown event for the right arrow key', async () => {
      render(<MonthSelector {...props} />);

      fireEvent.focus(screen.getByLabelText('year'));

      fireEvent.keyDown(screen.getByLabelText('year'), { key: 'ArrowRight' });

      expect(props.onChange).toHaveBeenCalled();
    });

    it('should not dispatch when buttons are disabled', () => {
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

      fireEvent.focus(screen.getByLabelText('year'));

      fireEvent.keyDown(screen.getByLabelText('year'), { key: 'ArrowRight' });
      fireEvent.keyDown(screen.getByLabelText('year'), { key: 'ArrowLeft' });

      expect(props.onChange).not.toHaveBeenCalled();
    });
  });
});
