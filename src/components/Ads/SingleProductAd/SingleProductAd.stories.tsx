import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DarkModeWrapper from '../../../config/decorators/mode-dark';
import SingleProductAd, { SingleProductAdProps } from './SingleProductAd';

export default {
  title: 'Components/Ads/SingleProductAd',
  component: SingleProductAd,
  decorators: [DarkModeWrapper()],
  argTypes: { onClick: {
    action: 'clicked',
    parameters: '',
  } },
} as ComponentMeta<typeof SingleProductAd>;

const Template: ComponentStory<typeof SingleProductAd> = (args: SingleProductAdProps) => (
  <SingleProductAd {...args} />
);

export const Default = Template.bind({});
Default.args = {
  cloudinaryId: 'mise-play/single-product-atk',
  cta: 'Save 55% NOW',
  title: 'Get 1,670+ recipes from all 21 seasons!',
};
