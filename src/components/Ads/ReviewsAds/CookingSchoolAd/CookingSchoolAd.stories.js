import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs/react';

import { breakpoints } from '../../../../styles';
import CookingSchoolAd from './index';

export default {
  title: 'Components|Ads/ReviewsAds/CookingSchoolAd',
  component: CookingSchoolAd,
  decorators: [withKnobs],
};

const onClick = () => {
  // mixpanel & processing from espresso
};

export const ReviewsLanding = () => (
  <ThemeProvider theme={{ breakpoints }}>
    <CookingSchoolAd
      deviceType="desktop"
      identifier="landing"
      incode="MAR1DCS1M"
      mdc="SF0110SM8KLM8P"
      onClick={onClick}
    />
  </ThemeProvider>
)

export const ReviewsLandingMobile = () => (
    <ThemeProvider theme={{ breakpoints }}>
      <CookingSchoolAd
        deviceType="mobile"
        identifier="landing"
        incode="MAR1DCS1M"
        mdc="SF0110SM8KLM8P"
        onClick={onClick}
      />
    </ThemeProvider>
  )

export const RecipeDetail = () => (
  <ThemeProvider theme={{ breakpoints }}>
    <CookingSchoolAd
      deviceType="desktop"
      identifier="detail"
      incode="MAR1DCS1M"
      mdc="SF0110SM8KLM8P"
      onClick={onClick}
    />
  </ThemeProvider>
)
