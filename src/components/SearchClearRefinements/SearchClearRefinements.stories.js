import React from 'react';
import styled from 'styled-components';

import LabelFrame from '../LabelFrame';
import SearchCurrentRefinements from '../SearchCurrentRefinements';
import SearchClearRefinements from './index';
import SearchRefinementList from '../SearchRefinementList';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchClearRefinements',
  component: SearchClearRefinements,
};

const StyledWrapper = styled.div`
  margin-bottom: 2.4rem;
`;

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchClearRefinements />
    </LabelFrame>
    <LabelFrame label="Supplemental Components">
      <StyledWrapper>
        <SearchCurrentRefinements />
      </StyledWrapper>
      <SearchRefinementList
        attribute="search_cuisine_list"
        operator="and"
        showHideLabel="CUISINE"
      />
    </LabelFrame>
  </MiseInstantSearch>
);
