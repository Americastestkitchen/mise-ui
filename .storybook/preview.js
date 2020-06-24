import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withHTML } from '@whitespace/storybook-addon-html/react';
import { breakpoints } from '../src/styles';
import carousel from '../src/styles/carousel';
import globalStyles from '../src/styles/global';

const theme = { breakpoints };

const GlobalStyle = createGlobalStyle`${globalStyles}${carousel}`;

addDecorator(
  withHTML({
    prettier: {
      htmlWhitespaceSensitivity: 'ignore',
    },
  }),
);

addDecorator(story => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  </>
));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
