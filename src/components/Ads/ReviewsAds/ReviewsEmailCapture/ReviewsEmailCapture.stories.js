import React from 'react';

import ReviewsEmailCapture from './index';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Ads/ReviewsAds/ReviewsEmailCapture',
  component: ReviewsEmailCapture,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
  onSubmit: () => {},
  success: false
};

const Template = (args) => <ReviewsEmailCapture {...args} />

export const Default = Template.bind({});
Default.args = {
  description: 'Shop smarter with our ATK Reviews team\'s expert guides and top picks',
  inputId: 'review-email-capture__detail',
  siteKey: 'atk',
  title: 'Sign up for the Well-Equipped Cook Newsletter',
  onSubmit: () => {},
  success: false
};

export const Cio = Template.bind({});
Cio.args = {
  description: 'Shop smarter with our ATK Reviews team\'s expert guides and top picks',
  inputId: 'review-email-capture__detail',
  siteKey: 'cio',
  title: 'Sign up for the Well-Equipped Cook Newsletter',
  onSubmit: () => {},
  success: false
};

export const Cco = Template.bind({});
Cco.args = {
  description: 'Shop smarter with our ATK Reviews team\'s expert guides and top picks',
  inputId: 'review-email-capture__detail',
  siteKey: 'cco',
  title: 'Sign up for the Well-Equipped Cook Newsletter',
  onSubmit: () => {},
  success: false
};

export const Success = Template.bind({});
Success.args = {
  description: 'Shop smarter with our ATK Reviews team\'s expert guides and top picks',
  inputId: 'review-email-capture__detail',
  siteKey: 'cco',
  title: 'Sign up for the Well-Equipped Cook Newsletter',
  onSubmit: () => {},
  success: true
};