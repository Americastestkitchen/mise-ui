import React from 'react';

import SearchResultsCount from './index';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchResultsCount',
  component: SearchResultsCount,
};

export const Default = () => (
  <MiseInstantSearch>
    <SearchResultsCount />
  </MiseInstantSearch>
);
