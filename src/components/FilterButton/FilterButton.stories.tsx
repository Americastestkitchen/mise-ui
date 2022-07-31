import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterButton from './FilterButton';
import { mode, siteKey } from '../../config/argTypes';
import ThemedWrapper from '../../config/decorators/ThemedWrapper';

export default {
  title: 'Components/FilterButton',
  component: FilterButton,
  decorators: [ThemedWrapper()],
  argTypes: {
    mode,
    siteKey,
  },
}as ComponentMeta<typeof FilterButton>;

const Template: ComponentStory<typeof FilterButton> = props => <FilterButton {...props} />;

const defaultFilterButton = {
  siteKey: 'atk',
  mode: 'light',
  onClick: () => {},
};

export const DefaultFilterButton = Template.bind({});
DefaultFilterButton.args = { ...defaultFilterButton };
