import React from 'react';
import {ThemeProvider } from 'styled-components';


import { breakpoints } from '../../../../styles';
import { disable, trueFalse, textInput } from '../../../../config/argTypes';
import ReviewsMarketingHat from './index';

export default {
  title: 'Components/Ads/ReviewsAds/ReviewsMarketingHat',
  component: ReviewsMarketingHat,
  argTypes: {
    buttonText: textInput,
    description: textInput,
    headline: textInput,
    inputId: disable,
    images: {control: {type: 'object'}},
    isAnonymous: trueFalse,
    promoId: disable,
    onSubmit: {action: 'onSubmit'},
    title: textInput
  }
};

const defaultImages = {
  desktopAsset: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1621261895/ATK%20Reviews%20Ads/PansHat_Desktop_3x.jpg',
  mobileAsset: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1621261948/ATK%20Reviews%20Ads/PansHat_Mobile_3x.jpg',
};

const Template = ({...args}) => (
  <ThemeProvider theme={{ breakpoints }}>
  <ReviewsMarketingHat
    {...args}
    incode="MAR2DAA1A"
    inputId="email-form__input"
    mdc='AF0150MA1D'
  />
</ThemeProvider>
);

export const DefaultFormer = Template.bind({});
DefaultFormer.args = {
  buttonText: 'Rejoin Now',
  description: "Would you cook 700 eggs to find the best nonstick skillet? We did, so you don't have to. Rejoin now to buy the best products.",
  headline: 'Get instant access to all ratings & recipes',
  isAnonymous: false,
  images: defaultImages,
  title: 'Rejoin Now'
};

export const DefaultAnonymous = Template.bind({});
DefaultAnonymous.args = {
  buttonText: 'GET ACCESS FOR $1 ▸',
  description: "All the reliably perfect recipes. All the most-trusted product reviews. Three sites. No paywalls. Just confident cooking.",
  headline: 'LIMITED-TIME OFFER',
  isAnonymous: true,
  title: 'All Access for 2 Months. Just $1.'
};

export const DefaultRegistrant = Template.bind({});
DefaultRegistrant.args = {
  buttonText: 'Get Free Access',
  description: "Would you cook 700 eggs to find the best nonstick skillet? We did, so you don't have to. Rejoin now to buy the best products.",
  headline: 'Get instant access to all ratings & recipes',
  isAnonymous: true,
  title: '2-Week Free Trial'
};

export const DefaultSingleSite = Template.bind({});
DefaultSingleSite.args = {
  buttonText: 'Upgrade Now',
  description: "Would you cook 700 eggs to find the best nonstick skillet? We did, so you don't have to. Rejoin now to buy the best products.",
  headline: 'Get instant access to all ratings & recipes',
  isAnonymous: true,
  title: 'Upgrade Now'
};

