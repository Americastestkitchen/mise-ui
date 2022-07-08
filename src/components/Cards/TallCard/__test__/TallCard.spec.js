import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import TallCard from '../TallCard';
import breakpoints from '../../../../styles/breakpoints';
import { cards } from '../../../../styles';

describe('TallCard component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <TallCard
          contentType="episode"
          dek="New episodes weekly"
          href="https://www.google.com"
          logoKey="atk"
          imageAlt="Image alt text"
          imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/v1592937037/mise-play/tall-card.jpg"
          overlayColor="#a53015"
          siteKey="cco"
          siteKeyFavorites="cco"
          stickers={[{ type: 'priority', text: 'Popular' }]}
        />
      </ThemeProvider>,
    )
  );

  it('render an image', () => {
    renderComponent();
    expect(screen.getByAltText('Image alt text'));
  });

  it('render a badge', () => {
    renderComponent();
    expect(screen.getByTestId('cco-badge'));
  });

  it('render a gradient overlay', () => {
    renderComponent();
    expect(screen.getByTestId('overlay'));
  });

  it('render a priority sticker', () => {
    renderComponent();
    expect(screen.getByText('Popular'));
  });

  it('render a dek', () => {
    renderComponent();
    expect(screen.getByText('New episodes weekly'));
  });

  // width and height are fixed for these cards
  it('have correct width and height', () => {
    renderComponent();
    const tallCard = screen.getByTestId('tall-card');
    expect(tallCard).toHaveStyleRule(`width: ${cards.standard.width.lg}`);
    expect(tallCard).toHaveStyleRule('height: 60rem');
  });
});
