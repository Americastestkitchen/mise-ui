import { ThemeProvider } from 'styled-components';
import React from 'react';

import CategoryCard from './index';
import { siteKey } from '../../../config/argTypes';

const ThemedCategoryCard = ({
  assetType,
  browsePath,
  cloudinaryId,
  page,
  siteKey,
  svgId,
  tagline,
}) => (
  <ThemeProvider theme={{ siteKey }}>
    <CategoryCard
      assetType={assetType}
      browsePath={browsePath}
      cloudinaryId={cloudinaryId}
      page={page}
      svgId={svgId}
      tagline={tagline}
    />
  </ThemeProvider>
);

export default {
  title: 'Components/Cards/CategoryCard',
  component: CategoryCard,
  argTypes: {
    siteKey
  }
};

const Template = ({...args}) => (
  <ThemedCategoryCard {...args} />
);

export const SvgImage = Template.bind({});
SvgImage.args = {
  assetType: "svgIcon",
  browsePath: "url",
  siteKey: "atk",
  svgId: "reviews",
  tagline: "Browse All Reviews"
};

export const ProductImage = Template.bind({});
ProductImage.args = {
  assetType: "productImage",
  browsePath: "url",
  cloudinaryId: "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_90/v1/ATK%20Landing%20Page/kitchen_basics_3x.png",
  siteKey: "atk",
  tagline: "Kitchen Basics"
};

export const RecipeSvg = Template.bind({});
RecipeSvg.args = {
  assetType: "svgIcon",
  browsePath: "url",
  siteKey: "atk",
  page: "recipes",
  svgId: "reviews",
  tagline: "Browse All Reviews"
}

export const RecipeProduct = Template.bind({});
RecipeProduct.args = {
  assetType: "productImage",
  browsePath: "url",
  cloudinaryId: "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_90/v1/ATK%20Landing%20Page/kitchen_basics_3x.png",
  page: "recipes",
  siteKey: "atk",
  tagline: "Kitchen Basics"
}
