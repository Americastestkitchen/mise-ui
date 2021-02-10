import breakpoint from 'styled-components-breakpoint';
import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { boolean, withKnobs, select, text } from '@storybook/addon-knobs/react';

import {
  breakpoints,
  color,
  spacing,
  withThemes,
} from '../../styles';

import EditorsNote from './index';

export default {
  title: 'Components|EditorsNote',
  component: EditorsNote,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    background-color: ${color.whiteSmoke};
    padding: ${spacing.md};

    ${breakpoint('md')`
      padding: ${spacing.xxlg};
      width: 800px;
    `}
  `,
}

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

export const Default = () => {
  const [success, setSuccess] = useState(false);
  return (
    <ThemeProvider theme={{
      breakpoints,
      siteKey: 'atk',
    }}>
      <StoryWrapper>
        <EditorsNote
          subtitle={text('Subtitle', 'February 2020')}
          title={text('Title', 'Price Update')}
          text={text('Text', 'This is a pretty self explanatory one. When a price changes, or we’ve noticed that the price of an item fluctuates a lot, this is the note to use!')}
          type={select('Type', ['alert', 'bell', 'lightbulb', 'price'], 'price')}
        />
      </StoryWrapper>
    </ThemeProvider>
  );
}
