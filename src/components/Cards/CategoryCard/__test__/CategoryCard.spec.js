import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import CategoryCard from '../index';

describe('CategoryCard component should', () => {
  const renderSvgComponent = () => {
    render(
      <CategoryCard
        assetType="svgIcon"
        browsePath="url"
        svgId="shoppingCart"
        tagline="Browse All Reviews"
      />,
    );
  };

  const renderProductComponent = () => {
    render(
      <CategoryCard
        assetType="productImage"
        browsePath="url"
        cloudinaryId="https://res.cloudinary.com/hksqkdlah/image/upload/v1616768835/ATK%20Landing%20Page/kitchen_basics_3x.jpg"
        tagline="Kitchen Basics"
      />,
    );
  };

  it('renders bubble SVG', () => {
    renderSvgComponent();
    expect(screen.queryAllByTestId('svg'));
  });

  it('renders bubble productImage from cloudinary', () => {
    renderProductComponent();
    expect(screen.getByAltText('Kitchen Basics'));
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
