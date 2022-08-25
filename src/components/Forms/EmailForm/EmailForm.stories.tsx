import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EmailForm from './EmailForm';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Forms/EmailForm1',
  component: EmailForm,
  decorators: [addThemedWrapper()],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof EmailForm>;

const Template: ComponentStory<typeof EmailForm> = args => (
  <EmailForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onSubmit: (email: string) => { console.log(email); },
  inputId: 'form-input',
};
