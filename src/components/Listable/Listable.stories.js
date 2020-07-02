import React from 'react';
import styled from 'styled-components';

import Listable from './index';
import { color, grid } from '../../styles';

export default {
  title: 'Components|Listable',
  component: Listable,
};

const ListableStoryWrapper = styled.div`
  background-color: ${color.nero};
  max-width: ${grid.columnWidth};
  width: ${grid.columnWidth};
`;

export const NotSelectedWithAccess = () => (
  <ListableStoryWrapper>
    <Listable
      cloudinaryId="mise-play/listable-story"
      duration="2:34"
      hasAccess
      title="Introduction to Tomatoes 101"
    />
  </ListableStoryWrapper>
);

export const NotSelectedWithoutAccess = () => (
  <ListableStoryWrapper>
    <Listable
      cloudinaryId="mise-play/listable-story"
      duration="2:34"
      hasAccess={false}
      title="Introduction to Tomatoes 101"
    />
  </ListableStoryWrapper>
);

export const SelectedWithAccess = () => (
  <ListableStoryWrapper>
    <Listable
      cloudinaryId="mise-play/listable-story"
      duration="2:34"
      hasAccess
      isSelected
      title="Introduction to Tomatoes 101"
    />
  </ListableStoryWrapper>
);

export const SelectedWithoutAccess = () => (
  <ListableStoryWrapper>
    <Listable
      cloudinaryId="mise-play/listable-story"
      duration="2:34"
      hasAccess={false}
      isSelected
      title="Introduction to Tomatoes 101"
    />
  </ListableStoryWrapper>
);
