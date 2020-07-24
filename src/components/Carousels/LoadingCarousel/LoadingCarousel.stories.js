import React from 'react';

import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import LoadingCarousel from './index';
import { breakpoints, color, spacing, withThemes } from '../../../styles';

export default {
  title: 'Components|Carousels/LoadingCarousel',
  component: LoadingCarousel,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    background-color: ${color.whiteSmoke};
    padding: 12rem 2rem;
  `,
  dark: css`
    background-color: ${color.nero};
  `,
}

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

export const StandardCardCarousel = () => (
  <ThemeProvider theme={{breakpoints, mode: 'light'}}>
    <StoryWrapper>
      <LoadingCarousel type="standard" />
    </StoryWrapper>
  </ThemeProvider>
);

export const FeatureCardCarousel = () => (
  <ThemeProvider theme={{breakpoints, mode: 'dark'}}>
    <StoryWrapper>
      <LoadingCarousel type="feature" />
    </StoryWrapper>
  </ThemeProvider>
);

export const TallCardCarousel = () => (
  <ThemeProvider theme={{breakpoints, mode: 'light'}}>
    <StoryWrapper>
      <LoadingCarousel type="tall" />
    </StoryWrapper>
  </ThemeProvider>
);

export const DocumentListCarousel = () => (
  <ThemeProvider theme={{breakpoints, mode: 'light'}}>
    <StoryWrapper>
      <LoadingCarousel
        intro='For folks who always want to know why?'
        ctaText='Explore 20 Seasons'
        title="America's Test Kitchen"
        type={select('Card Type', ['standard', 'feature'], 'standard')}
      />
    </StoryWrapper>
  </ThemeProvider>
);
