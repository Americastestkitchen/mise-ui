import React from 'react';
import { action } from '@storybook/addon-actions';
import FilterButton from '../FilterButton';

export default {
  title: 'Components|FilterButton',
  component: FilterButton,
};

export const Default = () => (
  <FilterButton onClick={action('click-filter-button')} />
);
