import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { SuggestionCard } from '../index';
import breakpoints from '../../../../styles/breakpoints';

const baseRecipe = {
  dek: 'More flavorful and less prone to overcooking than lean breasts, chicken thighs are a perfect weeknight dinner.',
  href: '/recipes/6832',
  imageAlt: 'alternate-text',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_fill,dpr_2.0,f_auto,fl_lossy,g_faces:auto,w_300,q_auto:low/9704_sfs-easy-roast-chicken-thighs-clr-8-article',
  objectId: 'recipe_8125',
  siteKey: 'atk',
  subtitle: 'Serves 6 to 8   Takes 55 minutes',
  title: 'Oven-Roasted Chicken Thighs',
  onFavoriteClick: () => {},
  onSkipClick: () => {},
};

describe('SuggestionCard component', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider
        theme={{ breakpoints }}
      >
        <SuggestionCard
          {...props}
        />
      </ThemeProvider>,
    )
  );

  it('does renders an image', () => {
    renderComponent(baseRecipe);
    expect(screen.getByTestId('suggestion-img-true'));
  });

  it('does not render an image', () => {
    renderComponent({
      ...baseRecipe,
      imageUrl: '',
    });
    expect(screen.getByTestId('suggestion-img-false'));
  });

  it('does renders a badge', () => {
    renderComponent(baseRecipe);
    expect(screen.getByTestId('atk-badge'));
  });

  it('does renders a title', () => {
    renderComponent(baseRecipe);
    expect(screen.getByTestId('suggestion-title'));
  });

  it('does renders a favorite action', () => {
    renderComponent(baseRecipe);
    expect(screen.getByTestId('suggestion-action__favorite'));
  });

  it('does renders a skip action', () => {
    renderComponent(baseRecipe);
    expect(screen.getByTestId('suggestion-action__skip'));
  });

  it('does renders a sub-title', () => {
    renderComponent(baseRecipe);
    expect(screen.getByTestId('suggestion-sub-title'));
  });

  it('does not render a sub-title', () => {
    renderComponent({
      ...baseRecipe,
      subtitle: '',
    });
    expect(screen.queryByTestId('suggestion-sub-title')).toBeNull();
  });

  it('does not render a description', () => {
    renderComponent({
      ...baseRecipe,
      description: null,
    });
    expect(screen.queryByTestId('suggestion-description')).toBeNull();
  });
});
