import React from 'react';
import PropTypes from 'prop-types';
import { connectRefinementList } from 'react-instantsearch-dom';

import RefinementList from '../../shared/RefinementList';
import Accordion from '../../../Accordion';

const SearchRefinementList = ({
  attribute,
  icon,
  iconSize,
  initialCount,
  items,
  showHideLabel,
  ...restProps
}) => (
  items && items.length > 0 ? (
    <Accordion
      icon={icon}
      iconSize={iconSize}
      isFieldset
      label={showHideLabel}
    >
      <RefinementList
        attribute={attribute}
        initialCount={initialCount}
        items={items}
        {...restProps}
      />
    </Accordion>
  ) : null
);

SearchRefinementList.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string.isRequired,
  /* Name of icon */
  icon: PropTypes.string,
  /* Size of icon */
  iconSize: PropTypes.oneOf(['default', 'large']),
  /** Number of menu items to show by default */
  initialCount: PropTypes.number,
  /** Refinement filter values from algolia */
  items: PropTypes.array.isRequired,
  /** Used to pass click functionality from jarvis etc. */
  handleClick: PropTypes.func,
  /** 'Title' of the list that will be put into clickable show/hide button */
  showHideLabel: PropTypes.string.isRequired,
  /** Initial number of refinement filters that are visible in the refinement list. */
  transformItems: PropTypes.func,
};

SearchRefinementList.defaultProps = {
  handleClick: null,
  icon: null,
  iconSize: 'default',
  initialCount: 3,
  transformItems: null,
};

export default connectRefinementList(SearchRefinementList);
