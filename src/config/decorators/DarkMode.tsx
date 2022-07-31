import React from 'react';
import { Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { breakpoints } from '../../styles';

const DarkModeWrapper = () => (Story: Story) => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark',
  }}
  >
    <Story />
  </ThemeProvider>
);

export default DarkModeWrapper;
