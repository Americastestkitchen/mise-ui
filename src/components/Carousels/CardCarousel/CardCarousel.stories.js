import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { withKnobs, select , text } from '@storybook/addon-knobs';

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
  title: 'Components/Carousels/CardCarousel',
  component: CardCarousel,
  decorators: [withKnobs],
  parameters: {
    notes: CardCarouselNotes,
  },
};

const personItems = [
  {
    description: 'Bridget\'s favorite fair food is deep fried twinkies: learn why on this <a href="#">episode of proof</a>',
    imgCloudinaryId: 'mise-play/Image_21_3x.png',
    name: 'Bridget Lancaster',
  },
  {
    description: 'Bridget\'s favorite fair food is deep fried twinkies: learn why on this <a href="#">episode of proof</a>',
    imgCloudinaryId: 'mise-play/Image_21_3x.png',
    name: 'Bridget Lancaster',
  },
  {
    description: 'Bridget\'s favorite fair food is deep fried twinkies: learn why on this <a href="#">episode of proof</a>',
    imgCloudinaryId: 'mise-play/Image_21_3x.png',
    name: 'Bridget Lancaster',
  },
  {
    description: 'Bridget\'s favorite fair food is deep fried twinkies: learn why on this <a href="#">episode of proof</a>',
    imgCloudinaryId: 'mise-play/Image_21_3x.png',
    name: 'Bridget Lancaster',
  },
  {
    description: 'Bridget\'s favorite fair food is deep fried twinkies: learn why on this <a href="#">episode of proof</a>',
    imgCloudinaryId: 'mise-play/Image_21_3x.png',
    name: 'Bridget Lancaster',
  },
  {
    description: 'Bridget\'s favorite fair food is deep fried twinkies: learn why on this <a href="#">episode of proof</a>',
    imgCloudinaryId: 'mise-play/Image_21_3x.png',
    name: 'Bridget Lancaster',
  },
];

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
const heroItems = [
  {
    ctaText: 'Start Learning',
    contentType: 'skill',
    title: 'Tomatoes 101',
    href: 'https://www.google.com',
    logoKey: 'atk',
    backgroundCloudinaryId: "mise-play/Image_3x.png",
    overlayColor: '#a53015',
    siteKey: 'atk',
    siteKeyFavorites: 'atk',
    sticker: { contentType: 'video', type: 'editorial', text: '4 videos' },
    onClick: action('result-click'),
    description: 'Elle teaches you the basics of how to prepare tomatoes for cooking and preserving.',
    personHeadShot: {
      imgCloudinaryId: 'mise-play/Image_21_3x.png',
    },
  },
  {
    ctaText: 'Start Learning',
    contentType: 'skill',
    title: 'Stir-Frying 101',
    href: 'https://www.google.com',
    logoKey: 'atk',
    backgroundCloudinaryId: "mise-play/Image_3x.png",
    overlayColor: '#a53015',
    siteKey: 'cco',
    siteKeyFavorites: 'cco',
    sticker: { contentType: 'video', type: 'editorial', text: '4 videos' },
    onClick: action('result-click'),
    description: 'Elle teaches you the basics of how to prepare stir-fry.',
    personHeadShot: {
      imgCloudinaryId: 'mise-play/Image_21_3x.png',
    },
  },
];

const categoryItems = [
  {
    assetType: "svgIcon",
    browsePath: ".americastestkitchen.com/reviews/browse?page=1&refinementList%5Bsearch_document_klass%5D=&refinementList%5Bsearch_review_type_list%5D=",
    svgId: "star",
    tagline: "Browse all Reviews"
  },
  {
    assetType: "productImage",
    browsePath: ".americastestkitchen.com/reviews/browse?page=1&refinementList%5Bsearch_document_klass%5D=&refinementList%5Bsearch_review_type_list%5D%5B0%5D=Tools%20%26%20Gadgets",
    cloudinaryId: "/ATK Landing Page/tools_and_gadgets_3x.jpg",
    lazy: false,
    tagline: "Tools & Gadgets"
  },
];

const StoryWrapperTheme = {
  default: css`
    padding: 4rem 2rem;
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
};

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

export const PersonCard = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark',
  }}>
    <StoryWrapper>
      <CardCarousel
        items={personItems}
        type="person"
      />
    </StoryWrapper>
  </ThemeProvider>
);

export const StandardCard = () => (
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

export const HeroCard = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark',
  }}>
    <StoryWrapper>
      <CardCarousel
        dotPosition={{ sm: { bottom: `-${spacing.lg}`, right: '50%'  } }}
        items={heroItems}
        type={select('Card Type', ['standard', 'feature', 'tall', 'hero'], 'hero')}
      />
    </StoryWrapper>
  </ThemeProvider>
);

export const CategoryCard = () => (
  <ThemeProvider theme={{
    breakpoints
  }}>
    <StoryWrapper>
      <CardCarousel
        dotPosition={{ sm: { bottom: `-${spacing.lg}`, right: '50%' }}}
        items={categoryItems}
        type="category"
      />
    </StoryWrapper>
  </ThemeProvider>
);


export const RelatedSmallCard = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark'
  }}>
    <StoryWrapper>
      <CardCarousel
        dotPosition={{ sm: { top: `-${spacing.lg}`, right: '50%' }}}
        items={items}
        type="relatedsmall"
      />
    </StoryWrapper>
  </ThemeProvider>
);
