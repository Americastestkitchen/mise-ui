import React from 'react';

import styled, { css, ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';

import LoadingCard from './index';
import { breakpoints, color, spacing, withThemes } from '../../../styles';

export default {
  title: 'Components/Cards/LoadingCard',
  component: LoadingCard,
};

const StoryWrapperTheme = {
  default: css`
    padding: 12rem;
    background-color: ${color.whiteSmoke};
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
}

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

export const StandardCard = () => (
  <ThemeProvider theme={{breakpoints, mode: 'light'}}>
    <StoryWrapper>
      <LoadingCard type="standard" />
    </StoryWrapper>
  </ThemeProvider>
);

export const FeatureCard = () => (
  <ThemeProvider theme={{breakpoints, mode: 'dark'}}>
    <StoryWrapper>
      <LoadingCard type="feature" />
    </StoryWrapper>
  </ThemeProvider>
);

export const FeatureCardWide = () => (
  <ThemeProvider theme={{breakpoints, mode: 'dark'}}>
    <StoryWrapper>
      <LoadingCard type="feature-wide" />
    </StoryWrapper>
  </ThemeProvider>
);

export const HeroCard = () => (
  <ThemeProvider theme={{breakpoints, mode: 'dark'}}>
    <StoryWrapper>
      <LoadingCard type="hero" />
    </StoryWrapper>
  </ThemeProvider>
);

export const TallCard = () => (
  <ThemeProvider theme={{breakpoints, mode: 'dark'}}>
    <StoryWrapper>
      <LoadingCard type="tall" />
    </StoryWrapper>
  </ThemeProvider>
);

export const TallCardWide = () => (
  <ThemeProvider theme={{breakpoints, mode: 'dark'}}>
    <StoryWrapper>
      <LoadingCard type="tall-wide" />
    </StoryWrapper>
  </ThemeProvider>
);

export const QueueCard = () => (
  <ThemeProvider theme={{breakpoints, mode: 'dark'}}>
    <StoryWrapper>
      <LoadingCard type="queue" />
    </StoryWrapper>
  </ThemeProvider>
);

export const PersonCard = () => (
  <ThemeProvider theme={{breakpoints, mode: 'dark'}}>
    <StoryWrapper>
      <LoadingCard type="person" />
    </StoryWrapper>
  </ThemeProvider>
);

export const PodcastEpisodeCard = () => (
  <ThemeProvider theme={{breakpoints, mode: 'dark'}}>
    <StoryWrapper>
      <LoadingCard type="podcast-episode" />
    </StoryWrapper>
  </ThemeProvider>
);
