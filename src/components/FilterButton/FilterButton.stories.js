import React from 'react';
import { action } from '@storybook/addon-actions';
import styled, { ThemeProvider } from 'styled-components';

import FilterButton from './index';
import { color, spacing } from '../../styles';

const DarkModeWrapper = styled.div`
  background-color: ${color.gunmetal};
  padding: ${spacing.md};
`;

export default {
  title: 'Components|FilterButton',
  component: FilterButton,
};

export const LightMode = () => (
  <FilterButton onClick={action('click-filter-button')} />
);

export const DarkMode = () => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <DarkModeWrapper>
      <FilterButton
        onClick={action('click-filter-button')}
        text="More Seasons"
      />
    </DarkModeWrapper>
  </ThemeProvider>
);
