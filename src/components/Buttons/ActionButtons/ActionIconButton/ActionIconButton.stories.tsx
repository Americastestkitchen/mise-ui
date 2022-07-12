import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ActionIconButton, { IconProps } from './ActionIconButton';

const iconType = {
  options: ['print'],
  control: { type: 'inline-radio' },
};

export default {
  title: 'Components/Buttons/ActionButtons/ActionIconButton',
  component: ActionIconButton,
  argTypes: { iconType },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
} as ComponentMeta<typeof ActionIconButton>;

const defaultArgs: IconProps = {
  iconType: 'print',
  text: 'Print recipes',
  onClick: () => {},
};

const Template = (args: IconProps) => <ActionIconButton {...args} />;

export const PrintActionButton: ComponentStory<typeof ActionIconButton> = Template.bind({});
PrintActionButton.args = { ...defaultArgs };
