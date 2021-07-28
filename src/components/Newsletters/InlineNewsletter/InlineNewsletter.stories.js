import breakpoint from 'styled-components-breakpoint';
import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs';

import {
  breakpoints,
  color,
  spacing,
  withThemes,
} from '../../../styles';

import InlineNewsletter from './index';

export default {
  title: 'Components|Newsletters/InlineNewsletter',
  component: InlineNewsletter,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    padding: ${spacing.xxlg} 0;
  `,
  dark: css`
    background-color: ${color.gunmetal};
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
      mode: select('Theme', ['default', 'dark'], 'dark')
    }}>
      <StoryWrapper>
        <InlineNewsletter
          buttonColor={select('Button Color', ['frog', 'tomato', 'eclipse'], 'frog')}
          buttonTextColor={select('Button Text Color', ['white', 'eclipse', 'tomato'], 'white')}
          buttonText={text('Button Text', 'Sign me up')}
          inputId="newsletter-email"
          instanceId="newsletter-email-1"
          onSubmit={(email) => {
            setSuccess(true);
          }}
          subtitle={text('Subtitle', 'ATK KIDS Newsletter')}
          success={success}
          successTitle={text('Success Title', 'Thank you!')}
          successDescription={text('Success Description', 'You have been add to our mailing list.')}
          title={text('Title', 'Get kid-friendly recipes and fun activities from the test kitchen in your inbox!')}
        />
      </StoryWrapper>
    </ThemeProvider>
  );
}
