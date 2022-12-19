import { render, screen, fireEvent } from '@testing-library/react';
import { Main } from './';

describe('Main', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2020, 0, 0));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders the correct structure', () => {
    render(<Main />);

    expect(screen.getByText("Let's plan your")).toBeInTheDocument();
    expect(screen.getByText('Saving goal')).toBeInTheDocument();

    expect(screen.getByText('Buy a house')).toBeInTheDocument();
  });

  it('updates the amount and reach date inputs and verifies if the simulation was calculated correctly', async () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('button', { name: /go to previous month/i })
    ).toBeDisabled();

    fireEvent.change(screen.getByLabelText('Total amount'), {
      target: { value: '25000' },
    });

    for (let i = 0; i < 47; i++) {
      fireEvent.click(
        screen.getByRole('button', { name: /go to next month/i })
      );
    }

    expect(await screen.findByText('$520.83')).toBeInTheDocument();

    expect(screen.getByDisplayValue(/25,000/i)).toBeInTheDocument();

    expect(container.textContent).toContain(
      'You’re planning 48 monthly deposits to reach your $25,000 goal by December 2023.'
    );

    fireEvent.click(screen.getByRole('button', { name: /confirm/i }));
  });
});
