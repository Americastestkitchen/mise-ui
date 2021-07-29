import React from 'react';

import LabelFrame from '../../../LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import SortBy from './index';

export default {
  title: 'Components/Algolia/shared/SortBy',
  component: SortBy,
};
const items = [
  { value: 'everest_search_development', label: 'Relevance' },
  { value: 'everest_search_popularity_desc_development', label: 'Popularity' },
  { value: 'everest_search_published_date_desc_development', label: 'Publish Date' },
];
export const Relevance = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SortBy
        defaultRefinement="everest_search_development"
        items={items}
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Popularity = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SortBy
        defaultRefinement="everest_search_popularity_desc_development"
        items={items}
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const PublishDate = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SortBy
        defaultRefinement="everest_search_published_date_desc_development"
        items={items}
      />
    </LabelFrame>
  </MiseInstantSearch>
);
