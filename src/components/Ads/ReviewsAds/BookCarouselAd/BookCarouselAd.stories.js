import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import { breakpoints } from '../../../../styles';
import BookCarouselAd from './index';

export default {
  title: 'Components|Ads/ReviewsAds/BookCarouselAd',
  component: BookCarouselAd,
  decorators: [withKnobs],
};

export const DefaultBookCarouselAd = () => (
  <ThemeProvider theme={{ breakpoints }}>
    <BookCarouselAd 
      sourceKey="CARDDTVAA"
    />
  </ThemeProvider>
)
