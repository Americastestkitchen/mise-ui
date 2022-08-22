import React from 'react';

import Accordion, { Icon } from '../../../Accordion/Accordion';
import SortBy from '../../shared/SortBy';

export const defaultItems = [
  { value: 'everest_search_development', label: 'Relevance' },
  { value: 'everest_search_popularity_desc_development', label: 'Popularity' },
  { value: 'everest_search_published_date_desc_development', label: 'Publish Date' },
];

export type SearchSortByProps = {
  defaultRefinement?: string;
  icon?: Icon;
  iconSize?: 'default' | 'large';
  items?: {value: string; label: string}[]
}

const SearchSortBy = ({
  defaultRefinement = 'everest_search_development',
  icon = '',
  iconSize = 'default',
  items = defaultItems,
}:SearchSortByProps) => (
  <Accordion
    icon={icon}
    iconSize={iconSize}
    isFieldset
    label="Sort By"
  >
    <SortBy
      defaultRefinement={defaultRefinement}
      items={items}
    />
  </Accordion>
);

export default SearchSortBy;
