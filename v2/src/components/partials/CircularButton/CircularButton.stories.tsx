import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CircularButton from './CircularButton';

export default {
  title: 'Components/Partials/CircularButton',
  component: CircularButton,
} as ComponentMeta<typeof CircularButton>;

const Template: ComponentStory<typeof CircularButton> = args => <CircularButton {...args} />;

export const LeftArrow = Template.bind({});
LeftArrow.args = {
  iconType: 'leftArrow',
};

export const RightArrow = Template.bind({});
RightArrow.args = {
  iconType: 'rightArrow',
};
