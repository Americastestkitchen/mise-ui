import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import SearchInput from '../SearchInput';

import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

const ConnectedSearchInput = connectSearchBox(SearchInput);


export default {
  title: 'Components|SearchInput',
  component: SearchInput,
};

export const Default = () => (
  <MiseInstantSearch>
    <ConnectedSearchInput />
  </MiseInstantSearch>
);
