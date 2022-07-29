import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SchoolAd, { SchoolAdProps } from './SchoolAd';
import DarkModeWrapper from '../../../../config/decorators/mode-dark';

export default {
  title: 'Components/Ads/ShowcaseAds/SchoolAd',
  component: SchoolAd,
  decorators: [DarkModeWrapper()],
} as ComponentMeta<typeof SchoolAd>;

const Template: ComponentStory<typeof SchoolAd> = (args: SchoolAdProps) => (
  <SchoolAd {...args} />
);

export const Default: ComponentStory<typeof SchoolAd> = Template.bind({});
Default.args = {
  cta: 'TRY FOR FREE',
  ctaHref: 'https://school.americastestkitchen.com',
  ctaTarget: '_blank',
  deviceType: 'desktop',
  subtitle: 'Get access to 320+ courses and learn from our expert test cooks in your kitchen, on your schedule.',
  title: 'Great cooks never stop learning.',
};
