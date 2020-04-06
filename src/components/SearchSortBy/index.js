import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectSortBy } from 'react-instantsearch-dom';

import ShowHide from '../ShowHide';
import { color, font, fontSize, spacing } from '../../styles';

const SearchSortByList = styled.ul``;

const SearchSortByItem = styled.li`
  margin-bottom: ${spacing.sm};

  &:last-child {
    margin-bottom: 0;
  }
`;

const SearchSortByButton = styled.button`
  align-items: center;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const SearchSortByCircle = styled.div`
  ${({ isRefined }) => (isRefined ? `
      background-color: ${color.mint};
      border: solid 1px ${color.mint};
  ` : `
      background-color: transparent;
      border: solid 1px ${color.nobel};
  `)}
  border-radius: 1.2rem;
  height: 1.2rem;
  margin-right: 0.6rem;
  width: 1.2rem;
`;

const SearchSortByLabel = styled.span`
  color: ${color.eclipse};
  font: ${fontSize.md}/1.38 ${font.pnr};
  font-size: ${fontSize.md};
`;

const SortBy = ({ items, refine }) => (
  <SearchSortByList>
    {
      items.map(({ isRefined, label, value }) => (
        <SearchSortByItem key={value}>
          <SearchSortByButton onClick={(e) => { e.preventDefault(); refine(value); }}>
            <SearchSortByCircle isRefined={isRefined} />
            <SearchSortByLabel>
              {label}
            </SearchSortByLabel>
          </SearchSortByButton>
        </SearchSortByItem>
      ))
    }
  </SearchSortByList>
);

SortBy.propTypes = {
  items: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
};

const CustomSortBy = connectSortBy(SortBy);

const SearchSortBy = ({ defaultRefinement, items }) => (
  <ShowHide
    isFieldset
    label="Sort By"
  >
    <CustomSortBy
      defaultRefinement={defaultRefinement}
      items={items}
    />
  </ShowHide>
);

SearchSortBy.propTypes = {
  /** Name of algolia index that should be selected on initial page render. */
  defaultRefinement: PropTypes.string,
  /** List of 'hits' returned by algolia. */
  items: PropTypes.array,
};

SearchSortBy.defaultProps = {
  defaultRefinement: 'everest_search_development',
  items: [
    { value: 'everest_search_development', label: 'Relevance' },
    { value: 'everest_search_popularity_desc_development', label: 'Popularity' },
    { value: 'everest_search_published_date_desc_development', label: 'Publish Date' },
  ],
};

export default SearchSortBy;
