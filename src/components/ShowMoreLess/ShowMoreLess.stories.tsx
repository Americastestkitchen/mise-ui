import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { siteKey } from '../../config/argTypes';
import ShowMoreLess, { ShowMoreLessProps } from './ShowMoreLess';
import { addThemedWrapper } from '../../config/decorators';

const Item = ({ num }: { num: number }) => <p>{`Item ${num}`}</p>;
const defaultItems = [
  <Item key={1} num={1} />,
  <Item key={2} num={2} />,
  <Item key={3} num={3} />,
];

export default {
  title: 'Components/ShowMoreLess',
  component: ShowMoreLess,
  decorators: [addThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof ShowMoreLess>;

const Template: ComponentStory<typeof ShowMoreLess> = (args: ShowMoreLessProps) => (
  <ShowMoreLess {...args} />
);

export const Default: ComponentStory<typeof ShowMoreLess> = Template.bind({});
Default.args = {
  id: 'something unique',
  initialCount: 2,
  items: defaultItems,
};
