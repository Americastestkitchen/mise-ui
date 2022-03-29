import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, setViewport, storybookParameters, wrapKnobs } from '../../../config/shared.stories';
import RelatedRecipeCard, { RelatedRecipeCardProps } from './RelatedRecipeCard';

export default {
  title: 'Components/Cards/RelatedRecipeCard',
  component: RelatedRecipeCard,
  ...storybookParameters,
};

type PreviewProps = { theme?: Record<string, unknown>, props?: Partial<RelatedRecipeCardProps> };

const defaultArgs = {
  altText: 'Irish Stew with Carrots and Turnips',
  avgRating: 4.86,
  commentsCount: 125,
  headline: 'Irish Stew with Carrots and Turnips',
  numRatings: 7,
  slug: '4122-irish-stew-with-carrots-and-turnips',
  stickers: [
    { type: 'priority', text: 'New' },
    {
      contentType: 'collection',
      icon: 'collection',
      text: '22 Recipes',
      type: 'editorial',
    },
  ],
};

const PreviewRelatedRecipeCard = ({ theme, props }: PreviewProps) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <RelatedRecipeCard {...wrapKnobs({ ...defaultArgs, ...props })} />
  </ThemeProvider>
);

const imageUrls = {
  atk: '43534-stp-shrimp-risotto-40',
  cco: '34368_sfs-irish-stew-with-carrots-and-turnips-464bw',
  cio: 'SFS_Braciole_358_zxxnkx',
};

export const AtkRelatedRecipeCard = () => <PreviewRelatedRecipeCard theme={{ siteKey: 'atk' }} props={{ cloudinaryId: imageUrls.atk }} />;
export const CcoRelatedRecipeCard = () => <PreviewRelatedRecipeCard theme={{ siteKey: 'cco' }} props={{ cloudinaryId: imageUrls.cco }} />;
export const CioRelatedRecipeCard = () => <PreviewRelatedRecipeCard theme={{ siteKey: 'cio' }} props={{ cloudinaryId: imageUrls.cio }} />;
export const AtkRelatedRecipeCardMobile = () => <PreviewRelatedRecipeCard theme={{ siteKey: 'atk' }} props={{ cloudinaryId: imageUrls.cio }} />;
export const AtkRelatedRecipeCardTablet = () => <PreviewRelatedRecipeCard theme={{ siteKey: 'atk' }} props={{ cloudinaryId: imageUrls.cio }} />;
export const AtkRelatedRecipeCardTabletLarge = () => <PreviewRelatedRecipeCard theme={{ siteKey: 'atk' }} props={{ cloudinaryId: imageUrls.cio }} />;

setViewport('iphone6', AtkRelatedRecipeCardMobile);
setViewport('ipad', AtkRelatedRecipeCardTablet);
setViewport('ipad12p', AtkRelatedRecipeCardTabletLarge);
