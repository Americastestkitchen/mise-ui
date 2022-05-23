import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import data from './__tests__/data';
import DocumentSuggestionCarousel from './index';
import { breakpoints, color, withThemes } from '../../../styles'
import { disable } from '../../../config/argTypes';

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

const ThemedDocumentSuggestionCarousel = ({ mode, ...props }) => {
  return (
    <ThemeProvider theme={{
      breakpoints,
      mode,
    }}>
      <StoryWrapper className="story-wrapper">
        <DocumentSuggestionCarousel
          {...props}
        />
      </StoryWrapper>
    </ThemeProvider>
  );
}

export default {
  title: 'Components/Carousels/DocumentSuggestionCarousel',
  component: DocumentSuggestionCarousel,
  argTypes: {
    items: disable,
  },
};

const Template = (args) => <DocumentSuggestionCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...Default.args,
  items: data.suggestionItems,
  title: 'Discover New Favorites',
  subtitle: 'Based on Recent Activity',
};
