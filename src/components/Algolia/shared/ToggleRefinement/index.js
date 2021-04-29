import React from 'react';
import PropTypes from 'prop-types';
import { connectRefinementList } from 'react-instantsearch-dom';

import RefinementFilter2 from '../RefinementFilter2';

const ToggleRefinement = ({
  attribute,
  label,
  value,
  ...restProps
}) => (
  <div className="toggle-refinement">
    <RefinementFilter2
      attribute={attribute}
      filterType="toggleRefinement"
      includeCount={false}
      label={label}
      value={value}
      {...restProps}
    />
  </div>
);

ToggleRefinement.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string.isRequired,
  /** Filter label */
  label: PropTypes.string.isRequired,
  /** Value of filter to be used for refining results. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array], PropTypes.string).isRequired,
};

export default connectRefinementList(ToggleRefinement);
