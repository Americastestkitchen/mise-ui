import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ShowMoreLess from '../../../ShowMoreLess';
import RefinementFilter from '../RefinementFilter/RefinementFilter';
import { color } from '../../../../styles';

const RefinementListRefinements = styled.ul`
  border: none;
  margin: 0;
  padding: 0;

  li:last-child {
    margin: 0;
  }
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
    altFill: color.squirrel,
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

export const CustomRefinementList = ({
  attribute,
  currentRefinement,
  initialCount,
  items,
  refine,
  handleClick,
}) => (
  <RefinementListRefinements>
    {
      attribute === 'search_site_list' ? (
        siteMap.map(site => (
          <RefinementFilter
            {...site}
            attribute={attribute}
            handleClick={handleClick}
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
          initialCount={initialCount}
          items={
            items.map(item => (
              <RefinementFilter
                {...item}
                attribute={attribute}
                key={`${attribute}-${item.label}`}
                handleClick={handleClick}
                refine={refine}
              />
            ))
          }
        />
      )
    }
  </RefinementListRefinements>
);

CustomRefinementList.propTypes = {
  attribute: PropTypes.string.isRequired,
  currentRefinement: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
  /** Number of menu items to show by default */
  initialCount: PropTypes.number,
  items: PropTypes.array,
  refine: PropTypes.func.isRequired,
};

CustomRefinementList.defaultProps = {
  handleClick: null,
  initialCount: 3,
  items: null,
};

const RefinementList = ({ attribute, items, ...restProps }) => (
  items && items.length > 0 ? (
    <CustomRefinementList
      attribute={attribute}
      items={items}
      {...restProps}
    />
  ) : null
);

RefinementList.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string.isRequired,
  /** Algolia attribute, list of refinement values. */
  items: PropTypes.array.isRequired,
  /** Used to pass click functionality from jarvis etc. */
  handleClick: PropTypes.func,
  /** Initial number of refinement filters that are visible in the refinement list. */
  transformItems: PropTypes.func,
};

RefinementList.defaultProps = {
  handleClick: null,
  transformItems: null,
};

export default RefinementList;
