import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs/react';

import {
  breakpoints,
  color,
  spacing,
  withThemes,
} from '../../../styles';

import EmailForm from './index';

export default {
  title: 'Components|Forms/EmailForm',
  component: EmailForm,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    padding: ${spacing.sm};
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
      <EmailForm
        buttonColor={select('Button Color', ['wasabi', 'tomato', 'eclipse'], 'wasabi')}
        buttonTextColor={select('Button Text Color', ['white', 'eclipse', 'tomato'], 'white')}
        buttonText={text('Button Text', 'Sign me up')}
        onSubmit={(email) => {
          console.log('submitted', email)
        }}
      />
    </StoryWrapper>
  </ThemeProvider>
);
