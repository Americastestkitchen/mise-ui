import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import SidebarCard from './index';
import { siteKey } from '../../../config/argTypes';
import ThemedWrapper from '../../../config/decorators/ThemedWrapper';

export default {
  title: 'Components/Articles/SidebarCard',
  component: SidebarCard,
  decorators: [ThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof SidebarCard>;

const Template: ComponentStory<typeof SidebarCard> = props => <SidebarCard {...props} />;

const description = 'We’ve happily made do with Weber’s basic kettle for years. But would newer, more tricked-out charcoal cookers be worth the upgrade?';
const photo = 'TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Pickle_Samples_with_Brine_104-1';
const sharedArgs = {
  altText: 'picture of a thing',
  siteKey: 'atk',
  title: 'FAQ About Storing Blue Cheese',
  type: 'Article',
  url: 'https://www.americastestkitchen.com/articles/3236-this-hardware-store-staple-deodorizes-your-fridge-better-than-baking-soda',
};

export const ImageAndDescription = Template.bind({});
ImageAndDescription.args = {
  ...sharedArgs,
  description,
  photo,
};

export const ImageNoDescription = Template.bind({});
ImageNoDescription.args = {
  ...sharedArgs,
  photo,
};

export const DescriptionNoImage = Template.bind({});
DescriptionNoImage.args = {
  ...sharedArgs,
  description,
};

export const NoDescriptionNoImage = Template.bind({});
NoDescriptionNoImage.args = { ...sharedArgs };
