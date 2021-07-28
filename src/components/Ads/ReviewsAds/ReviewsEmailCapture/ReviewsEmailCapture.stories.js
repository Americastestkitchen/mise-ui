import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import { breakpoints } from '../../../../styles';
import ReviewsEmailCapture from './index';

export default {
  title: 'Components/Ads/ReviewsAds/ReviewsEmailCapture',
  component: ReviewsEmailCapture,
  decorators: [withKnobs],
};

const onSubmit = () => {
  // mixpanel & success prop from espresso
};

export const ReviewsEmailCaptureNoSuccess = () => (
  <ThemeProvider theme={{ breakpoints }}>
    <ReviewsEmailCapture
      description="Shop smarter with our ATK Reviews team's expert guides and top picks"
      inputId="review-email-capture__detail"
      onSubmit={onSubmit}
      title="Sign up for the Well-Equipped Cook Newsletter"
    />
  </ThemeProvider>
)

export const ReviewsEmailCaptureSuccess = () => (
  <ThemeProvider theme={{ breakpoints }}>
    <ReviewsEmailCapture
      description="Shop smarter with our ATK Reviews team's expert guides and top picks"
      inputId="review-email-capture__detail"
      onSubmit={onSubmit}
      success={true}
      title="Sign up for the Well-Equipped Cook Newsletter"
    />
  </ThemeProvider>
)
