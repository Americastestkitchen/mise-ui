import React from 'react';

import PairedProducts from './index';
import { color } from '../../../styles';
import { adsDarkThemeWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Ads/PairedProductAd',
  component: PairedProducts,
  decorators: [adsDarkThemeWrapper(color.gunmetal)],
  argTypes: {
    onClick: {action: 'onClick callback'}, 
    products: {
      control: 'object'
    }
  }
};




const defaultData =  [
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
];


const Template = args => <PairedProducts {...args} />;

export const Default = Template.bind({});
Default.args = {
  products: defaultData,
  title: 'Cook with Confidence',
}
