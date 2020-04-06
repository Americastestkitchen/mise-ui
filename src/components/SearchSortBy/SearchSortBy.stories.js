import React from 'react';
import styled from 'styled-components';

import LabelFrame from '../LabelFrame';
import SearchSortBy from './index';

import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

const SortByWrapper = styled.div`
  max-width: 30rem;
`;

export default {
  title: 'Components|SearchSortBy',
  component: SearchSortBy,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SortByWrapper>
        <SearchSortBy />
      </SortByWrapper>
    </LabelFrame>
  </MiseInstantSearch>
);
