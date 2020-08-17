import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { CustomBasicRefinementList } from '../index';
import MiseInstantSearch from '../../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import breakpoints from '../../../../../styles/breakpoints';

const items = [
  {
    isRefined: false,
    label: 'beginner',
    value: 'beginner',
  },
  {
    isRefined: false,
    label: 'intermediate',
    value: 'intermediate',
  },
  {
    isRefined: false,
    label: 'advanced',
    value: 'advanced',
  },
  {
    isRefined: false,
    label: 'all ages',
    value: 'all ages',
  },
];

describe('RefinementListBasic component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <MiseInstantSearch>
          <CustomBasicRefinementList
            attribute="search_difficulty_list"
            currentRefinement={[]}
            icon="chefHat"
            label="Difficulty"
            items={items}
            refine={() => {}}
          />
        </MiseInstantSearch>
      </ThemeProvider>,
    )
  );

  it('render a list with label \'Overall Time\'', () => {
    renderComponent();
    expect(screen.getByText('Difficulty'));
  });

  it('render filters with appropriate labels', () => {
    renderComponent();
    expect(screen.getByText('beginner'));
    expect(screen.getByText('intermediate'));
    expect(screen.getByText('advanced'));
    expect(screen.getByText('all ages'));
  });
});
