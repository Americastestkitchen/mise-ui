import React from 'react';
import { ThemeProvider } from 'styled-components';

import { breakpoints } from '../../../../styles';
import { disable } from '../../../../config/argTypes';
import BookCarouselAd from './index';

export default {
  title: 'Components/Ads/ReviewsAds/BookCarouselAd',
  component: BookCarouselAd,
  decorators: [
    (Story) => (
    <ThemeProvider theme={{ breakpoints }}>
      <Story />
    </ThemeProvider>
    ),
  ],
  argTypes: {
  hrefUrl: disable,
  sourceKey: disable,
  }
};

const Template = args => <BookCarouselAd sourceKey="CARDDTVAA" {...args} />;

export const DefaultBookCarouselAd = Template.bind({});
DefaultBookCarouselAd.args = {
  cloudinaryId: 'ATKTV22Book_Mise_ReviewsBookCarouselAd_816x1200.jpg',
  ctaLinkText: 'Save 56% Now',
  hrefUrl: 'https://shop.americastestkitchen.com/complete-atk-22.html',
  title: 'Get 1,727 recipes from all 22 seasons!',
};