import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import FeatureCard from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('FeatureCard component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <FeatureCard
          attributions="Episode • Cook's Country"
          contentType="episode"
          displayFavoritesButton
          imageAlt="Image alt text"
          imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/v1591972592/mise-play/feature-card-tacos.jpg"
          siteKey="cco"
          siteKeyFavorites="cco"
          stickers={[{ type: 'priority', text: 'New' }, { type: 'editorial', text: '28:03' }]}
          objectId=""
          title="Tacos Two Ways"
          href="https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2"
        />
      </ThemeProvider>,
    )
  );

  it('render an image', () => {
    renderComponent();
    expect(screen.getByAltText('Image alt text'));
  });

  it('render a title', () => {
    renderComponent();
    expect(screen.getByText('Tacos Two Ways'));
  });

  it('render a badge', () => {
    renderComponent();
    expect(screen.getByTestId('cco-badge'));
  });

  it('render a favorites button', () => {
    renderComponent();
    expect(screen.getByTestId('favorite-button'));
  });

  it('render a priority sticker', () => {
    renderComponent();
    expect(screen.getByText('New'));
  });

  it('render an editorial sticker', () => {
    renderComponent();
    expect(screen.getByText('28:03'));
  });

  it('render an attribution', () => {
    renderComponent();
    expect(screen.getByText('Episode • Cook\'s Country'));
  });

  // width and height are fixed for these cards
  it('have correct width and height', () => {
    renderComponent();
    const featureCard = screen.getByTestId('feature-card');
    expect(featureCard).toHaveStyleRule('width: 27.2rem');
    expect(featureCard).toHaveStyleRule('height: 40rem');
  });
});
