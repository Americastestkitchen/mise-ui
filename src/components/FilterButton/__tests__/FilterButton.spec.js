import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import FilterButton from '../index';
import breakpoints from '../../../styles/breakpoints';

describe('FilterButton component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <FilterButton {...props} />
      </ThemeProvider>,
    )
  );

  it('render a filter svg', () => {
    renderComponent();
    expect(screen.getByTestId('filter-icon'));
  });

  it('render text \'Filter\' by default', () => {
    renderComponent({ hasAccess: true });
    expect(screen.getByText('Filter'));
  });

  it('render text pass by prop', () => {
    renderComponent({ text: 'MORE SEASONS' });
    expect(screen.getByText('MORE SEASONS'));
  });
});
