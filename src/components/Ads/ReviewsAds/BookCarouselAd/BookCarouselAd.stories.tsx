import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ThemedWrapper from '../../../../config/decorators/ThemedWrapper';
import BookCarouselAd from './BookCarouselAd';

export default {
  title: 'Components/Ads/ReviewsAds/BookCarouselAd',
  component: BookCarouselAd,
  decorators: [ThemedWrapper()],
} as ComponentMeta<typeof BookCarouselAd>;

const Template: ComponentStory<typeof BookCarouselAd> = args => (
  <BookCarouselAd {...args} />
);

export const Default = Template.bind({});
Default.args = {
  sourceKey: 'CARDDTVAA',
};
