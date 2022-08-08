import { ThemeProvider } from 'styled-components';
import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';
import CategoryCard from './CategoryCard';
// import { siteKey } from '../../../../config/argTypes';
import { siteKey } from '../../../argTypes';
import { addThemedWrapper } from '../../../config/decorators';

const assetType = {
  control: 'select',
  options: ['productImage', 'svgIcon'],
};

const page = {
  control: 'select',
  options: ['reviews', 'recipe'],
};

export default {
  title: 'Components/Cards/CategoryCard',
  component: CategoryCard,
  decorators: [addThemedWrapper()],
  argTypes: {
    siteKey,
    assetType,
  },
} as ComponentMeta<typeof CategoryCard>;

const Template: ComponentStory<typeof CategoryCard> = args => <CategoryCard {...args} />;

export const atkSvgImage = Template.bind({});
export const ccoProductImage = Template.bind({});
export const cioRecipeSvg = Template.bind({});
export const atkRecipeProduct = Template.bind({});

atkSvgImage.args = {
  assetType: 'svgIcon',
  browsePath: 'url',
  tagline: 'Browse All',
  svgId: 'reviews',
};

ccoProductImage.args = {
  assetType: 'productImage',
  browsePath: 'url',
  cloudinaryId: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_90/v1/ATK%20Landing%20Page/kitchen_basics_3x.png',
  tagline: 'Kitchen Basics',
};

cioRecipeSvg.args = {
  assetType: 'svgIcon',
  browsePath: 'url',
  page: 'recipes',
  svgId: 'reviews',
  tagline: 'Browse All Reviews',
};

atkRecipeProduct.args = {
  assetType: 'productImage',
  browsePath: 'url',
  cloudinaryId: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_90/v1/ATK%20Landing%20Page/kitchen_basics_3x.png',
  page: 'recipes',
  tagline: 'Kitchen Basics',
};
