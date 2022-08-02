import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import AffiliateLink from './AffiliateLink';

export default {
  title: 'Components/Cards/shared/AffiliateLink',
  component: AffiliateLink,
  argTypes: {
    icon: {
      control: { type: 'select',
        options: [
          'Amazon',
          'BlueApron',
          'Houzz',
          'KingArthur',
          'SurLaTable',
          'ThermoWorks',
          'Victorinox',
          'WilliamsSonoma',
        ] },
    },
    readerLabel: { control: false },
    onClick: { control: false },
    dataAttrs: { control: false },
  },
} as ComponentMeta<typeof AffiliateLink>;

const Template: ComponentStory<typeof AffiliateLink> = args => <AffiliateLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  icon: 'Amazon',
  text: 'Buy now for $15',
  title: 'Link Title',
  url: 'https://www.amazon.com',
  name: '',
  onClick: () => {},
  readerLabel: '',
};
