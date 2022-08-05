import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingCarousel, { LoadingCarouselProps } from './LoadingCarousel';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Carousels/LoadingCarousel',
  component: LoadingCarousel,
  decorators: [addThemedWrapper()],
} as ComponentMeta<typeof LoadingCarousel>;

const Template: ComponentStory<typeof LoadingCarousel> = (args: LoadingCarouselProps) => (
  <LoadingCarousel {...args} />
);

export const StandardCardCarousel = Template.bind({});
StandardCardCarousel.args = { type: 'standard' };

export const FeatureCardCarousel = Template.bind({});
FeatureCardCarousel.args = { type: 'feature' };

export const TallCardCarousel = Template.bind({});
TallCardCarousel.args = { type: 'tall' };

export const RelatedSmallCarousel = Template.bind({});
RelatedSmallCarousel.args = { type: 'related-small' };

export const RelatedRecipeCarousel = Template.bind({});
RelatedRecipeCarousel.args = { type: 'related-recipe' };

export const SuggestionCardCarousel = Template.bind({});
SuggestionCardCarousel.args = {
  intro: 'For folks who always want to know why?',
  ctaText: 'Explore 20 Seasons',
  title: "America's Test Kitchen",
  type: 'suggestion',
  count: 2,
};

export const DocumentListCarousel = Template.bind({});
DocumentListCarousel.args = {
  ...SuggestionCardCarousel.args,
  count: 4,
};
