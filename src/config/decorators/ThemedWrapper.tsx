import React from 'react';
import { Story } from '@storybook/react';
import styled, { css } from 'styled-components';
import { color, withThemes } from '../../styles';

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
  dark: css`
    background-color: ${color.eclipse};
  `,
};

const ThemeWrapper = styled.div`
  ${withThemes(ThemedWrapperTheme)}
`;

const ThemedWrapper = () => (Story: Story) => (
  <ThemeWrapper>
    <Story />
  </ThemeWrapper>
);

export default ThemedWrapper;
