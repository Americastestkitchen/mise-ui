import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Badge, { BadgeProps } from './Badge';

const type: any = {
  options: ['atk', 'cio', 'cco', 'kids', 'school', 'shop'],
  control: { type: 'inline-radio' },
};

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: { type },
} as ComponentMeta<typeof Badge>;

const defaultArgs: BadgeProps = {
  type: 'atk',
}
const Template: ComponentStory<typeof Badge> = props => <Badge {...props} />;

export const badges = Template.bind({});
badges.args = { ...defaultArgs };