import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import { breakpoints } from '../../../../styles';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';
import CookingSchoolAd from './index';

export default {
  title: 'Components/Ads/ReviewsAds/CookingSchoolAd',
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

const Template = (args) => <CookingSchoolAd {...args} />;
export const AtkDetailPage = Template.bind({});
AtkDetailPage.args = {
  siteKey: 'atk',
  deviceType: 'desktop',
  identifier: 'detail',
  incode: 'MAR1DCS1M',
  mdc: 'SF0110SM8KLM8P',
};
AtkDetailPage.argTypes = {
  siteKey,
};
AtkDetailPage.decorators = [
  addThemedWrapper(),
];

export const CcoDetailPage = Template.bind({});
CcoDetailPage.args = {
  ...AtkDetailPage.args,
  description: 'Get a FREE TRIAL ISSUE of <em>Cook’s Country Magazine</em>!',
  headline: 'Free Trial Issue',
  linkCta: 'Free Tiral',
  siteKey: 'cco',
};
CcoDetailPage.argTypes = {
  ...AtkDetailPage.argTypes,
};
CcoDetailPage.decorators = [
  addThemedWrapper(),
];

export const CioDetailPage = Template.bind({});
CioDetailPage.args = {
  ...CcoDetailPage.args,
  description: 'Get a FREE TRIAL ISSUE of <em>Cook’s Illustrated Magazine!</em>',
  siteKey: 'cio',
};
CioDetailPage.argTypes = {
  ...CcoDetailPage.argTypes,
};
CioDetailPage.decorators = [
  addThemedWrapper(),
];
