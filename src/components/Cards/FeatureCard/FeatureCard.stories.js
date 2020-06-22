import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import FeatureCard from './index';

export default {
  title: 'Components|Cards/FeatureCard',
  component: FeatureCard,
  decorators: [withKnobs],
};

export const Episode = () => (
  <FeatureCard
    attributions="Episode • Cook's Country"
    contentType="episode"
    displayFavoritesButton
    imageAlt={text('Image alt text', '')}
    imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1591972592/mise-play/feature-card-tacos.jpg')}
    siteKey="cco"
    siteKeyFavorites="cco"
    stickers={[{ type: 'priority', text: 'New' }, { type: 'editorial', text: '28:03' }]}
    objectId=""
    onClick={action('result-click')}
    title={text('Title', 'Tacos Two Ways')}
    href="https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2"
  />
);

export const Article = () => (
  <FeatureCard
    attributions="Article • Cook’s Illustrated"
    contentType="article"
    displayFavoritesButton
    imageAlt={text('Image alt text', '')}
    imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592418440/mise-play/showstopper-melon-salad.jpg')}
    siteKey="cio"
    siteKeyFavorites="cio"
    stickers={[{ type: 'priority', text: 'New' }]}
    objectId=""
    onClick={action('result-click')}
    title={text('Title', 'Showstopper Melon Salad')}
    href="https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2"
  />
);

export const FeatureCardWide = () => (
  <FeatureCard
    attributions="Episode • America's Test Kitchen"
    contentType="episode"
    displayFavoritesButton
    href="https://www.americastestkitchen.com/episode/658-savory-and-sweet-italian"
    imageAlt={text('Image alt text', 'Hosts Bridget and Dan on set at ATK')}
    imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592840035/mise-play/feature-card-wide.jpg')}
    isWide
    siteKey="atk"
    siteKeyFavorites="atk"
    stickers={[{ type: 'priority', text: 'New' }, { type: 'editorial', text: '23:23'}]}
    objectId=""
    onClick={action('result-click')}
    title={text('Title', 'Savory and Sweet Italian')}
  />
);
