import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Menu from '../Menu/Menu';
import ToggleRefinement from '../ToggleRefinement/ToggleRefinement';

const ToggleRefinementMenuWrapper = styled.div`
  .toggle-refinement {
    margin-bottom: 1.2rem;
  }
`;

const ToggleRefinementMenu = ({
  menuAttribute,
  menuOnClickItem,
  menuTransformItems,
  toggleRefinementAttribute,
  toggleRefinementClick,
  toggleRefinementLabel,
  toggleRefinementValue,
}) => (
  <ToggleRefinementMenuWrapper>
    <ToggleRefinement
      attribute={toggleRefinementAttribute}
      handleClick={toggleRefinementClick}
      label={toggleRefinementLabel}
      value={toggleRefinementValue}
    />
    <Menu
      attribute={menuAttribute}
      onClickItem={menuOnClickItem}
      transformItems={menuTransformItems}
    />
  </ToggleRefinementMenuWrapper>
);

ToggleRefinementMenu.propTypes = {
  menuAttribute: PropTypes.string.isRequired,
  menuOnClickItem: PropTypes.func,
  menuTransformItems: PropTypes.func,
  toggleRefinementAttribute: PropTypes.string.isRequired,
  toggleRefinementClick: PropTypes.func,
  toggleRefinementLabel: PropTypes.string.isRequired,
  toggleRefinementValue: PropTypes.string.isRequired,
};

ToggleRefinementMenu.defaultProps = {
  toggleRefinementClick: null,
  menuTransformItems: null,
  menuOnClickItem: null,
};
export default ToggleRefinementMenu;
