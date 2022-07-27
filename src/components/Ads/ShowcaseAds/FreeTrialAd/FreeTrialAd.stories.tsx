import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FreeTrialAd from './FreeTrialAd';
import DarkModeWrapper from '../../../../config/decorators/mode-dark';

export default {
  title: 'Components/Ads/ShowcaseAds/FreeTrialAd',
  component: FreeTrialAd,
  decorators: [DarkModeWrapper()],
  argTypes: { onClick: { action: 'clicked' } },
}as ComponentMeta<typeof FreeTrialAd>;

const Template: ComponentStory<typeof FreeTrialAd> = args => <FreeTrialAd {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  cloudinaryId: 'mise-play/play-showcase-magazine-ad',
  cta: 'Free trial issue',
  ctaHref: 'https://www.americastestkitchen.com/order',
  subtitle: 'All-new foolproof recipes and kitchen discoveries in America’s most-trusted cooking magazine.',
  title: 'Claim Your Free Trial Issue!',
};
