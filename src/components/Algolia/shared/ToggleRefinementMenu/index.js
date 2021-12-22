import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Menu from '../Menu';
import ToggleRefinement from '../ToggleRefinement';

const ToggleRefinementMenuWrapper = styled.div`
  .toggle-refinement {
    margin-bottom: 1.2rem;
  }
`;

const ToggleRefinementMenu = ({
  menuAttribute,
  toggleRefinementAttribute,
  toggleRefinementLabel,
  toggleRefinementValue,
}) => (
  <ToggleRefinementMenuWrapper>
    <ToggleRefinement
      attribute={toggleRefinementAttribute}
      label={toggleRefinementLabel}
      value={toggleRefinementValue}
    />
    <Menu attribute={menuAttribute} />
  </ToggleRefinementMenuWrapper>
);

ToggleRefinementMenu.propTypes = {
  menuAttribute: PropTypes.string.isRequired,
  toggleRefinementAttribute: PropTypes.string.isRequired,
  toggleRefinementLabel: PropTypes.string.isRequired,
  toggleRefinementValue: PropTypes.string.isRequired,
};

export default ToggleRefinementMenu;
