import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardWrapper from './CardWrapper';
import DarkModeWrapper from '../../../config/decorators/DarkMode';
import backgroundParameters from '../../../config/backgrounds';
import { TallCardPropTypes } from '../TallCard/TallCard';
import { FeatureCardPropTypes } from '../FeatureCard/FeatureCard';
import { StandardCardPropTypes } from '../StandardCard/StandardCard';

const featureStandard : StandardCardPropTypes | FeatureCardPropTypes = {
  attributions: 'Episode • America’s Test Kitchen',
  contentType: 'episode',
  displayFavoritesButton: true,
  href: 'https://www.americastestkitchen.com/episode/658-savory-and-sweet-italian',
  imageAlt: 'Hosts Bridget and Dan on set at ATK',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592840035/mise-play/feature-card-wide.jpg',
  siteKey: 'atk',
  siteKeyFavorites: 'atk',
  stickers: [
    { type: 'priority', text: 'New' },
    { type: 'editorial', text: '23:23' },
  ],
  objectId: 'episode_1234',
  title: 'Savory and Sweet Italian',
};

const tallCardProps : TallCardPropTypes = {
  contentType: 'episode',
  dek: 'New episodes weekly',
  href: 'https://www.google.com',
  logoKey: 'atk',
  imageAlt: '',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592937037/mise-play/tall-card.jpg',
  overlayColor: '#a53015',
  siteKey: 'cco',
  stickers: [{ type: 'priority', text: 'Popular' }],
};

export default {
  title: 'Components/Cards/CardWrapper',
  component: CardWrapper,
  decorators: [DarkModeWrapper()],
  parameters: { actions: { argTypesRegex: '^on.*' }, backgrounds: { default: 'atk-dark-alt', ...backgroundParameters } },
} as ComponentMeta<typeof CardWrapper>;

const Template:ComponentStory<typeof CardWrapper> = args => <CardWrapper {...args} />;

export const Feature = Template.bind({});
Feature.args = {
  ctaText: 'Explore Recipes',
  ctaUrl: 'https://www.americastestkitchen.com/episodes/1234',
  item: featureStandard,
  title: 'Start Cooking',
  type: 'feature',
};

export const Standard = Template.bind({});
Standard.args = {
  ctaText: 'Explore Recipes',
  ctaUrl: 'https://www.americastestkitchen.com/episodes/1234',
  item: featureStandard,
  title: 'Start Cooking',
  type: 'standard',
};

export const Tall = Template.bind({});
Tall.args = {
  ctaText: 'Explore Recipes',
  ctaUrl: 'https://www.americastestkitchen.com/episodes/1234',
  item: tallCardProps,
  title: 'Start Cooking',
  type: 'tall',
};
