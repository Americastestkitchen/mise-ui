import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs/react';
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
      headline="Well-Equipped Cook Newsletter"
      imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg"
      onSubmit={action('click button')}
      title="How far does our team go to research equipment and ingredients on your behalf? Find out."
    />
    <br/>
    <br/>
    <LandingEmailAd 
      headline="Well-Equipped Cook Newsletter"
      imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg"
      onSubmit={action('click button')}
      success={true}
      title="How far does our team go to research equipment and ingredients on your behalf? Find out."
    />
  </ThemeProvider>
);

export const DarkMode = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark',
  }}>
    <LandingEmailAd
      imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg"
      onSubmit={action('click button')}
      title="Get out of that cooking rut with six weeks of this newsletter from Jack Bishop in your inbox."
    />
    <br/>
    <br/>
    <LandingEmailAd 
      headline="Well-Equipped Cook Newsletter"
      imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg"
      onSubmit={action('click button')}
      success={true}
      title="How far does our team go to research equipment and ingredients on your behalf? Find out."
    />
  </ThemeProvider>
);
