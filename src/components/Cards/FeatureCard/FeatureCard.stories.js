import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import FeatureCard from './index';

export default {
  title: 'Components/Cards/FeatureCard',
  component: FeatureCard,
  decorators: [withKnobs],
};

export const Default = () => (
  <FeatureCard
    attributions="Episode • Cook’s Country"
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

export const ShopItem = () => (
  <FeatureCard
    attributions=""
    contentType="reviewable"
    displayFavoritesButton
    discountedPrice="$35.99"
    imageAlt={text('Image alt text', '')}
    imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/v1617638854/ATK%20Landing%20Page/SPS_3x.jpg"
    siteKey="shop"
    siteKeyFavorites="cco"
    stickers={[{ type: 'priority', text: "Exclusive Deal"} ]}
    objectId=""
    onClick={action('result-click')}
    originalPrice="$59.99"
    title={text('Title', 'Tacos Two Ways')}
    href="https://shop.americastestkitchen.com/shop-all-equipment/capresso-silver-h2o-electric-kettle.html"
  />
);

export const Wide = () => (
  <FeatureCard
    attributions="Episode • America’s Test Kitchen"
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

export const WideWithPersonHeadShot = () => (
  <FeatureCard
    attributions="Popular • America’s Test Kitchen"
    contentType="episode"
    displayFavoritesButton
    href="http://google.com"
    imageAlt={text('Image alt text', 'Lorem ipsum')}
    imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592916093/mise-play/feature-card-wide-cta.jpg')}
    isWide
    siteKey="atk"
    siteKeyFavorites="atk"
    stickers={[{
      contentType: 'video',
      text: '4 videos',
      type: 'editorial',
    }]}
    objectId=""
    onClick={action('result-click')}
    personHeadShot={{
      imgCloudinaryId: 'mise-play/Image_21_3x.png',
    }}
    title={text('Title', '12-Inch Stainless-Steel Skillets')}
  />
);

export const WideWithCTA = () => (
  <FeatureCard
    attributions="Popular • America’s Test Kitchen"
    contentType="review"
    ctaText="Buy the Winner"
    ctaUrl="http://google.com"
    displayFavoritesButton
    href="http://google.com"
    imageAlt={text('Image alt text', 'Lorem ipsum')}
    imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592916093/mise-play/feature-card-wide-cta.jpg')}
    isWide
    siteKey="atk"
    siteKeyFavorites="atk"
    stickers={[{ type: 'editorial', text: 'Popular'}]}
    objectId=""
    onClick={action('result-click')}
    title={text('Title', '12-Inch Stainless-Steel Skillets')}
  />
);
