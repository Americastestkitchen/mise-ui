import React from 'react';

import ReviewsEmailCapture from './index';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Ads/ReviewsAds/ReviewsEmailCapture',
  component: ReviewsEmailCapture,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
};

const Template = (args) => <ReviewsEmailCapture {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: 'Shop smarter with our ATK Reviews team\'s expert guides and top picks',
  inputId: 'review-email-capture__detail',
  onSubmit: () => {},
  siteKey: 'atk',
  title: 'Sign up for the Well-Equipped Cook Newsletter',
};
