import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { withKnobs, select , text } from '@storybook/addon-knobs/react';

import CardCarouselNotes from './CardCarousel.md';
import LoadingCarousel from '../LoadingCarousel';
import { breakpoints, color, spacing, withThemes } from '../../../styles'
import LoadableVisibility from "react-loadable-visibility/react-loadable";

const CardCarousel = LoadableVisibility({
  loader: () => import("./index"),
  loading: () => (<LoadingCarousel type="standard" />),
  delay: 50,
});

export default {
  title: 'Components|Carousels/CardCarousel',
  component: CardCarousel,
  decorators: [withKnobs],
  parameters: {
    notes: CardCarouselNotes,
  },
};

const items = [
  {
    contentType: 'recipe',
    contentTypeFormatted: 'Recipe',
    commentCount: 23,
    ctaText: '',
    ctaUrl: '',
    href: '/recipes/8125',
    imageAlt: 'Chocolate Crinkle Cookies',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/22391_sfs-chocolate-crinkle-cookies-35',
    objectId: 'recipe_8125',
    siteKey: 'atk',
    siteKeyFavorites: 'atk',
    title: 'Chocolate Crinkle Cookies',
  },
  {
    contentType: 'recipe',
    contentTypeFormatted: 'Recipe',
    commentCount: 23,
    ctaText: '',
    ctaUrl: '',
    href: '/recipes/8125',
    imageAlt: 'Chocolate Crinkle Cookies',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/22391_sfs-chocolate-crinkle-cookies-35',
    objectId: 'recipe_8125',
    siteKey: 'atk',
    siteKeyFavorites: 'atk',
    title: 'Chocolate Crinkle Cookies',
  },
  {
    contentType: 'recipe',
    contentTypeFormatted: 'Recipe',
    commentCount: 23,
    ctaText: '',
    ctaUrl: '',
    href: '/recipes/8125',
    imageAlt: 'Chocolate Crinkle Cookies',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/22391_sfs-chocolate-crinkle-cookies-35',
    objectId: 'recipe_8125',
    siteKey: 'atk',
    siteKeyFavorites: 'atk',
    title: 'Chocolate Crinkle Cookies',
  },
  {
    contentType: 'recipe',
    contentTypeFormatted: 'Recipe',
    commentCount: 23,
    ctaText: '',
    ctaUrl: '',
    href: '/recipes/8125',
    imageAlt: 'Chocolate Crinkle Cookies',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/22391_sfs-chocolate-crinkle-cookies-35',
    objectId: 'recipe_8125',
    siteKey: 'atk',
    siteKeyFavorites: 'atk',
    title: 'Chocolate Crinkle Cookies',
  },
  {
    contentType: 'recipe',
    contentTypeFormatted: 'Recipe',
    commentCount: 23,
    ctaText: '',
    ctaUrl: '',
    href: '/recipes/8125',
    imageAlt: 'Chocolate Crinkle Cookies',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/22391_sfs-chocolate-crinkle-cookies-35',
    objectId: 'recipe_8125',
    siteKey: 'atk',
    siteKeyFavorites: 'atk',
    title: 'Chocolate Crinkle Cookies',
  },
  {
    contentType: 'recipe',
    contentTypeFormatted: 'Recipe',
    commentCount: 23,
    ctaText: '',
    ctaUrl: '',
    href: '/recipes/8125',
    imageAlt: 'Chocolate Crinkle Cookies',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/22391_sfs-chocolate-crinkle-cookies-35',
    objectId: 'recipe_8125',
    siteKey: 'atk',
    siteKeyFavorites: 'atk',
    title: 'Chocolate Crinkle Cookies',
  },
  {
    contentType: 'recipe',
    contentTypeFormatted: 'Recipe',
    commentCount: 23,
    ctaText: '',
    ctaUrl: '',
    href: '/recipes/8125',
    imageAlt: 'Chocolate Crinkle Cookies',
    imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/22391_sfs-chocolate-crinkle-cookies-35',
    objectId: 'recipe_8125',
    siteKey: 'atk',
    siteKeyFavorites: 'atk',
    title: 'Chocolate Crinkle Cookies',
  },
];

