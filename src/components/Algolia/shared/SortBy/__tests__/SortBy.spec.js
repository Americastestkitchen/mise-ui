import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { CustomSortBy } from '../index';
import { color } from '../../../../../styles';
import breakpoints from '../../../../../styles/breakpoints';

describe('SortBy component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <CustomSortBy {...props} refine={() => {}} />
      </ThemeProvider>,
    )
  );

  it('render filled in radio for refined value', () => {
    renderComponent({
      defaultRefinement: 'published_date_desc',
      items: [
        {
          label: 'Published Date',
          value: 'published_Date',
        },
      ],
    });
    expect(screen.getByTestId('sort-by__radio')).toHaveStyleRule(`background-color: ${color.mint};`);
  });

  it('render empty radio for unrefined value', () => {
    renderComponent({
      defaultRefinement: 'published_date_desc',
      items: [
        {
          isRefined: false,
          label: 'Published Date',
          value: 'published_Date',
        },
      ],
    });
    expect(screen.getByTestId('sort-by__radio')).toHaveStyleRule('background-color: transparent;');
  });
});
