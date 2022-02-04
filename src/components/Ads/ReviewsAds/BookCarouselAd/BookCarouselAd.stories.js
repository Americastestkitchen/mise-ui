import React from 'react';
import { ThemeProvider } from 'styled-components';

import { breakpoints } from '../../../../styles';
import { disable, textInput } from '../../../../config/argTypes';
import BookCarouselAd from './index';

export default {
  title: 'Components/Ads/ReviewsAds/BookCarouselAd',
  component: BookCarouselAd,
  argTypes: {
  cloudinaryId: textInput,
  ctaLinkText: textInput,
  hrefUrl: textInput,
  sourceKey: disable,
  title: textInput,
  }
};

const Template = ({...args}) => (
  <ThemeProvider theme={{ breakpoints }}>
    <BookCarouselAd 
      sourceKey="CARDDTVAA"
      {...args}
    />
  </ThemeProvider>
);

const defaultArgs = {
  cloudinaryId: 'ATKTV22Book_Mise_ReviewsBookCarouselAd_816x1200.jpg',
  ctaLinkText: 'Save 56% Now',
  hrefUrl: 'https://shop.americastestkitchen.com/complete-atk-22.html',
  title: 'Get 1,727 recipes from all 22 seasons!',
};

export const DefaultBookCarouselAd = Template.bind({});
DefaultBookCarouselAd.args = defaultArgs;
