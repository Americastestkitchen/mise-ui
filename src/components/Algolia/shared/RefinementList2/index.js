import React from 'react';
import PropTypes from 'prop-types';

import ShowMoreLess from '../../../ShowMoreLess';
import RefinementFilter2 from '../RefinementFilter2';

export const CustomRefinementList = ({
  attribute,
  hideLegend,
  initialCount,
  items,
  legend,
  refine,
  handleClick,
}) => (
  <fieldset>
    <legend className={hideLegend ? 'visuallyhidden' : null}>{legend}</legend>
    <ShowMoreLess
      id={`show-more-less--${attribute}`}
      initialCount={initialCount}
      items={
        items.map(item => (
          <RefinementFilter2
            {...item}
            attribute={attribute}
            key={`${attribute}-${item.label}`}
            handleClick={handleClick}
            refine={refine}
          />
        ))
      }
    />
  </fieldset>
);

CustomRefinementList.propTypes = {
  attribute: PropTypes.string.isRequired,
  currentRefinement: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
  hideLegend: PropTypes.bool.isRequired,
  /** Number of menu items to show by default */
  initialCount: PropTypes.number,
  items: PropTypes.array,
  legend: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
};

CustomRefinementList.defaultProps = {
  handleClick: null,
  initialCount: 3,
  items: null,
};

const RefinementList2 = ({ attribute, items, ...restProps }) => (
  items && items.length > 0 ? (
    <CustomRefinementList
      attribute={attribute}
      items={items}
      {...restProps}
    />
  ) : null
);

RefinementList2.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string.isRequired,
  /** Algolia attribute, list of refinement values. */
  items: PropTypes.array.isRequired,
  /** Used to pass click functionality from jarvis etc. */
  handleClick: PropTypes.func,
  /** Visually hides legend, but keeps it accessible for screen reader users */
  hideLegend: PropTypes.bool,
  /** Used to label fieldset for accessibility */
  legend: PropTypes.string.isRequired,
  /** Initial number of refinement filters that are visible in the refinement list. */
  transformItems: PropTypes.func,
};

RefinementList2.defaultProps = {
  handleClick: null,
  hideLegend: true,
  transformItems: null,
};

export default RefinementList2;
