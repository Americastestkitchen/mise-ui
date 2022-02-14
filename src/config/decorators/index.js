import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, spacing, withThemes } from '../../styles';

export const addThemedWrapper = () => {
  const ThemedWrapperTheme = {
    default: `
      padding: 3rem;
    `,
    atk: css`
      background-color: ${color.whiteSmoke};
    `,
    cco: css`
      background-color: ${color.white};
    `,
    cio: css`
      background-color: ${color.linen};
    `,
  };

  const ThemedWrapper = styled.div`
    ${withThemes(ThemedWrapperTheme)}
  `;

  return (
    Story => (
      <ThemedWrapper>
        <Story />
      </ThemedWrapper>
    )
  );
};

export const adsDarkThemeWrapper = (color) => {
  const StoryWrapperTheme = {
    default: css`
      ${breakpoint('lg')`
          padding: 8rem ${spacing.sm};
         `}
    `,
    dark: css`
      background-color: ${color};
    `,
  };

  const StoryWrapper = styled.div`
    ${withThemes(StoryWrapperTheme)}
  `;

  return (
    Story => (
      <ThemeProvider theme={{
        mode: 'dark',
      }}
      >
        <StoryWrapper>
          <Story />
        </StoryWrapper>
      </ThemeProvider>
    )
  );
};

export default {
  addThemedWrapper,
};
