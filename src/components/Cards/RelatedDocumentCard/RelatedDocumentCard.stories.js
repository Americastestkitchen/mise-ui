import breakpoint from 'styled-components-breakpoint';
import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import {
  breakpoints,
  color,
  spacing,
  withThemes,
} from '../../../styles';

import RelatedDocumentCard from './index';

export default {
  title: 'Components/Cards/RelatedDocumentCard',
  component: RelatedDocumentCard,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    background-color: ${color.whiteSmoke};
    padding: 1.6rem 1.6rem 5rem;
    width: 100%;

    ${breakpoint('lg')`
      width: 848px;
    `}
  `,
}

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

export const Default = () => (
  <ThemeProvider theme={{
    breakpoints,
    siteKey: 'atk',
  }}>
    <StoryWrapper>
      <RelatedDocumentCard
        attribution={text('Attribution', 'AMERICA’S TEST KITCHEN')}
        contentType="episode"
        href={text('URL', 'https://www.americastestkitchen.com/episode/742-crepes-two-ways')}
        imageUrl={text('Image Url', 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,f_auto,g_faces:auto,q_auto:low,w_300,ar_16:9/v1592840035/mise-play/feature-card-wide.jpg')}
        siteKey={select('Site Key', ['atk', 'cio', 'cco', 'kids', 'school', 'shop'], 'atk')}
        stickers={[{ type: 'priority', text: 'New' }, { type: 'editorial', text: '23:23'}]}
        subtitle={text('Subtitle', 'From season 13, watch in play')}
        title={text('Title', 'Tasting International Yogurts')}
      />
    </StoryWrapper>
  </ThemeProvider>
);
