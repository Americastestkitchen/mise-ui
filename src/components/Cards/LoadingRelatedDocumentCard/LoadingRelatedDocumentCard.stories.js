import breakpoint from 'styled-components-breakpoint';
import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import {
  breakpoints,
  color,
  spacing,
  withThemes,
} from '../../../styles';

import LoadingRelatedDocumentCard from './index';

export default {
  title: 'Components|Cards/LoadingCard/RelatedDocumentCard',
  component: LoadingRelatedDocumentCard,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    background-color: ${color.whiteSmoke};
    padding: 1.6rem 1.6rem 5rem;
    width: 100%;

    ${breakpoint('lg')`
      width: 848px;
    `}
  `,
}

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

export const Default = () => (
  <ThemeProvider theme={{
    breakpoints,
    siteKey: 'atk',
  }}>
    <StoryWrapper>
      <LoadingRelatedDocumentCard
        hasImage={boolean('Has Image')}
        imageAspectRatio={select('Image Aspect Ratio', ['16:9', '1:1', '16:9'])}
        siteKey={select('Site Key', ['atk', 'cio', 'cco', 'kids', 'school', 'shop'], 'atk')}
      />
    </StoryWrapper>
  </ThemeProvider>
);
