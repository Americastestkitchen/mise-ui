import React from 'react';
import PropTypes from 'prop-types';
import { connectRefinementList } from 'react-instantsearch-dom';
import styled from 'styled-components';

import SearchSiteList from './components/SearchSiteList';
import { ShowHide } from '../ShowHide';

const SearchRefinmentListRefinements = styled.div`
  border: none;
  margin: 0;
  padding: 0;
`;

const RefinementList = ({ attribute, items, refine }) => (
  <SearchRefinmentListRefinements>
    {
      attribute === 'search_site_list' ? (
        items.map((item) => {
          return (
            <SearchSiteList
              {...item}
              key={item.value}
              refine={refine}
            />
          );
        })
      ) : null
    }
  </SearchRefinmentListRefinements>
);

const CustomRefinementList = connectRefinementList(RefinementList);

const SearchRefinementList = (props) => {
  const { showHideLabel, ...restProps } = props;
  return (
    <ShowHide isFieldset label={showHideLabel}>
      <CustomRefinementList {...restProps} />
    </ShowHide>
  );
};

SearchRefinementList.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string.isRequired,
  /** 'Title' of the list that will be put into clickable show/hide button */
  showHideLabel: PropTypes.string.isRequired,
  /** Transforms the refinment values returned from algolia (based on attribute prop). */
  transformItems: PropTypes.func,
};

SearchRefinementList.defaultProps = {
  transformItems: null,
};

export default SearchRefinementList;
