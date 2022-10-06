import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LabelFrame from '../../../LabelFrame/LabelFrame';
import SearchRefinementList from './SearchRefinementList';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components/Algolia/search/SearchRefinementList',
  component: SearchRefinementList,
} as ComponentMeta<typeof SearchRefinementList>;

const Template: ComponentStory<typeof SearchRefinementList> = args => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchRefinementList {...args} />
    </LabelFrame>
  </MiseInstantSearch>
);

export const WithoutLabelIcon = Template.bind({});
WithoutLabelIcon.args = {
  attribute: 'search_site_list',
  operator: 'and',
  showHideLabel: 'RESULTS FROM',
};

export const WithLabelIcon = Template.bind({});
WithLabelIcon.args = {
  attribute: 'search_cookbook_collection_titles',
  operator: 'and',
  showHideLabel: 'COOKBOOK COLLECTION',
};
