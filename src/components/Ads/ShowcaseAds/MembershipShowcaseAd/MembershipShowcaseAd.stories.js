/* eslint-disable line-len */
import React from 'react';
import { color } from '../../../../styles';

import MembershipShowcaseAd from './index';
import TextDecorations, { UnderlinedText } from '../../../DesignTokens/TextDecoration'
import { disable } from '../../../../config/argTypes';
import { adsDarkThemeWrapper } from '../../../../config/decorators';

const Underline = TextDecorations.UnderlineThree;

export default {
  title: 'Components/Ads/ShowcaseAds/MembershipShowcaseAd',
  component: MembershipShowcaseAd,
  decorators: [adsDarkThemeWrapper(color.asphalt)],
  argTypes: {
    ctaHref: disable,
    deviceType: {
      options: ['desktop', 'phone', 'tablet'],
      control: 'inline-radio'
    },
    onClick: {action: 'onClick'},
    title: disable,
  }
};

const Template = args => <MembershipShowcaseAd {...args} />;

export const Default = Template.bind({});
Default.args = {
  cta: 'Get free access',
  ctaHref: 'https://www.americastestkitchen.com/order',
  deviceType: 'desktop',
  title: () => (
    <span>Cook smart with <UnderlinedText>100% reliable recipes<Underline /></UnderlinedText> trusted by millions of home cooks—Try Digital All Access Now.</span>
  )
};
