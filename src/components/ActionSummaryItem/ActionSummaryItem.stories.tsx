import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ActionSummaryItem from './ActionSummaryItem';
import { disable, siteKey } from '../../config/argTypes';
import { addThemedWrapper } from '../../config/decorators';

export default {
  title: 'Components/ActionSummaryItem',
  component: ActionSummaryItem,
  decorators: [addThemedWrapper()],
  argTypes: { children: disable, icon: disable, siteKey },
} as ComponentMeta<typeof ActionSummaryItem>;

type Story = ComponentStory<typeof ActionSummaryItem>

const Template: Story = args => (
  <ActionSummaryItem {...args} />
);

const starDefaultArgs = {
  children: <><strong>4.6</strong>&nbsp;<span>(36 ratings)</span></>,
  siteKey: 'atk',
};
export const star: ComponentStory<typeof ActionSummaryItem> = Template.bind({});
star.args = { ...starDefaultArgs, icon: 'star' };

const commentDefaultArgs = {
  children: <span>12 comments</span>,
  siteKey: 'atk',
};
export const comment: ComponentStory<typeof ActionSummaryItem> = Template.bind({});
comment.args = { ...commentDefaultArgs, icon: 'comment' };
