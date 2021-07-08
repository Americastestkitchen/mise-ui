import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import SearchNumericMenu from '../index';
import MiseInstantSearch from '../../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import breakpoints from '../../../../../styles/breakpoints';

describe('SearchNumericMenu component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <MiseInstantSearch>
          <SearchNumericMenu
            attribute="search_overall_time"
            icon="time"
            items={[
              { label: '15 minutes or under', end: 15, noRefinement: true },
              { label: '30 minutes or under', end: 30, noRefinement: true },
              { label: '60 minutes or under', end: 60, noRefinement: true },
              { label: 'Over 60 minutes', start: 60, noRefinement: true },
            ]}
            showHideLabel="Overall Time"
          />
        </MiseInstantSearch>
      </ThemeProvider>,
    )
  );

  it('render an Accordion with label \'Overall Time\'', () => {
    renderComponent();
    expect(screen.getAllByText('Overall Time'));
  });
});
