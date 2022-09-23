import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CircularIcon from './CircularIcon';

export default {
  title: 'Components/Partials/CircularIcon',
  component: CircularIcon,
} as ComponentMeta<typeof CircularIcon>;

const Template: ComponentStory<typeof CircularIcon> = args => <CircularIcon {...args} />;

export const Checkmark = Template.bind({});
Checkmark.args = {
  type: 'checkmark',
};
