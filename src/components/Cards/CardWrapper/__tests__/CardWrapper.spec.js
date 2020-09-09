import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import CardWrapper from '../index';
import breakpoints from '../../../../styles/breakpoints';

const wideCard = {
  attributions: 'Episode • America’s Test Kitchen',
  contentType: 'episode',
  displayFavoritesButton: true,
  href: 'https://www.americastestkitchen.com/episode/658-savory-and-sweet-italian',
  imageAlt: 'Hosts Bridget and Dan on set at ATK',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592840035/mise-play/feature-card-wide.jpg',
  isWide: true,
  siteKey: 'atk',
  siteKeyFavorites: 'atk',
  stickers: [
    { type: 'priority', text: 'New' },
    { type: 'editorial', text: '23:23' },
  ],
  objectId: 'episode_1234',
  title: 'Savory and Sweet Italian',
};

describe('CardWrapper component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <CardWrapper
          ctaText="Explore Recipes"
          ctaUrl="https://www.americastestkitchen.com/episodes/1234"
          item={wideCard}
          title="Start Cooking"
          type="feature"
        />
      </ThemeProvider>,
    )
  );

  it('render a title', () => {
    renderComponent();
    expect(screen.getByText('Start Cooking'));
  });

  it('render a cta', () => {
    renderComponent();
    expect(screen.getByText('Explore Recipes >'));
  });

  it('render a card', () => {
    renderComponent();
    expect(screen.getByTestId('feature-card'));
  });
});
