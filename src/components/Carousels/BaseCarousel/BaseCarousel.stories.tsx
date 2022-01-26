import React, { PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory } from '@storybook/react';
import { defaultTheme, setBackground, setViewport, storybookParameters } from '../../../config/shared.stories';
import BaseCarousel, { useCarouselContext } from './BaseCarousel';
import StandardCard from '../../Cards/StandardCard';
import { LinkCarouselHeader } from './Headers';
import { useFlickityGroup } from './useFlickity';
import { FullWidthSlide, StandardSlide } from './Slides';
import { CarouselWidthWrapper, IntroCarouselHeader } from '.';
import PhotoCarouselCell, { PhotoCarouselCellProps } from './Cells/PhotoCarouselCell';

export default {
  title: 'Components/Carousels/BaseCarousel',
  component: BaseCarousel,
  ...storybookParameters,
};

const PreviewProvider = ({ children, siteKey }: PropsWithChildren<{siteKey: 'atk' | 'cio' | 'cco'}>) => (
  <ThemeProvider theme={{ ...defaultTheme, siteKey }}>
    {children}
  </ThemeProvider>
);

const Box = styled.a.attrs({ href: '#' })`
  width: 300px;
  height: 400px;
  margin-right: 16px;
  background: red;

  :focus {
    background: blue;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slide = ({ children }: any) => {
  const { onFocus } = useCarouselContext();
  return <Box onFocus={onFocus}>{children}</Box>;
};

export const ATK = () => (
  <PreviewProvider siteKey="atk">
    <BaseCarousel title="The Latest &amp; Best from Our Brands The Latest &amp; Best from Our Brands" showDivider>
      {['a', 'b', 'c', 'd'].map(alphabet => (
        <Slide key={alphabet}>{alphabet}</Slide>
      ))}
    </BaseCarousel>
  </PreviewProvider>
);

export const CCO = () => (
  <PreviewProvider siteKey="cco">
    <BaseCarousel title="The Latest &amp; Best from Our Brands The Latest &amp; Best from Our Brands" showDivider>
      {['a', 'b', 'c', 'd'].map(alphabet => <Slide key={alphabet}>{alphabet}</Slide>)}
    </BaseCarousel>
  </PreviewProvider>
);
setBackground('cco', CCO);

export const CIO = () => (
  <PreviewProvider siteKey="cio">
    <BaseCarousel title="The Latest &amp; Best from Our Brands The Latest &amp; Best from Our Brands" showDivider>
      {['a', 'b', 'c', 'd'].map(alphabet => <Slide key={alphabet}>{alphabet}</Slide>)}
    </BaseCarousel>
  </PreviewProvider>
);
setBackground('cio', CIO);

const items: PhotoCarouselCellProps[] = [
  {
    id: '2124_cvr-sfs-juicy-pub-burger-clr-020-article',
    img: { cloudinaryId: '2124_cvr-sfs-juicy-pub-burger-clr-020-article' },
    description: 'Once you have your digital thermometer, remember 125 degrees Fahrenheit is medium-rare, 135 is medium.',
  },
  {
    id: 'v1592840035/mise-play/feature-card-wide.jpg',
    img: { cloudinaryId: 'v1592840035/mise-play/feature-card-wide.jpg' },
    description: 'Once you have your digital thermometer, remember 125 degrees Fahrenheit is medium-rare, 135 is medium.',
  },
  {
    id: '43350-sfs-spaghetti-aglio-e-olio-68',
    img: { src: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_3:2,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_400/43350-sfs-spaghetti-aglio-e-olio-68' },
    description: 'Once you have your digital thermometer, remember 125 degrees Fahrenheit is medium-rare, 135 is medium.',
  },
];

const recipeItems = [
  {
    contentType: 'recipe',
    contentTypeFormatted: 'Recipe',
    commentCount: 23,
    searchComments: 23,
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
    searchComments: 23,
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
    searchComments: 23,
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
    searchComments: 23,
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
    searchComments: 23,
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
    searchComments: 23,
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
    searchComments: 23,
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

export const PhotoCarouselExample = () => (
  <PreviewProvider siteKey="atk">
    <BaseCarousel title="The Latest &amp; Best from Our Brands The Latest &amp; Best from Our Brands">
      {items.map(item => (
        <FullWidthSlide key={item.id}>
          <PhotoCarouselCell {...item} />
        </FullWidthSlide>
      ))}
    </BaseCarousel>
  </PreviewProvider>
);

export const PhotoCarouselIntroExample = () => (
  <PreviewProvider siteKey="atk">
    <BaseCarousel
      title="Recipe Carousel"
      header={
        <IntroCarouselHeader title="Recipe Carousel Title" intro="Recipe Carousel Intro" />
      }
    >
      {items.map(item => (
        <FullWidthSlide key={item.id}>
          <PhotoCarouselCell {...item} />
        </FullWidthSlide>
      ))}
    </BaseCarousel>
  </PreviewProvider>
);

type ActionProps = {
  siteKey: 'atk' | 'cio' | 'cco';
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
};

const RecipeCarouselExampleTemplate = ({ siteKey = 'atk', onClick }: ActionProps) => (
  <PreviewProvider siteKey={siteKey}>
    <CarouselWidthWrapper
      maxWidthPx={847}
      overflowAuto
    >
      <BaseCarousel
        useFlickityHook={useFlickityGroup}
        title="Recipe Carousel"
        header={(
          <LinkCarouselHeader
            title="Recipe Carousel"
            subtitle="BROWSE ALL"
            onClick={onClick}
          />
        )}
        showDivider

      >
        {recipeItems.map(item => (
          <StandardSlide key={item.objectId}>
            <StandardCard
              key={item.objectId}
              {...item}
              displayFavoritesButton
              searchAttribution
              displayRecipeAttribution
              numRatings={4}
              avgRating={4}
            />
          </StandardSlide>
        ))}
      </BaseCarousel>
    </CarouselWidthWrapper>
  </PreviewProvider>
);
type RCStory = ComponentStory<typeof RecipeCarouselExampleTemplate>

export const RecipeCarouselExample = RecipeCarouselExampleTemplate.bind({});
export const RecipeCarouselCIO: RCStory = RecipeCarouselExampleTemplate.bind({});
RecipeCarouselCIO.args = { siteKey: 'cio' };
export const RecipeCarouselCCO: RCStory = RecipeCarouselExampleTemplate.bind({});
RecipeCarouselCCO.args = { siteKey: 'cco' };
export const RecipeCarouselExampleTablet = RecipeCarouselExampleTemplate.bind({});
export const RecipeCarouselExampleMobile = RecipeCarouselExampleTemplate.bind({});

setBackground('cio', RecipeCarouselCIO);
setBackground('cco', RecipeCarouselCCO);
setViewport('ipad', RecipeCarouselExampleTablet);
setViewport('iphone6', RecipeCarouselExampleMobile);
