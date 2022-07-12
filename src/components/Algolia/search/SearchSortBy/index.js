import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '../../../Accordion/Accordion';
import SortBy from '../../shared/SortBy';

const SearchSortBy = ({ defaultRefinement, icon, iconSize, items }) => (
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

SearchSortBy.propTypes = {
  /** Name of algolia index that should be selected on initial page render. */
  defaultRefinement: PropTypes.string,
  /* Name of icon */
  icon: PropTypes.string,
  /* Size of icon */
  iconSize: PropTypes.oneOf(['default', 'large']),
  /** List of 'hits' returned by algolia. */
  items: PropTypes.array,
};

SearchSortBy.defaultProps = {
  defaultRefinement: 'everest_search_development',
  icon: null,
  iconSize: 'default',
  items: [
    { value: 'everest_search_development', label: 'Relevance' },
    { value: 'everest_search_popularity_desc_development', label: 'Popularity' },
    { value: 'everest_search_published_date_desc_development', label: 'Publish Date' },
  ],
};

export default SearchSortBy;
