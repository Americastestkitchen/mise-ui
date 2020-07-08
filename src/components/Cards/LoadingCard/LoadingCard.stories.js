import React from 'react';

import styled, { css, ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';

import LoadingCard from './index';
import { breakpoints, color, spacing, withThemes } from '../../../styles';

export default {
  title: 'Components|Cards/LoadingCard',
  component: LoadingCard,
};

export const StandardCard = () => (
  <LoadingCard type="standard" />
);

export const FeatureCard = () => (
  <LoadingCard type="feature" />
);

export const FeatureCardWide = () => (
  <LoadingCard type="feature-wide" />
);

export const HeroCard = () => (
  <LoadingCard type="hero" />
);

export const TallCard = () => (
  <LoadingCard type="tall" />
);

export const QueueCard = () => (
  <LoadingCard type="queue" />
);

export const PersonCard = () => (
  <LoadingCard type="person" />
);

export const PodcastEpisodeCard = () => (
  <LoadingCard type="podcast-episode" />
);