import React from 'react';

import LabelFrame from '../LabelFrame';
import SearchBanner from './index';
import SearchInput from '../SearchInput';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components/SearchBanner',
  component: SearchBanner,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchBanner />
    </LabelFrame>
    <LabelFrame label="Supplemental Component">
      <SearchInput />
    </LabelFrame>
  </MiseInstantSearch>
);
