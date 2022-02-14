import React from 'react';

import HeroAd from './index';
import { color } from '../../../styles'
import { disable } from '../../../config/argTypes';
import { adsDarkThemeWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Ads/HeroAd',
  component: HeroAd,
  decorators: [adsDarkThemeWrapper(color.gunmetal)],
  argTypes: {
    backgroundColor: {
      options: ['darkSlate', 'bluewood', 'squirrel', 'slate'],
      control: 'select'
    },
    buttonColor: {
      options: ['coldPool', 'tomato', 'eclipse'],
      control: 'select'
    },
    cloudinaryId: {
      options: ['mise-play/ATK-COMPLETE-SHOW-COVER', 'mise-play/CCO-SHOW-COVER'],
      control: 'select'
    },
    ctaTarget: disable,
    onClick: {action: 'onClick callback'},
  }
};

const Template = args => <HeroAd {...args}/>;
 

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'darkSlate',
  buttonColor: 'coldPool',
  buttonHoverColor: 'darkColdPool',
  cloudinaryId: 'mise-play/ATK-COMPLETE-SHOW-COVER',
  cta: 'Save 56% Now',
  ctaHref: 'https://shop.americastestkitchen.com',
  subtitle: '',
  title: 'Get 1,670+ Recipes from all 21 seasons!'
}

