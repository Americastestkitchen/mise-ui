import React from 'react';

import EditorsNote from './index';
import { siteKey } from '../../config/argTypes';
import { addThemedWrapper } from '../../config/decorators';

export default {
  title: 'Components/EditorsNote',
  component: EditorsNote,
  decorators: [ addThemedWrapper() ],
  argTypes: {
    siteKey,
    noteType: {
      options: ['alert', 'coming_soon', 'generic', 'price_update', 'retention', 'retest'],
      type: { control: 'select' },
    },
  },
};

const Template = (args) => <EditorsNote {...args} />;

export const DefaultWidth = Template.bind({});
DefaultWidth.args = {
  content: 'This is a pretty self explanatory one. When a price changes, or we’ve noticed that the price of an item fluctuates a lot, this is the note to use! This is a pretty self explanatory one. When a price changes, or we’ve noticed that the price of an item fluctuates a lot, this is the note to use!',
  noteType: 'generic',
  siteKey: 'atk',
  subtitle: 'February 2020',
  title: 'Price Update',
};

export const NoTitleSubtitle = Template.bind({});
NoTitleSubtitle.args = {
  content: "Align icon at 50% with a maximum value matching existing designs. Single line usage in search needs accounting for.",
  noteType: 'retention',
  siteKey: 'atk',
  subtitle: '',
  title: '',
};