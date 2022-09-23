import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sticker from './Sticker';

export default {
  title: 'Components/Partials/Sticker',
  component: Sticker,
} as ComponentMeta<typeof Sticker>;

const Template: ComponentStory<typeof Sticker> = args => <Sticker {...args} />;

export const Editorial = Template.bind({});
Editorial.args = {
  text: 'Editorial',
  type: 'editorial',
};

export const Priority = Template.bind({});
Priority.args = {
  text: 'Priority',
  type: 'priority',
};
