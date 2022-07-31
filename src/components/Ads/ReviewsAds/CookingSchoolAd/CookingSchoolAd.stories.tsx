import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { siteKey } from '../../../../config/argTypes';
import ThemedWrapper from '../../../../config/decorators/ThemedWrapper';
import CookingSchoolAd from './CookingSchoolAd';

export default {
  title: 'Components/Ads/ReviewsAds/CookingSchoolAd',
  component: CookingSchoolAd,
  argTypes: { siteKey },
} as ComponentMeta<typeof CookingSchoolAd>;

const Template: ComponentStory<typeof CookingSchoolAd> = args => (
  <CookingSchoolAd {...args} />
);

export const ReviewsLanding = Template.bind({});
ReviewsLanding.args = {
  deviceType: 'desktop',
  identifier: 'landing',
  href: '/order?incode=MAR1DCS1M&mdc=SF0110SM8KLM8P',
};
ReviewsLanding.decorators = [
  ThemedWrapper(),
];

export const ReviewsLandingMobile = Template.bind({});
ReviewsLandingMobile.args = {
  deviceType: 'mobile',
  identifier: 'landing',
  href: '/order?incode=MAR1DCS1M&mdc=SF0110SM8KLM8P',
};

export const ReviewsDetailPage = Template.bind({});
ReviewsDetailPage.args = {
  deviceType: 'desktop',
  identifier: 'detail',
  href: '/order?incode=MAR1DCS1M&mdc=SF0110SM8KLM8P',
};
ReviewsDetailPage.decorators = [
  ThemedWrapper(),
];

export const ReviewsDetailPageMobile = Template.bind({});
ReviewsDetailPageMobile.args = {
  deviceType: 'mobile',
  identifier: 'detail',
  href: '/order?incode=MAR1DCS1M&mdc=SF0110SM8KLM8P',
};
