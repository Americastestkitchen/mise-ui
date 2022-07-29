import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DarkModeWrapper from '../../../../config/decorators/mode-dark';
import LandingEmailAd from './LandingEmailAd';
import { addThemedWrapper } from '../../../../config/decorators';
import backgrounds from '../../../../config/backgrounds';

export default {
  title: 'Components/Ads/ShowcaseAds/LandingEmailAd',
  component: LandingEmailAd,
  decorators: [addThemedWrapper()],
  parameters: { actions: { argTypesRegex: '^on.*' }, backgrounds: { default: 'atk', ...backgrounds } },
} as ComponentMeta<typeof LandingEmailAd>;

const Template: ComponentStory<typeof LandingEmailAd> = args => <LandingEmailAd {...args} />;

export const Default = Template.bind({});

Default.args = {
  desktopImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
  tabletImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
  headline: 'Well-Equipped Cook Newsletter',
  title: 'How far does our team go to research equipment and ingredients on your behalf? Find out.',
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  success: true,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  ...Default.args,
};
DarkMode.decorators = [DarkModeWrapper()];
DarkMode.parameters = {
  backgrounds: { default: 'atk-dark-alt' },
};

export const DarkModeSuccess = Template.bind({});

DarkModeSuccess.args = {
  ...Success.args,
};
DarkModeSuccess.decorators = [DarkModeWrapper()];
DarkModeSuccess.parameters = {
  backgrounds: { default: 'atk-dark-alt' },
};
