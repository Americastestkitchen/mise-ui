import React from 'react';

import CategoryCard from './index';

export default {
  title: 'Components|Cards/CategoryCard',
  component: CategoryCard,
};

export const DefaultSvg = () => (
  <CategoryCard 
    assetType="svgIcon"
    browsePath="url"
    svgId="reviews"
    tagline="Browse All Reviews"
  />
);

export const ProductImage = () => (
  <CategoryCard 
    assetType="productImage"
    browsePath="url"
    cloudinaryId="https://res.cloudinary.com/hksqkdlah/image/upload/v1616768835/ATK%20Landing%20Page/kitchen_basics_3x.jpg"
    tagline="Kitchen Basics"
  />
);