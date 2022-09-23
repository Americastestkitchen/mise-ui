import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LabelFrame from '../../../LabelFrame/LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import Menu from './Menu';
import { addThemedWrapper } from '../../../../config/decorators';
import { siteKey } from '../../../../config/argTypes';

export default {
  title: 'Components/Algolia/shared/Menu',
  component: Menu,
  decorators: [addThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = args => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <Menu {...args} />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Default = Template.bind({});
Default.args = {
  attribute: 'search_review_type_list',
};
