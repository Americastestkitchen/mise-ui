import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';

import data from './__tests__/data';
import DocumentListCarousel from './index';
import { breakpoints, color, withThemes } from '../../../styles'

export default {
  title: 'Components|Carousels/DocumentListCarousel',
  component: DocumentListCarousel,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    padding: 2rem 0 2rem 1.6rem;
  `,
  dark: css`
    background-color: ${color.nero};
  `,
};

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

const ThemedComponent = ({ mode, intro, subtitle, title, type }) => {
  return (
    <ThemeProvider theme={{
      breakpoints,
      mode: 'dark'
    }}>
      <StoryWrapper className="story-wrapper">
        <DocumentListCarousel
          intro={intro}
          items={type === 'standard' ? data.standardItems : data.featureItems}
          subtitle={subtitle}
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
    subtitle={text('Subtitle', 'Explore 20 Seasons')}
    title={text('Title', 'Americas Test Kitchen')}
    type={select('Card Type', ['standard', 'feature'], 'feature')}
  />
);
