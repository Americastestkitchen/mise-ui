import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { CustomClearRefinements } from '../ClearRefinements';
import breakpoints from '../../../../../styles/breakpoints';

describe('ClearRefinements component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <CustomClearRefinements
          handleClick={() => {}}
          items={[{}, {}, {}]}
          refine={() => {}}
        />
      </ThemeProvider>,
    )
  );

  it('render a \'Clear Filters\' button', () => {
    renderComponent();
    expect(screen.getByText('Clear filters'));
  });
});
