import React from 'react';

import { color } from '../../../../styles';
import FreeTrialAd from './index';
import { disable } from '../../../../config/argTypes';
import { adsDarkThemeWrapper } from '../../../../config/decorators';


export default {
  title: 'Components/Ads/ShowcaseAds/FreeTrialAd',
  component: FreeTrialAd,
  decorators: [adsDarkThemeWrapper(color.gunmetal)],
  argTypes: {
    cloudinaryId: disable,
    ctaHref: disable,
    onClick: {action: 'onClick callback'},
  }
};

const Template = args => <FreeTrialAd {...args}/>;

export const Default = Template.bind({});
Default.args = {
  cloudinaryId: 'mise-play/play-showcase-magazine-ad',
  cta: 'Free trial issue',
  ctaHref: 'https://www.americastestkitchen.com/order',
  subtitle: 'All-new foolproof recipes and kitchen discoveries in America’s most-trusted cooking magazine.',
  title: 'Claim Your Free Trial Issue!',
};