const tallItems = [
  {
    contentType: 'episode',
    dek: 'New episodes weekly',
    href: 'https://www.google.com',
    logoKey: 'atk',
    imageAlt: text('Image alt text', ''),
    imageUrl: text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592937037/mise-play/tall-card.jpg'),
    overlayColor: '#a53015',
    siteKey: 'cco',
    siteKeyFavorites: 'cco',
    stickers: [{ type: 'priority', text: 'Popular' }],
    onClick: action('result-click'),
  },
  {
    contentType: 'episode',
    dek: 'New episodes weekly',
    href: 'https://www.google.com',
    logoKey: 'atk',
    imageAlt: text('Image alt text', ''),
    imageUrl: text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592937037/mise-play/tall-card.jpg'),
    overlayColor: '#a53015',
    siteKey: 'cco',
    siteKeyFavorites: 'cco',
    stickers: [{ type: 'priority', text: 'new' }, { type: 'editorial', text: '38:28' }],
    onClick: action('result-click'),
  },
  {
    contentType: 'episode',
    dek: 'New episodes weekly',
    href: 'https://www.google.com',
    logoKey: 'atk',
    imageAlt: text('Image alt text', ''),
    imageUrl: text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592937037/mise-play/tall-card.jpg'),
    overlayColor: '#a53015',
    siteKey: 'cco',
    siteKeyFavorites: 'cco',
    stickers: [{ type: 'editorial', text: '38:28' }],
    onClick: action('result-click'),
  },
  {
    contentType: 'episode',
    dek: 'New episodes weekly',
    href: 'https://www.google.com',
    logoKey: 'atk',
    imageAlt: text('Image alt text', ''),
    imageUrl: text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592937037/mise-play/tall-card.jpg'),
    overlayColor: '#a53015',
    siteKey: 'cco',
    siteKeyFavorites: 'cco',
    stickers: [{ type: 'editorial', text: '38:28' }],
    onClick: action('result-click'),
  },
  {
    contentType: 'episode',
    dek: 'New episodes weekly',
    href: 'https://www.google.com',
    logoKey: 'atk',
    imageAlt: text('Image alt text', ''),
    imageUrl: text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592937037/mise-play/tall-card.jpg'),
    overlayColor: '#a53015',
    siteKey: 'cco',
    siteKeyFavorites: 'cco',
    stickers: [{ type: 'editorial', text: '38:28' }],
    onClick: action('result-click'),
  },
  {
    contentType: 'episode',
    dek: 'New episodes weekly',
    href: 'https://www.google.com',
    logoKey: 'atk',
    imageAlt: text('Image alt text', ''),
    imageUrl: text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592937037/mise-play/tall-card.jpg'),
    overlayColor: '#a53015',
    siteKey: 'cco',
    siteKeyFavorites: 'cco',
    stickers: [{ type: 'editorial', text: '38:28' }],
    onClick: action('result-click'),
  },
];

const StoryWrapperTheme = {
  default: css`
    padding: 2rem;
  `,
  dark: css`
    background-color: ${color.nero};
  `,
};

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

export const Default = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: select('Theme', ['default', 'dark'], 'default')
  }}>
    <StoryWrapper>
      <CardCarousel
        items={items}
        type={select('Card Type', ['standard', 'feature', 'tall'], 'standard')}
      />
    </StoryWrapper>
  </ThemeProvider>
);

export const TallCard = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark',
  }}>
    <StoryWrapper>
      <CardCarousel
        dotPosition={{ sm: { bottom: `-${spacing.xxsm}`, right: '50%'  } }}
        items={tallItems}
        type={select('Card Type', ['standard', 'feature', 'tall'], 'tall')}
      />
    </StoryWrapper>
  </ThemeProvider>
);
