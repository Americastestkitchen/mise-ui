import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PairedProducts, { PairedProductProps } from './PairedProductAd';
import DarkModeWrapper from '../../../config/decorators/mode-dark';

export default {
  title: 'Components/Ads/PairedProductAd',
  component: PairedProducts,
  decorators: [DarkModeWrapper()],
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof PairedProducts>;

const Template: ComponentStory<typeof PairedProducts> = (args: PairedProductProps) => (
  <PairedProducts {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Cook with Confidence',
  products: [
    {
      cloudinaryId: 'atk-20th-anniversary-tv-show-cookbook-header_u6komg',
      cta: 'START FREE TRIAL',
      ctaHref: 'https://www.americastestkitchen.com',
      ctaTarget: '_blank',
      subtitle: 'DIGITAL ALL ACCESS',
      title: 'Every recipe, rating & video',
    },
    {
      cloudinaryId: 'atk-20th-anniversary-tv-show-cookbook-header_u6komg',
      cta: 'SAVE NOW',
      ctaHref: 'https://www.americastestkitchen.com',
      ctaTarget: '_blank',
      subtitle: 'COOKBOOKS',
      title: 'Cook along with our TV Shows',
    },
  ],
};
