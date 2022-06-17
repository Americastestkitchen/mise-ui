import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, text } from '@storybook/addon-knobs';

import CardWrapper from './index';
import { breakpoints, color, withThemes } from '../../../styles'


export default {
  title: 'Components/Cards/CardWrapper',
  component: CardWrapper,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    padding: 2rem 0 2rem 1.6rem;
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
};

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

const wideCard = {
  attributions: 'Episode • America’s Test Kitchen',
  contentType: 'episode',
  displayFavoritesButton: true,
  href: 'https://www.americastestkitchen.com/episode/658-savory-and-sweet-italian',
  imageAlt: 'Hosts Bridget and Dan on set at ATK',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592840035/mise-play/feature-card-wide.jpg',
  siteKey: 'atk',
  siteKeyFavorites: 'atk',
  stickers: [
    { type: 'priority', text: 'New' },
    { type: 'editorial', text: '23:23'},
  ],
  objectId: 'episode_1234',
  title: 'Savory and Sweet Italian'
};

const standardCard = { ...wideCard };

export const Wide = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark'
  }}>
    <StoryWrapper className="story-wrapper">
      <CardWrapper
        ctaText={text('Cta Text', 'Explore Recipes')}
        ctaUrl="https://www.americastestkitchen.com/episodes/1234"
        item={wideCard}
        title={text('Title', 'Start Cooking')}
        type="feature"
      />
    </StoryWrapper>
  </ThemeProvider>
);

export const Standard = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark'
  }}>
    <StoryWrapper className="story-wrapper">
      <CardWrapper
        ctaText={text('Cta Text', 'Explore Recipes')}
        ctaUrl="https://www.americastestkitchen.com/episodes/1234"
        item={standardCard}
        title={text('Title', 'Start Cooking')}
        type="standard"
      />
    </StoryWrapper>
  </ThemeProvider>
);

export const Tall = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark'
  }}>
    <StoryWrapper className="story-wrapper">
      <CardWrapper
        ctaText={text('Cta Text', 'Explore Recipes')}
        ctaUrl="https://www.americastestkitchen.com/episodes/1234"
        item={standardCard}
        title={text('Title', 'Start Cooking')}
        type="tall"
      />
    </StoryWrapper>
  </ThemeProvider>
);
