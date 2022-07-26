import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import CategoryCard from '../CategoryCard';
import breakpoints from '../../../../styles/breakpoints';

describe('CategoryCard component should', () => {
  const renderSvgComponent = () => {
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <CategoryCard
          assetType="svgIcon"
          browsePath="url"
          svgId="shoppingCart"
          tagline="Browse All Reviews"
        />,
      </ThemeProvider>,
    );
  };

  const renderProductComponent = () => {
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <CategoryCard
          assetType="productImage"
          browsePath="url"
          cloudinaryId="https://res.cloudinary.com/hksqkdlah/image/upload/v1616768835/ATK%20Landing%20Page/kitchen_basics_3x.jpg"
          tagline="Kitchen Basics"
        />,
      </ThemeProvider>,
    );
  };

  it('renders bubble SVG', () => {
    renderSvgComponent();
    expect(screen.queryAllByTestId('svg'));
  });

  it('renders bubble productImage from cloudinary', () => {
    renderProductComponent();
    expect(screen.getByText('Kitchen Basics'));
  });

  it('renders a tagline', () => {
    renderSvgComponent();
    expect(screen.getByText('Browse All Reviews'));
  });

  it('includes link to browse with tagline in q', () => {
    renderSvgComponent();
    expect(screen.getByRole('link').hasAttribute('href', 'url'));
  });
});
