import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import LandingEmailAd, { LandingEmailAdProps } from './LandingEmailAd';
import { addThemedWrapper } from '../../../../config/decorators';
import { mode } from '../../../../config/argTypes';

export default {
  title: 'Components/Ads/ShowcaseAds/LandingEmailAd',
  component: LandingEmailAd,
  decorators: [addThemedWrapper()],
  argTypes: { mode },
} as ComponentMeta<typeof LandingEmailAd>;

const Template: ComponentStory<typeof LandingEmailAd> = (args: LandingEmailAdProps) => (
  <LandingEmailAd {...args} />
);

export const Default = Template.bind({});
Default.args = {
  desktopImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
  tabletImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
  headline: 'Well-Equipped Cook Newsletter',
  onSubmit: () => {},
  title: 'How far does our team go to research equipment and ingredients on your behalf? Find out.',
};

export const Success = Template.bind({});
Success.args = {
  headline: 'Well-Equipped Cook Newsletter',
  onSubmit: () => {},
  success: true,
  successText: 'Thank you! Get ready for watch and cook newsletter in your inbox.',
  title: 'How far does our team go to research equipment and ingredients on your behalf? Find out.',
  desktopImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
  tabletImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
};
