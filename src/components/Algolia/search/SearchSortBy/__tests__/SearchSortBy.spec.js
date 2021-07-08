import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import SearchSortBy from '../index';
import MiseInstantSearch from '../../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import breakpoints from '../../../../../styles/breakpoints';

describe('SearchSortBy component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <MiseInstantSearch>
          <SearchSortBy />
        </MiseInstantSearch>
      </ThemeProvider>,
    )
  );

  it('render an Accordion with label \'Sort By\'', () => {
    renderComponent();
    expect(screen.getAllByText('Sort By'));
  });

  it('render a sorting filters with appropriate labels', () => {
    renderComponent();
    expect(screen.getByText('Relevance'));
    expect(screen.getByText('Popularity'));
    expect(screen.getByText('Publish Date'));
  });
});
