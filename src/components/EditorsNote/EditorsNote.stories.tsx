import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import EditorsNote from './EditorsNote';
import { siteKey } from '../../config/argTypes';
import { addThemedWrapper } from '../../config/decorators';

const noteType = {
  options: ['alert', 'coming_soon', 'generic', 'price_update', 'retention', 'retest'],
  control: { type: 'inline-radio' },
};

export default {
  title: 'Components/EditorsNote',
  component: EditorsNote,
  decorators: [addThemedWrapper()],
  argTypes: {
    siteKey,
    noteType,
  },
}as ComponentMeta<typeof EditorsNote>;

const Template: ComponentStory<typeof EditorsNote> = props => <EditorsNote {...props} />;

const defaultWidthArgs = {
  content: 'This is a pretty self explanatory one. When a price changes, or we’ve noticed that the price of an item fluctuates a lot, this is the note to use! This is a pretty self explanatory one. When a price changes, or we’ve noticed that the price of an item fluctuates a lot, this is the note to use!',
  siteKey: 'atk',
  subtitle: 'February 2020',
  title: 'Price Update',
};

export const DefaultWidth: ComponentStory<typeof EditorsNote> = Template.bind({});
DefaultWidth.args = { ...defaultWidthArgs, noteType: 'generic' };

const noTitleSubtitleArgs = {
  content: 'Align icon at 50% with a maximum value matching existing designs. Single line usage in search needs accounting for.',
  siteKey: 'atk',
  subtitle: '',
  title: '',
};

export const NoTitleSubtitle: ComponentStory<typeof EditorsNote> = Template.bind({});
NoTitleSubtitle.args = { ...noTitleSubtitleArgs, noteType: 'coming_soon' };
