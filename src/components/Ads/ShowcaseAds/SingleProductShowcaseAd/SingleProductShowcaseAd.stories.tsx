import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themedBg } from '../../../../config/argTypes';
import DarkModeWrapper from '../../../../config/decorators/DarkMode';
import SingleProductShowcaseAd from './SingleProductShowcaseAd';

export default {
  title: 'Components/Ads/ShowcaseAds/SingleProductShowcaseAd',
  component: SingleProductShowcaseAd,
  decorators: [DarkModeWrapper()],
  argTypes: {
    ctaTarget: {
      options: ['_self', '_blank'],
      control: { type: 'radio' },
    },
    siteKey: {
      control: { type: 'select' },
      options: ['atk', 'cio', 'cco', 'kids', 'school', 'shop'],
    },
  },
  parameters: {
    backgrounds: themedBg,
    actions: {
      handles: ['click a'],
    },
  },
} as ComponentMeta<typeof SingleProductShowcaseAd >;

// eslint-disable-next-line max-len
const Template:ComponentStory<typeof SingleProductShowcaseAd > = args => <SingleProductShowcaseAd {...args} />;

export const Default = Template.bind({});
Default.args = {
  cloudinaryId: 'mise-play/ako-book-spread',
  cta: 'SAVE 56% NOW',
  ctaHref: 'https://www.americastestkitchen.com/order',
  ctaTarget: '_self',
  siteKey: 'atk',
  subtitle: 'Every recipe (1,674+) from all 21 seasons + a 57-page shopping guide.',
  title: 'Get the 2021 edition of our #1 bestselling cookbook.',
  onClick: (event) => {
    event.preventDefault();
  },
};
