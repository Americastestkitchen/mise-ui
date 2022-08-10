import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Title from './Title';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Cards/shared/Title',
  component: Title,
  argTypes: { siteKey },
  decorators: [addThemedWrapper()],
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => (
  <Title {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Weeknight Roast Chicken',
};
