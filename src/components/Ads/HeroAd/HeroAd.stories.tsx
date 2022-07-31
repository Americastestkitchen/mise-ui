import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroAd from './HeroAd';
import DarkModeWrapper from '../../../config/decorators/DarkMode';

export default {
  title: 'Components/Ads/HeroAd',
  component: HeroAd,
  decorators: [DarkModeWrapper()],
  argTypes: {
    backgroundColor: {
      options: ['darkSlate', 'bluewood', 'squirrel', 'slate'],
      control: { type: 'radio' },
    },
    buttonColor: {
      options: ['coldPool', 'tomato', 'eclipse'],
      control: { type: 'radio' },
    },
    buttonHoverColor: {
      options: ['coldPool', 'tomato', 'eclipse'],
      control: { type: 'radio' },
    },
    cloudinaryId: {
      options: ['mise-play/ATK-COMPLETE-SHOW-COVER', 'mise-play/CCO-SHOW-COVER'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof HeroAd>;

const Template: ComponentStory<typeof HeroAd> = args => <HeroAd {...args} />;
export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'darkSlate',
  buttonColor: 'coldPool',
  buttonHoverColor: 'darkColdPool',
  cloudinaryId: 'mise-play/ATK-COMPLETE-SHOW-COVER',
  cta: 'Save 56% Now',
  ctaHref: 'https://shop.americastestkitchen.com',
  subtitle: '',
  title: 'Get 1,670+ Recipes from all 21 seasons!',
};
