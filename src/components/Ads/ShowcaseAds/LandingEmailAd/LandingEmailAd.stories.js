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
      imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/v1617747520/820fbf3886b68cb7594772729199ae3f_3x_s1gxkt.jpg"
      onSubmit={action('click button')}
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
      imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/v1617747520/820fbf3886b68cb7594772729199ae3f_3x_s1gxkt.jpg"
      onSubmit={action('click button')}
      title="Get out of that cooking rut with six weeks of this newsletter from Jack Bishop in your inbox."
    />
  </ThemeProvider>
);
