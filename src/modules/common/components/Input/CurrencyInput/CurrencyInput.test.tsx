import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CurrencyInput } from './CurrencyInput';

describe('CurrencyInput', () => {
  it('updates the value when the input changes', () => {
    const onChangeMock = jest.fn();
    render(
      <CurrencyInput
        label="Amount"
        value="100"
        onChange={onChangeMock}
        name="currency"
      />
    );

    const input = screen.getByLabelText('Amount');

    fireEvent.change(input, { target: { value: '200' } });

    expect(onChangeMock).toHaveBeenCalledWith('200');
  });
});
