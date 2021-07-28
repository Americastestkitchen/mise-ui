import React from 'react';

import LabelFrame from '../../../LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import SearchSortBy from './index';

export default {
  title: 'Components/Algolia/search/SearchSortBy',
  component: SearchSortBy,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchSortBy />
    </LabelFrame>
  </MiseInstantSearch>
);
