import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu/Menu';
import ToggleRefinement from '../ToggleRefinement/ToggleRefinement';

const ToggleRefinementMenuWrapper = styled.div`
  .toggle-refinement {
    margin-bottom: 1.2rem;
  }
`;

export type ToggleRefinementMenuProps = {
  menuAttribute: string;
  menuOnClickItem: () => void;
  menuTransformItems: () => void;
  toggleRefinementAttribute: string;
  toggleRefinementClick: () => void;
  toggleRefinementLabel: string;
  toggleRefinementValue: string;
}

const ToggleRefinementMenu = ({
  menuAttribute,
  menuOnClickItem,
  menuTransformItems,
  toggleRefinementAttribute,
  toggleRefinementClick,
  toggleRefinementLabel,
  toggleRefinementValue,
}: ToggleRefinementMenuProps) => (
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

export default ToggleRefinementMenu;
