import React from 'react';
import LoadingCarousel from './index';
import { withKnobs, select } from '@storybook/addon-knobs/react';


export default {
  title: 'Components|Carousels/LoadingCarousel',
  component: LoadingCarousel,
  decorators: [withKnobs],
};

export const StandardCardCarousel = () => (
  <LoadingCarousel type="standard" />
);

export const FeatureCardCarousel = () => (
  <LoadingCarousel type="feature" />
);

export const TallCardCarousel = () => (
  <LoadingCarousel type="tall" />
)

export const DocumentListCarousel = () => (
  <LoadingCarousel
    intro='For folks who always want to know why?'
    ctaText='Explore 20 Seasons'
    title="America's Test Kitchen"
    type={select('Card Type', ['standard', 'feature'], 'standard')}
  />
)
