import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LabelFrame from '../../../LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import SearchSortBy from './SearchSortBy';

export default {
  title: 'Components/Algolia/search/SearchSortBy',
  component: SearchSortBy,
} as ComponentMeta<typeof SearchSortBy>;

const Template: ComponentStory<typeof SearchSortBy> = args => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchSortBy {...args} />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Default = Template.bind({});
