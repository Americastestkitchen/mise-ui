import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StationFinderForm from './StationFinderForm';
import DarkModeWrapper from '../../../config/decorators/mode-dark';

export default {
  title: 'Components/Forms/StationFinderForm',
  component: StationFinderForm,
  decorators: [DarkModeWrapper()],
} as ComponentMeta<typeof StationFinderForm>;

const Template: ComponentStory<typeof StationFinderForm> = args => (
  <StationFinderForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  inputId: 'station-finder-form-story',
  onSubmit: () => {},
};
