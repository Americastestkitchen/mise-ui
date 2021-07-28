import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import { breakpoints } from '../../../../styles';

import LandingEmailAd from './index';

export default {
  title: 'Components|Ads/ShowcaseAds/LandingEmailAd',
  component: LandingEmailAd,
  decorators: [withKnobs],
};

export const Default = () => (
  <ThemeProvider theme={{
    breakpoints,
  }}>
    <LandingEmailAd
      desktopImageUrl='https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg'
      tabletImageUrl='https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg' 
      headline="Well-Equipped Cook Newsletter"
      imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg"
      onSubmit={action('click button')}
      title="How far does our team go to research equipment and ingredients on your behalf? Find out."
    />
  </ThemeProvider>
);

export const Success = () => (
  <ThemeProvider theme={{
    breakpoints,
  }}>
    <LandingEmailAd 
      headline="Well-Equipped Cook Newsletter"
      onSubmit={action('click button')}
      success={true}
      successText="Thank you! Get ready for watch and cook newsletter in your inbox."
      title="How far does our team go to research equipment and ingredients on your behalf? Find out."
      desktopImageUrl='https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg'
      tabletImageUrl='https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg'
    />
  </ThemeProvider>
);

export const DarkMode = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark',
  }}>
    <LandingEmailAd
      onSubmit={action('click button')}
      title="Get out of that cooking rut with six weeks of this newsletter from Jack Bishop in your inbox."
      desktopImageUrl='https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg'
      tabletImageUrl='https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg'
    />
  </ThemeProvider>
);

export const DarkModeSuccess = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark'
  }}>
  <LandingEmailAd 
    desktopImageUrl='https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg'
    tabletImageUrl='https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg'
    headline="Well-Equipped Cook Newsletter"
    onSubmit={action('click button')}
    success={true}
    successText="Thank you! Get ready for watch and cook newsletter in your inbox."
    title="How far does our team go to research equipment and ingredients on your behalf? Find out."
  />
  </ThemeProvider>
)
