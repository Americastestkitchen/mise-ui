import React from 'react';
import SearchRefinementList from '../SearchRefinementList';
import styled from 'styled-components';
import { memoize } from 'lodash.memoize';
import { orderBy } from 'lodash.orderby';

import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchRefinementList',
  component: SearchRefinementList,
};

// Need some padding in Storybook only. This is so you can view absolutely
// positioned elements when interacting with the filters.
const StyledWrapper = styled.div`
  padding: 0 0 0 3rem;
`;

export const SearchSiteList = () => {
  // "items" are the values of the 'search_site_list' facet returned by algolia
  // they are not returned in the correct order by algolia so we reorder the
  // list below
  const transformItems = _.memoize((items) => {
    // Order alphabetically by label value
    let formattedItems = _.orderBy(items, ['label'], 'asc').filter(({ label }) => (
      ['atk', 'cco', 'cio', 'kids', 'school', 'shop'].includes(label)
    ));
    const arrLen = formattedItems.length;
    // even after we've ordered labels alphabetically, school is in the wrong
    // index. the temp swap here is switching school and kids so the labels
    // are rendered in the correct order in the refinement list.
    const temp = formattedItems[arrLen - 2];
    formattedItems[arrLen - 2] = formattedItems[arrLen - 3];
    formattedItems[arrLen - 3] = temp;
    return formattedItems;
  });

  return (
    <MiseInstantSearch>
      <StyledWrapper>
        <SearchRefinementList
          attribute="search_site_list"
          showHideLabel="RESULTS FROM"
          transformItems={transformItems}
        />
      </StyledWrapper>
    </MiseInstantSearch>
  );
};
