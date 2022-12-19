import React from 'react';
import { render, screen } from '@testing-library/react';
import { Default } from './index';

describe('Default', () => {
  it('renders the correct structure', () => {
    render(
      <Default>
        <p>Test content</p>
      </Default>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
