import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { CustomCurrentRefinements } from '../CurrentRefinements';
import breakpoints from '../../../../../styles/breakpoints';

describe('CurrentRefinements component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <CustomCurrentRefinements
          handleClick={() => {}}
          items={[{
            items: [
              {
                label: 'Vegan',
                value: 'vegan',
              },
              {
                label: 'Vegetarian',
                value: 'vegetarian',
              },
              {
                label: 'Italian',
                value: 'italian',
              },
            ],
          }]}
          refine={() => {}}
        />
      </ThemeProvider>,
    )
  );

  it('render a label and button for each refined filter', () => {
    renderComponent();
    expect(screen.getByText('Vegan'));
    expect(screen.getByText('Vegetarian'));
    expect(screen.getByText('Italian'));
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });
});
