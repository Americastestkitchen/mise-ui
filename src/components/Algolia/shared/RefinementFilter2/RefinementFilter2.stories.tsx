import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LabelFrame from '../../../LabelFrame/LabelFrame';
import RefinementFilter2, { RefinementFilterProps } from './RefinementFilter2';
import { siteKey } from '../../../../config/argTypes';

export default {
  title: 'Components/Algolia/shared/RefinementFilter2',
  component: RefinementFilter2,
  argTypes: { siteKey },
} as ComponentMeta<typeof RefinementFilter2>;

const Template: ComponentStory<typeof RefinementFilter2> = (
  args: RefinementFilterProps,
) => (
  <LabelFrame label="Component">
    <RefinementFilter2 {...args} />
  </LabelFrame>
);

const defaultArgs = {
  attribute: 'search_review_type_list',
  label: 'Equipment Reviews',
  value: 'equipment_reviews',
};

export const UncheckedWithoutCount = Template.bind({});
UncheckedWithoutCount.args = {
  ...defaultArgs,
};

export const UncheckedWithCount = Template.bind({});
UncheckedWithCount.args = {
  ...defaultArgs,
  count: 444,
  includeCount: true,
};

export const CheckedWithoutCount = Template.bind({});
CheckedWithoutCount.args = {
  ...defaultArgs,
  isRefined: true,
};

export const CheckedWithCount = Template.bind({});
CheckedWithCount.args = {
  ...defaultArgs,
  count: 444,
  includeCount: true,
  isRefined: true,
};
