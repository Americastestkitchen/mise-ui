import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from './ProgressBar';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Cards/shared/ProgressBar1',
  component: ProgressBar,
  decorators: [addThemedWrapper()],
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args: ProgressBarProps) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  progress: 0.5,
  videoId: 'episode_666',
};
