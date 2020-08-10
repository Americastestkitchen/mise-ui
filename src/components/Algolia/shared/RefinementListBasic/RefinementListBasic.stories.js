import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import LabelFrame from '../../../LabelFrame';
import RefinementListBasic from './index';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import { color, spacing } from '../../../../styles';

const DarkModeWrapper = styled.div`
  background-color: ${color.nero};
  padding: ${spacing.lg};
  width: 100%;
`;

export default {
  title: 'Components|Algolia/shared/RefinementListBasic',
  component: RefinementListBasic,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <RefinementListBasic
        attribute="search_difficulty_list"
        icon="chefHat"
        label="Difficulty"
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const DarkMode = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ThemeProvider theme={{ mode: 'dark' }}>
        <DarkModeWrapper>
          <RefinementListBasic
            attribute="search_season_list"
            includeCount={false}
            label="Explore 20 Seasons"
          />
        </DarkModeWrapper>
      </ThemeProvider>
    </LabelFrame>
  </MiseInstantSearch>
);
