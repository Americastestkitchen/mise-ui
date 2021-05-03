import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import PullQuote from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('PullQuote component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <PullQuote {...props} />
      </ThemeProvider>,
    )
  );

  it('render a quote icon when includeIcon prop is true', () => {
    renderComponent({ quote: 'Test Quote' });
    expect(screen.getByTestId('pull-quote__icon'));
  });

  it('not render a quote icon when includeIcon prop is false', () => {
    renderComponent({ includeIcon: false, quote: 'Test Quote' });
    expect(!screen.queryByTestId('pull-quote__icon'));
  });

  it('render quote text', () => {
    renderComponent({ quote: 'Test Quote' });
    expect(screen.queryByText('Test Quote'));
  });

  it('render an attribution when provided', () => {
    renderComponent({ quote: 'Test Quote', attribution: 'Test Citation' });
    expect(screen.getByTestId('pull-quote__attribution') && screen.queryByText('Test Citatioin'));
  });

  it('not render an attribution when not provided', () => {
    renderComponent({ quote: 'Test Quote' });
    expect(!screen.queryByTestId('pull-quote__attribution') && !screen.queryByText('Test Citation'));
  });
});
