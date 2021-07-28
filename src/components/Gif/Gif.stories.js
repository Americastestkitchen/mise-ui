import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs';

import {
  breakpoints,
  color,
  spacing,
  withThemes,
} from '../../styles';
import { getGifSrcSet } from '../../lib/cloudinary';

import Gif from './index';

export default {
  title: 'Components|Gif',
  component: Gif,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    padding: ${spacing.sm};
    width: 30rem;
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
}

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

export const Default = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: select('Theme', ['default', 'dark'], 'default')
  }}>
    <StoryWrapper>
      <Gif
        lazy={false}
        srcSet={getGifSrcSet(
          'mise-play/membership-showcase-tablet',
          'showcaseFreeTrialTablet',
          {
            width: 320,
          },
        )}
      />
    </StoryWrapper>
  </ThemeProvider>
);
