import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs';

import {
  breakpoints,
  color,
  spacing,
  withThemes,
} from '../../../styles';

import StationFinderForm from './index';

export default {
  title: 'Components|Forms/StationFinderForm',
  component: StationFinderForm,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    padding: ${spacing.sm};
    background-color: ${color.gunmetal};
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
    mode: select('Theme', ['default', 'dark'], 'dark')
  }}>
    <StoryWrapper>
      <StationFinderForm
        id="station-finder-form-story"
        onSubmit={() => {}}
      />
    </StoryWrapper>
  </ThemeProvider>
);
