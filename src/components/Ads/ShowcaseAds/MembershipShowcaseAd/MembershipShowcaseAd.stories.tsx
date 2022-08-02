import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { siteKey } from '../../../../config/argTypes';
import DarkModeWrapper from '../../../../config/decorators/DarkMode';
import MembershipShowcaseAd, { MembershipShowcaseAdProps } from './MembershipShowcaseAd';
import { UnderlinedText, UnderlineThree } from '../../../DesignTokens/TextDecoration';

export default {
  title: 'Components/Ads/ShowcaseAds/MembershipShowcaseAd',
  component: MembershipShowcaseAd,
  decorators: [DarkModeWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof MembershipShowcaseAd>;

const Template = (args: MembershipShowcaseAdProps) => (
  <MembershipShowcaseAd {...args} />
);

export const Default: ComponentStory<typeof MembershipShowcaseAd> = Template.bind({});
Default.args = {
  cta: 'Get free access',
  ctaHref: 'http://www.americastestkitchen.com/order',
  deviceType: 'desktop',
  title: () => (
    <span>
      Cook smart with <UnderlinedText>100% reliable recipes<UnderlineThree /></UnderlinedText>
      trusted by millions of home cooks—Try Digital All Access Now.
    </span>
  ),
};
