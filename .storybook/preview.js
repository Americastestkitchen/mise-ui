import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { breakpoints } from '../src/styles';
import carousel from '../src/styles/carousel';
import globalStyles from '../src/styles/global';

const theme = { breakpoints };

export const decorators = [
  (Story, { args }) => (
      <ThemeProvider theme={{ ...theme, mode: args.mode || null, siteKey: args.siteKey || null }}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
  )
]

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhiteSpaceSensitivity: 'strict'
    }
  }
};

const GlobalStyle = createGlobalStyle`${globalStyles}${carousel}`;
