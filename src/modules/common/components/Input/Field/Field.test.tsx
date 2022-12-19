import { render } from '@testing-library/react';
import React from 'react';

import { Field } from './Field';

describe('Field', () => {
  it('should render the label, startAdorment, and input props', () => {
    const startAdorment = <div>Test adorment</div>;
    const input = <input type="text" value="Test input" onChange={jest.fn()} />;
    const { getByText, getByDisplayValue } = render(
      <Field label="Test label" startAdorment={startAdorment} input={input} />
    );

    expect(getByText('Test label')).toBeInTheDocument();
    expect(getByText('Test adorment')).toBeInTheDocument();
    expect(getByDisplayValue('Test input')).toBeInTheDocument();
  });
});
