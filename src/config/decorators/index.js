import React from 'react';
import styled, { css } from 'styled-components';
import { color, withThemes } from '../../styles';

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
    dark: css`
      background-color: ${color.eclipse};
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

export default {
  addThemedWrapper,
};
