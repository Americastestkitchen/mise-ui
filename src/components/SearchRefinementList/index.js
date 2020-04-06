import React from 'react';
import PropTypes from 'prop-types';
import { connectRefinementList } from 'react-instantsearch-dom';
import styled from 'styled-components';

import ShowMoreLess from '../ShowMoreLess';
import SearchRefinementFilter from './components/SearchRefinementFilter';
import ShowHide from '../ShowHide';
import { color } from '../../styles';

const SearchRefinementListRefinements = styled.div`
  border: none;
  margin: 0;
  padding: 0;
`;

const siteMap = [
  {
    altFill: color.tomato,
    label: 'America\'s Test Kitchen',
    value: 'atk',
  },
  {
    altFill: color.denim,
    label: 'Cook\'s Country',
    value: 'cco',
  },
  {
    altFill: color.cork,
    label: 'Cook\'s Illustrated',
    value: 'cio',
  },
  {
    altFill: color.jade,
    label: 'ATK Kids',
    value: 'kids',
  },
  {
    altFill: color.tomato,
    label: 'Cooking School',
    value: 'school',
  },
  {
    altFill: color.tomato,
    value: 'shop',
    label: 'ATK Shop',
  },
];

const RefinementList = ({ attribute, currentRefinement, items, refine }) => (
  <SearchRefinementListRefinements>
    {
      attribute === 'search_site_list' ? (
        siteMap.map(site => (
          <SearchRefinementFilter
            {...site}
            attribute={attribute}
            includeCount={false}
            isRefined={currentRefinement.includes(site.value)}
            key={`${attribute}-${site.value}`}
            refine={(value) => {
              const next = currentRefinement.includes(value)
                ? currentRefinement.filter(current => current !== value)
                : currentRefinement.concat(value);
              refine(next);
            }}
          />
        ))
      ) : (
        <ShowMoreLess
          id={`show-more-less--${attribute}`}
          initialCount={3}
          items={
            items.map(item => (
              <SearchRefinementFilter
                {...item}
                attribute={attribute}
                key={`${attribute}-${item.label}`}
                refine={refine}
              />
            ))
          }
        />
      )
    }
  </SearchRefinementListRefinements>
);

RefinementList.propTypes = {
  attribute: PropTypes.string.isRequired,
  currentRefinement: PropTypes.array.isRequired,
  items: PropTypes.array,
  refine: PropTypes.func.isRequired,
};

RefinementList.defaultProps = {
  items: null,
};

const SearchRefinementList = ({ showHideLabel, operator, items, ...restProps }) => (
  items.length > 0 && (
    <ShowHide isFieldset label={showHideLabel}>
      <RefinementList
        items={items}
        operator={operator}
        {...restProps}
      />
    </ShowHide>
  )
);

SearchRefinementList.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  operator: PropTypes.oneOf(['and', 'or']),
  /** 'Title' of the list that will be put into clickable show/hide button */
  showHideLabel: PropTypes.string.isRequired,
  /** Initial number of refinement filters that are visible in the refinement list. */
  transformItems: PropTypes.func,
};

SearchRefinementList.defaultProps = {
  operator: 'and',
  transformItems: null,
};

export default connectRefinementList(SearchRefinementList);
