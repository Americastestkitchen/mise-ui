import React from 'react';

import SingleProductShowcaseAd from './index';
import { color } from '../../../../styles';
import { disable } from '../../../../config/argTypes';
import { adsDarkThemeWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Ads/ShowcaseAds/SingleProductShowcaseAd',
  component: SingleProductShowcaseAd,
  decorators: [adsDarkThemeWrapper(color.gunmetal)],
  argTypes: {
    ctaHref: disable,
    ctaTarget: {
      options: ['_self', '_blank'],
      control: 'select'
    },
    onClick: {action: 'onClick'},
    siteKey: {
      options: ['atk', 'cio', 'cco', 'kids', 'school', 'shop'],
      control: 'select'
    },
  }
};

const Template = args => <SingleProductShowcaseAd {...args} />;

export const Default = Template.bind({});
Default.args = {
  cloudinaryId: 'mise-play/ako-book-spread',
  cta: 'SAVE 56% NOW',
  ctaHref: 'https://www.americastestkitchen.com/order',
  ctaTarget: '_blank',
  siteKey: 'shop',
  subtitle: 'Every recipe (1,674+) from all 21 seasons + a 57-page shopping guide.',
  title: 'Get the 2021 edition of our #1 bestselling cookbook.'
};
