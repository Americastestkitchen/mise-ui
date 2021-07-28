import breakpoint from 'styled-components-breakpoint';
import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { boolean, withKnobs, select, text } from '@storybook/addon-knobs';

import {
  breakpoints,
  color,
  spacing,
  withThemes,
} from '../../styles';

import EditorsNote from './index';

export default {
  title: 'Components/EditorsNote',
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
  cco: css`
    background-color: ${color.white};
  `,
  cio: css`
    background-color: ${color.linen};
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
      siteKey: select('Site Key', ['atk', 'cco', 'cio'], 'atk'),
    }}>
      <StoryWrapper>
        <EditorsNote
          content={text('Content', 'This is a pretty self explanatory one. When a price changes, or we’ve noticed that the price of an item fluctuates a lot, this is the note to use!')}
          noteType={select('Type', ['alert', 'coming_soon', 'generic', 'price_update', 'retention', 'retest'], 'generic')}
          subtitle={text('Subtitle', 'February 2020')}
          title={text('Title', 'Price Update')}
        />
      </StoryWrapper>
    </ThemeProvider>
  );
}

export const WithHtml = () => {
  const [success, setSuccess] = useState(false);
  return (
    <ThemeProvider theme={{
      breakpoints,
      siteKey: select('Site Key', ['atk', 'cco', 'cio'], 'atk'),
    }}>
      <StoryWrapper>
        <EditorsNote
          content="This is a pretty self explanatory one. When a <a href='#test-link'>price changes</a>, or we’ve noticed that the price of an item fluctuates a lot, this is the note to use!"
          noteType={select('Type', ['alert', 'coming_soon', 'generic', 'price_update', 'retention', 'retest'], 'generic')}
          subtitle={text('Subtitle', 'February 2020')}
          title={text('Title', 'Price Update')}
        />
      </StoryWrapper>
    </ThemeProvider>
  );
}
