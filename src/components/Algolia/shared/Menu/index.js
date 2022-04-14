import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectMenu } from 'react-instantsearch-dom';
import RefinementFilter from '../RefinementFilter2';

const MenuWrapper = styled.ul`
  ${({ hasItems }) => (hasItems ? 'margin-bottom: 4rem;' : '')}

  .refinement-filter__wrapper {
    margin-bottom: 1.2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Menu = ({ items, onClickItem, ...restProps }) => (
  <MenuWrapper hasItems={items && items.length > 0}>
    {
      items.map(item => (
        <RefinementFilter
          {...item}
          {...restProps}
          key={item.label}
          handleClick={onClickItem}
          includeCount={false}
        />
      ))
    }
  </MenuWrapper>
);

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  onClickItem: PropTypes.func,
};

export default connectMenu(Menu);
