import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';
import ReviewsEmailCapture, { ReviewsEmailCaptureProps } from './ReviewsEmailCapture';

export default {
  title: 'Components/Ads/ReviewsAds/ReviewsEmailCapture',
  decorator: [addThemedWrapper()],
  component: ReviewsEmailCapture,
  argTypes: { siteKey },
} as ComponentMeta<typeof ReviewsEmailCapture>;

const Template: ComponentStory<typeof ReviewsEmailCapture> = (args: ReviewsEmailCaptureProps) => (
  <ReviewsEmailCapture {...args} />
);

export const Default = Template.bind({});
Default.args = {
  description: 'Shop smarter with our ATK Reviews team\'s expert guides and top picks',
  inputId: 'review-email-capture__detail',
  title: 'Sign up for the Well-Equipped Cook Newsletter',
  onSubmit: () => {},
  success: false,
};

export const Wide = Template.bind({});
Wide.args = {
  description: 'Shop smarter with our ATK Reviews team\'s expert guides and top picks',
  inputId: 'review-email-capture__detail',
  isWide: true,
  title: 'Sign up for the Well-Equipped Cook Newsletter',
  onSubmit: () => {},
  success: false,
};

export const DefaultSuccess = Template.bind({});
DefaultSuccess.args = { ...Default.args, success: true };

export const DefaultWithKidsVariant = Template.bind({});
DefaultWithKidsVariant.args = { ...Default.args, variant: 'kidsVariant' };
