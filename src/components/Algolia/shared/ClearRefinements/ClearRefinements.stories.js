import React from 'react';
import styled from 'styled-components';

import LabelFrame from '../../../LabelFrame';
import CurrentRefinements from '../CurrentRefinements';
import ClearRefinements from './index';
import SearchRefinementList from '../../search/SearchRefinementList';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components/Algolia/shared/ClearRefinements',
  component: ClearRefinements,
};

const StyledWrapper = styled.div`
  margin-bottom: 2.4rem;
`;

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ClearRefinements />
    </LabelFrame>
    <LabelFrame label="Supplemental Components">
      <StyledWrapper>
        <CurrentRefinements />
      </StyledWrapper>
      <SearchRefinementList
        attribute="search_cuisine_list"
        operator="and"
        showHideLabel="CUISINE"
      />
    </LabelFrame>
  </MiseInstantSearch>
);
