import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import { breakpoints } from '../../../../styles';
import ReviewsMarketingHat from './index';

export default {
  title: 'Components/Ads/ReviewsAds/ReviewsMarketingHat',
  component: ReviewsMarketingHat,
  decorators: [withKnobs],
};

const handleSubmit = () => {
  // mixpanel & processing from espresso
}

export const DefaultFormer = () => (
<ThemeProvider theme={{ breakpoints }}>
  <ReviewsMarketingHat 
    buttonText="Rejoin Now"
    description="Would you cook 700 eggs to find the best nonstick skillet? We did, so you don't have to. Rejoin now to buy the best products."
    headline="Get instant access to all ratings & recipes"
    incode="MAR2DAA1A"
    inputId="email-form__input"
    isAnonymous={false}
    mdc='AF0150MA1D'
    onSubmit={handleSubmit}
    title="Rejoin Now"
  />
</ThemeProvider>
)

export const DefaultAnonymous = () => (
<ThemeProvider theme={{ breakpoints }}>
  <ReviewsMarketingHat 
    buttonText="Get Free Access"
    description="Would you cook 700 eggs to find the best nonstick skillet? We did, so you don't have to. Rejoin now to buy the best products."
    headline="Get instant access to all ratings & recipes"
    incode="MAR2DAA1A"
    inputId="email-form__input"
    isAnonymous={true}
    mdc='AF0150MA1D'
    onSubmit={handleSubmit}
    title="2-Week Free Trial"
  />
</ThemeProvider>
  )

export const DefaultRegistrant = () => (
<ThemeProvider theme={{ breakpoints }}>
  <ReviewsMarketingHat 
    buttonText="Get Free Access"
    description="Would you cook 700 eggs to find the best nonstick skillet? We did, so you don't have to. Rejoin now to buy the best products."
    headline="Get instant access to all ratings & recipes"
    incode="MAR2DAA1A"
    inputId="email-form__input"
    isAnonymous={false}
    mdc='AF0150MA1D'
    onSubmit={handleSubmit}
    title="2-Week Free Trial"
  />
</ThemeProvider>
)

export const DefaultSingleSite = () => (
<ThemeProvider theme={{ breakpoints }}>
  <ReviewsMarketingHat 
    buttonText="Upgrade Now"
    description="Would you cook 700 eggs to find the best nonstick skillet? We did, so you don't have to. Rejoin now to buy the best products."
    headline="Get instant access to all ratings & recipes"
    incode="MAR2DAA1A"
    inputId="email-form__input"
    isAnonymous={false}
    mdc='AF0150MA1D'
    onSubmit={handleSubmit}
    title="Upgrade Now"
  />
</ThemeProvider>
)
