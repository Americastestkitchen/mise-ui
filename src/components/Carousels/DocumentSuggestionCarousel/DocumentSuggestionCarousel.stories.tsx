import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import data from './__tests__/data';
import DocumentSuggestionCarousel from './index';
import { breakpoints, color, withThemes } from '../../../styles';

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

export default {
  title: 'Components/Carousels/DocumentSuggestionCarousel',
  component: DocumentSuggestionCarousel,
};

export const ThemedDocumentSuggestionCarousel = ({ mode }: {mode: string}) => (
  <ThemeProvider theme={{
    breakpoints,
    mode,
  }}
  >
    <StoryWrapper className="story-wrapper">
      <DocumentSuggestionCarousel
        title=""
        subtitle=""
        items={data.suggestionItems}
      />
    </StoryWrapper>
  </ThemeProvider>
);
