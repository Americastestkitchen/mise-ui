import React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ThemedWrapper from '../../config/decorators/ThemedWrapper';
import Listable, { ListableProps } from './Listable';
import { color, grid } from '../../styles';

export default {
  title: 'Components/Listable',
  decorator: [ThemedWrapper()],
  component: Listable,
} as ComponentMeta<typeof Listable>;

const ListableStoryWrapper = styled.div`
  background-color: ${color.gunmetal};
  max-width: ${grid.columnWidth};
  width: ${grid.columnWidth};
`;

const Template = (args: ListableProps) => (
  <ListableStoryWrapper>
    <Listable {...args} />
  </ListableStoryWrapper>
);

const defaultArgs = {
  cloudinaryId: 'mise-play/listable-story',
  duration: '2:34',
  title: 'Introduction to Tomatoes 101',
};

export const NotSelectedWithAccess: ComponentStory<typeof Listable> = Template.bind({});
NotSelectedWithAccess.args = {
  ...defaultArgs,
  hasAccess: true,
};

export const NotSelectedWithoutAccess: ComponentStory<typeof Listable> = Template.bind({});
NotSelectedWithoutAccess.args = {
  ...defaultArgs,
  hasAccess: false,
};

export const SelectedWithAccess: ComponentStory<typeof Listable> = Template.bind({});
SelectedWithAccess.args = {
  ...defaultArgs,
  hasAccess: true,
  isSelected: true,
};

export const SelectedWithoutAccess: ComponentStory<typeof Listable> = Template.bind({});
SelectedWithoutAccess.args = {
  ...defaultArgs,
  hasAccess: false,
  isSelected: true,
};
