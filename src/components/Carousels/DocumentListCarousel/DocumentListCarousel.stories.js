import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import data from './__tests__/data';
import DocumentListCarousel from './index';
import { breakpoints, color, withThemes } from '../../../styles'

export default {
  title: 'Components/Carousels/DocumentListCarousel',
  component: DocumentListCarousel,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    padding: 2rem 0 2rem 1.6rem;
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
};

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

const ThemedComponent = ({
  adSourceKey,
  ctaText,
  ctaUrl,
  includesAdType,
  mode,
  intro,
  title,
  type 
}) => {
  return (
    <ThemeProvider theme={{
      breakpoints,
      mode: 'dark'
    }}>
      <StoryWrapper className="story-wrapper">
        <DocumentListCarousel
          adSourceKey={adSourceKey}
          ctaText={ctaText}
          ctaUrl={ctaUrl}
          includesAdType={includesAdType}
          intro={intro}
          items={type === 'standard' ? data.standardItems : data.featureItems}
          title={title}
          type={type}
        />
      </StoryWrapper>
    </ThemeProvider>
  );
}

export const Default = () => (
  <ThemedComponent
    mode={select('Theme', ['default', 'dark'], 'dark')}
    intro={text('Intro', 'For folks who always want to know why?')}
    ctaText={text('CTA Text', 'Explore 20 Seasons')}
    ctaUrl={text('CTA URL', 'https://www.americastestkitchen.com')}
    title="America's Test Kitchen"
    type={select('Card Type', ['standard', 'feature'], 'feature')}
  />
);

export const withBookAd = () => (
  <ThemedComponent
    adSourceKey="CARDDTVAA"
    ctaText={text('CTA Text', 'Explore 20 Seasons')}
    ctaUrl={text('CTA URL', 'https://www.americastestkitchen.com')}
    includesAdType='book'
    intro={text('Intro', 'For folks who always want to know why?')}
    mode={select('Theme', ['default', 'dark'], 'dark')}
    title="America's Test Kitchen"
    type={select('Card Type', ['standard', 'feature'], 'feature')}
  />
)
