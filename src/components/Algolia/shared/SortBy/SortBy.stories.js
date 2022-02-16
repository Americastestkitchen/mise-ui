import React from 'react';

import LabelFrame from '../../../LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import SortBy from './index';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Algolia/shared/SortBy',
  component: SortBy,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
};

const items = [
  { value: 'everest_search_development', label: 'Relevance' },
  { value: 'everest_search_popularity_desc_development', label: 'Popularity' },
  { value: 'everest_search_published_date_desc_development', label: 'Publish Date' },
  { value: "everest_search_avg_rating_desc_development", label: "Top Rated", isNew: true }
];

const Template = (args) => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SortBy
        items={items}
        {...args}
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Relevance = Template.bind({});
Relevance.args = {
  defaultRefinement: items[0].value,
  siteKey: 'atk',
};

export const Popularity = Template.bind({});
Popularity.args = {
  defaultRefinement: items[1].value,
  siteKey: 'atk',
};

export const PublishDate = Template.bind({});
PublishDate.args = {
  defaultRefinement: items[2].value,
  siteKey: 'atk',
};
