import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ReviewsMarketingHat, { ReviewsMarketingHatProps } from './ReviewsMarketingHat';

export default {
  title: 'Components/Ads/ReviewsAds/ReviewsMarketingHat',
  component: ReviewsMarketingHat,
  argTypes: { onSubmit: {
    action: 'submitted',
    parameter: '',
  } },
} as ComponentMeta<typeof ReviewsMarketingHat>;

const Template: ComponentStory<typeof ReviewsMarketingHat> = (args: ReviewsMarketingHatProps) => (
  <ReviewsMarketingHat {...args} />
);

export const Anonymous = Template.bind({});
Anonymous.args = {
  buttonText: 'GET ACCESS',
  description: 'All the reliably perfect recipes. All the most-trusted product reviews. Three sites. No paywalls. Just confident cooking.',
  headline: 'LIMITED-TIME OFFER',
  inputId: 'email-form__input',
  isAnonymous: true,
  title: 'All Access for 2 Months',
};

export const Registrant = Template.bind({});
Registrant.args = {
  buttonText: 'Get Free Access',
  description: 'Would you cook 700 eggs to find the best nonstick skillet? We did, so you don\'t have to. Rejoin now to buy the best products.',
  headline: 'Get instant access to all ratings & recipes',
  inputId: 'email-form__input',
  isAnonymous: false,
  title: '2-Week Free Trial',
};

export const SingleSite = Template.bind({});
SingleSite.args = {
  buttonText: 'Upgrade Now',
  description: 'Would you cook 700 eggs to find the best nonstick skillet? We did, so you don\'t have to. Rejoin now to buy the best products.',
  headline: 'Get instant access to all ratings & recipes',
  inputId: 'email-form__input',
  isAnonymous: false,
  title: 'Upgrade Now',
};

export const Former = Template.bind({});
Former.args = {
  buttonText: 'Rejoin Now',
  description: 'Would you cook 700 eggs to find the best nonstick skillet? We did, so you don\'t have to. Rejoin now to buy the best products.',
  headline: 'Get instant access to all ratings & recipes',
  inputId: 'email-form__input',
  isAnonymous: false,
  title: 'Rejoin Now',
};
