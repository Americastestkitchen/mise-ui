import React from 'react';

import StandardCard from './index';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';
import { color } from '../../../styles';

export default {
  title: 'Components/Cards/StandardCard',
  component: StandardCard,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
};

const Template = args => <StandardCard key={Math.random()} {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  contentType: 'review',
  commentCount: 5,
  ctaText: 'Buy the Winner',
  ctaUrl: 'https://www.amazon.com/dp/B01JCNEJSO/?tag=ciosearchresult-20',
  displayCommentCount: true,
  displayFavoritesButton: true,
  displayLockIcon: false,
  favoriteRibbonColor: color.cork,
  imageAlt: '',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/s--bab2_EML--/c_scale,dpr_2.0,f_auto,h_172,q_auto:low,w_172/40784_sil-food-storage-containers-rubbermaid-brilliance-food-storage-container-large-96-cup-1991158',
  isFavorited: false,
  searchAttribution: true,
  searchComments: 5,
  shopPrices: {
    price: '29.09',
    salePrice: '10.00',
  },
  siteKey: 'cio',
  siteKeyFavorites: 'cio',
  stickers: [{ type: 'priority', text: 'New' }, { type: 'editorial', text: 'Trending' }],
  objectId: '',
  onClick: () => {},
  title: 'Plastic Food Storage Containers',
  href: 'https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2',
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  contentType: 'collection',
  commentCount: 1,
  displayCommentCount: true,
  displayFavoritesButton: false,
  displayLockIcon: true,
  imageAlt: '',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/SFS_stir_fried_ground_pork_topping_congee-1_1_la51ps',
  objectId: '',
  onClick: () => {},
  siteKey: "cio",
  siteKeyFavorites: "cio",
  stickers: [{ type: 'priority', text: 'New' }, { type: 'editorial', text: 'Quick' }],
  title: 'Congee (Chinese Rice Porridge) with Stir-Fried Ground Pork',
  href: 'https://www.cooksillustrated.com/recipes/12381-congee-chinese-rice-porridge-with-stir-fried-ground-pork?extcode=MASCD00L0&ref=new_search_experience_2',
};

export const NoImage = Template.bind({});
NoImage.args = {
  contentType: "Cookbook Collection",
  commentCount: 1,
  displayFavoritesButton: true,
  displayLockIcon: true,
  displayCommentCount: true,
  objectId: '',
  onClick: () => {},
  siteKey: 'cio',
  siteKeyFavorites: 'cio',
  stickers: [{ type: 'editorial', text: 'Make Ahead' }],
  title: 'Congee (Chinese Rice Porridge) with Stir-Fried Ground Pork',
  href: 'https://www.cooksillustrated.com/recipes/12381-congee-chinese-rice-porridge-with-stir-fried-ground-pork?extcode=MASCD00L0&ref=new_search_experience_2',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
 mode: 'dark',
 contentType: "review",
 commentCount: 5,
 ctaText: 'Buy the Winner',
 ctaUrl: 'https://www.amazon.com/dp/B01JCNEJSO/?tag=ciosearchresult-20',
 displayCommentCount: true,
 displayFavoritesButton: true,
 displayLockIcon: false,
 favoriteRibbonColor: '#FFFFF',
 imageAlt: '',
 imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/s--bab2_EML--/c_scale,dpr_2.0,f_auto,h_172,q_auto:low,w_172/40784_sil-food-storage-containers-rubbermaid-brilliance-food-storage-container-large-96-cup-1991158',
 isFavorited: false,
 siteKey: 'atk',
 siteKeyFavorites: 'atk',
 stickers: [{ type: 'priority', text: 'New' }, { type: 'editorial', text: 'Trending' }],
 objectId: '',
 onClick: () => {},
 title:  'Plastic Food Storage Containers',
 href: 'https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2',
};
