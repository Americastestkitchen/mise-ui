import React from 'react';
import { Story } from '@storybook/react';
import styled, { css, ThemeProvider } from 'styled-components';
import { lg } from '../../styles/breakpoints';
import { breakpoints, color, spacing, withThemes } from '../../styles';

const DarkModeWrapper = () => {
  const StoryWrapperTheme = {
    default: css`
      padding: ${spacing.sm};
      ${lg(css`
        padding: 8rem ${spacing.sm};
      `)}
    `,
    dark: css`
      background-color: ${color.gunmetal};
    `,
  };

  const StoryWrapper = styled.div`
    ${withThemes(StoryWrapperTheme)}
  `;

  const decorator = (Story: Story) => (
    <ThemeProvider theme={{
      breakpoints,
      mode: 'dark',
    }}
    >
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    </ThemeProvider>
  );

  return decorator;
};

export default DarkModeWrapper;
