import React from 'react';

import SidebarCard from './index';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Articles/SidebarCard',
  component: SidebarCard,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
};

const Template = (args) => <SidebarCard {...args} />;

export const DefaultWidth = Template.bind({});
DefaultWidth.args = {
  altText: 'picture of a thing',
  description: 'We’ve happily made do with Weber’s basic kettle for years. But would newer, more tricked-out charcoal cookers be worth the upgrade?',
  photo: 'TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Pickle_Samples_with_Brine_104-1',
  siteKey: 'atk',
  title: 'FAQ About Storing Blue Cheese',
  type: 'Article',
  url: 'https://www.americastestkitchen.com/articles/3236-this-hardware-store-staple-deodorizes-your-fridge-better-than-baking-soda',
};
