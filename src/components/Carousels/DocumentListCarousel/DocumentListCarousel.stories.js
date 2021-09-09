import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import data from './__tests__/data';
import DocumentListCarousel from './index';
import { breakpoints, color, withThemes } from '../../../styles'
import { disable, mode } from '../../../config/argTypes';

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

const ThemedDocumentListCarousel = ({ mode, ...props }) => {
  return (
    <ThemeProvider theme={{
      breakpoints,
      mode,
    }}>
      <StoryWrapper className="story-wrapper">
        <DocumentListCarousel
          {...props}
        />
      </StoryWrapper>
    </ThemeProvider>
  );
}

export default {
  title: 'Components/Carousels/DocumentListCarousel',
  component: DocumentListCarousel,
  argTypes: {
    mode,
    options: disable,
    adSourceKey: disable,
    ctaDataAttrs: disable,
    ctaTarget: disable,
    renderItem: disable,
    gradient: disable,
    items: disable,
  },
};

const Template = (args) => <DocumentListCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  mode: 'dark',
  intro: 'For folks who always want to know why?',
  ctaText: 'Explore 20 Seasons',
  ctaUrl: 'https://www.americastestkitchen.com',
  title: "America's Test Kitchen",
  type: 'feature',
  items: data.featureItems,
};

export const withBookAd = Template.bind({});
withBookAd.args = {
  ...Default.args,
  adSourceKey: 'CARDDTVAA',
  includesAdType: 'book',
  items: data.standardItems,
};
