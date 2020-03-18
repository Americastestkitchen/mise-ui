import React from 'react';
import SearchSortBy from '../SearchSortBy';
import { connectSortBy } from 'react-instantsearch-dom';

import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

const ConnectedSearchSortBy = connectSortBy(SearchSortBy);

export default {
  title: 'Components|SearchSortBy',
  component: SearchSortBy,
};

export const Default = () => (
  <MiseInstantSearch>
    <ConnectedSearchSortBy
      defaultRefinement="everest_search_development"
      items={[
        { 'value': 'everest_search_development', label: 'Relevance' },
        { 'value': 'everest_search_popularity_desc_development', label: 'Popularity' },
        { 'value': 'everest_search_published_date_desc_development', label: 'Publish Date' },
      ]}
    />
  </MiseInstantSearch>
);
