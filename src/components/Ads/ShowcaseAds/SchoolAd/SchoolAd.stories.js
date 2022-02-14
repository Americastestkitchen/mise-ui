import React from 'react';

import SchoolAd from './index';
import { color } from '../../../../styles';
import { disable } from '../../../../config/argTypes';
import { adsDarkThemeWrapper } from '../../../../config/decorators';



export default {
  title: 'Components/Ads/ShowcaseAds/SchoolAd',
  component: SchoolAd,
  decorators: [adsDarkThemeWrapper(color.gunmetal)],
  argTypes: {
    ctaHref: disable,
    ctaTarget: {
      options: ['_self', '_blank'],
      control: 'select'
    },
    deviceType: {
      options: ['desktop', 'phone', 'tablet'],
      control: 'inline-radio'
    },
    onClick: {action: 'onClick'},
  }
};

const Template = args => <SchoolAd {...args} />;

export const Default = Template.bind({});
Default.args = {
  cta: 'TRY FOR FREE',
  ctaHref: 'https://school.americastestkitchen.com',
  ctaTarget: '_self',
  deviceType: 'desktop',
  subtitle: 'Get access to 320+ courses and learn from our expert test cooks in your kitchen, on your schedule.',
  title: 'Great cooks never stop learning.',
};
