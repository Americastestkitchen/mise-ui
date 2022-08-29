import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Stats } from '../ResultsCount';
import breakpoints from '../../../../../styles/breakpoints';

describe('ResultsCount component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <Stats {...props} />
      </ThemeProvider>,
    )
  );

  it('render singluar result count', () => {
    renderComponent({ nbHits: 1 });
    expect(screen.getByText('1 Result'));
  });

  it('render plural result count', () => {
    renderComponent({ nbHits: 5 });
    expect(screen.getByText('5 Results'));
  });
});
