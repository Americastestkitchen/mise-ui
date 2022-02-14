/* eslint-disable line-len */
import React from 'react';

import { color } from '../../../styles';
import SingleProductAd from './index';
import { disable } from '../../../config/argTypes';
import { adsDarkThemeWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Ads/SingleProductAd',
  component: SingleProductAd,
  decorators: [adsDarkThemeWrapper(color.gunmetal)],
  argTypes: {
    ctaHref: disable,
    ctaTarget: disable,
    onClick: {action: 'onClick'},
  },
};

const Template = args => <SingleProductAd {...args} />;

export const Default = Template.bind({});
Default.args = {
  cloudinaryId: 'mise-play/single-product-atk',
  cta: 'Save 55% NOW',
  ctaHref: 'https://www.americastestkitchen.com/order',
  ctaTarget: '_blank',
  title: 'Get 1,670+ recipes from all 21 seasons!',
};