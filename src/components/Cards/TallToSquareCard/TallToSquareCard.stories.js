import React from 'react';

import TallToSquareCard from './index';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Cards/TallToSquareCard',
  component: TallToSquareCard,
};

const Template = (args) => <TallToSquareCard {...args} />;

export const WithSticker = Template.bind({});
WithSticker.args = {
  backgroundImageIds: {
    square: 'atk-kids/kids-hp-preschool-card-square',
    tall: 'atk-kids/kids-hp-preschool-card-tall',
  },
  description: 'Discover <span>food-based play</span> with <span>themed boxes</span> like Colors, On the Farm & Restaurants.',
  gradientColor: '#378590',
  highlightColor: '#057477',
  href: 'https://www.americastestkitchen.com/kids/pcc-how-it-works?ref=KidsHomeATF',
  stickerText: 'Kids 3-5',
  title: 'Preschool Chefs’ Club',
};

export const WithoutSticker = Template.bind({});
WithoutSticker.args = {
  backgroundImageIds: {
    square: 'atk-kids/kids-hp-youtube-card-square',
    tall: 'atk-kids/kids-hp-youtube-card-tall',
  },
  description: 'ATK <span>kid testers cook our greatest</span> hit recipes & share fun, basic culinary techniques.',
  gradientColor: '#9a5c00',
  highlightColor: '#DD6E00',
  href: 'https://www.youtube.com/channel/UCc-4urZUHqwiTYKCGYW_DXg',
  newTab: true,
  title: 'YouTube',
};
