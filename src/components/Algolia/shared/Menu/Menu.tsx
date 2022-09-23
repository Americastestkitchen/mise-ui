import React from 'react';
import styled from 'styled-components';
import { connectMenu } from 'react-instantsearch-dom';
import { MenuProvided } from 'react-instantsearch-core';
import RefinementFilter from '../RefinementFilter2/RefinementFilter2';

const MenuWrapper = styled.ul<{hasItems: boolean}>`
  ${({ hasItems }) => (hasItems ? 'margin-bottom: 4rem;' : '')}

  .refinement-filter__wrapper {
    margin-bottom: 1.2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export interface MenuProps extends MenuProvided {
  onClickItem: () => void;
}

const Menu = ({ items, onClickItem, ...restProps }: MenuProps) => (
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

export default connectMenu(Menu);
