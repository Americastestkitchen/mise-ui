import React from 'react';
import PropTypes from 'prop-types';
import { connectNumericMenu } from 'react-instantsearch-dom';

import Accordion from '../../../Accordion/Accordion';
import NumericMenu from '../../shared/NumericMenu';

const SearchNumericMenu = ({ icon, showHideLabel, items, refine }) => (
  items && items.length > 0 ? (
    <Accordion
      icon={icon}
      isFieldset
      label={showHideLabel}
    >
      <NumericMenu
        items={items}
        refine={refine}
      />
    </Accordion>
  ) : null
);

SearchNumericMenu.propTypes = {
  /* Name of icon */
  icon: PropTypes.string,
  /** Refinement filter values from algolia */
  items: PropTypes.array.isRequired,
  /** Apply the filter */
  refine: PropTypes.func.isRequired,
  /** 'Title' of the list that will be put into clickable show/hide button */
  showHideLabel: PropTypes.string.isRequired,
};

SearchNumericMenu.defaultProps = {
  icon: null,
};

export default connectNumericMenu(SearchNumericMenu);
