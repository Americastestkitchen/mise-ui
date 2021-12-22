import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectMenu } from 'react-instantsearch-dom';

import RefinementFilter from '../RefinementFilter2';

const MenuWrapper = styled.ul`
  .refinement-filter__wrapper {
    margin-bottom: 1.2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Menu = ({ items, ...restProps }) => (
  <MenuWrapper>
    {
      items.map(item => (
        <RefinementFilter
          {...item}
          {...restProps}
          includeCount={false}
        />
      ))
    }
  </MenuWrapper>
);

Menu.propTypes = {
  items: PropTypes.array.isRequired,
};

export default connectMenu(Menu);
