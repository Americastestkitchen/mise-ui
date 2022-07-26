import { ThemeProvider } from 'styled-components';
import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import CategoryCard from './CategoryCard';

export default {
  title: 'Components/Cards/CategoryCard',
  component: CategoryCard,
} as ComponentMeta<typeof CategoryCard>;

export const atkSvgImage = () => (
  <ThemeProvider theme={{ siteKey: 'atk' }}>
    <CategoryCard
      assetType="svgIcon"
      browsePath="url"
      tagline="Browse All"
      svgId="reviews"
    />
  </ThemeProvider>
);

export const ccoProductImage = () => (
  <ThemeProvider theme={{ siteKey: 'cco' }}>
    <CategoryCard
      assetType="productImage"
      browsePath="url"
      cloudinaryId="https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_90/v1/ATK%20Landing%20Page/kitchen_basics_3x.png"
      tagline="Kitchen Basics"
    />
  </ThemeProvider>
);

export const cioRecipeSvg = () => (
  <ThemeProvider theme={{ siteKey: 'cio' }}>
    <CategoryCard
      assetType="svgIcon"
      browsePath="url"
      page="recipes"
      svgId="reviews"
      tagline="Browse All Reviews"
    />
  </ThemeProvider>
);

export const atkRecipeProduct = () => (
  <ThemeProvider theme={{ siteKey: 'cio' }}>
    <CategoryCard
      assetType="productImage"
      browsePath="url"
      cloudinaryId="https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_90/v1/ATK%20Landing%20Page/kitchen_basics_3x.png"
      page="recipes"
      tagline="Kitchen Basics"
    />
  </ThemeProvider>
);
