import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import FinePrint from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('FinePrint component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <FinePrint
          title="Testing title"
          subtitle="Testing subtitle"
          content="Test Content"
        />
      </ThemeProvider>,
    )
  );

  it('renders title and subtitle', () => {
    renderComponent();
    expect(screen.getByText('Testing title') && screen.getByText('Testing subtitle'));
  });

  it('renders content inside accordion component', () => {
    renderComponent();
    expect(!screen.getByText('Test Content'));
    const button = screen.getByRole('button');
    button.click();
    expect(screen.getByText('Test Content'));
  });
});
