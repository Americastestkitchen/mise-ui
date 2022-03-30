import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, setViewport, storybookParameters, wrapKnobs } from '../../../config/shared.stories';
import VideoCard, { VideoCardProps } from './VideoCard';

export default {
  title: 'Components/Cards/VideoCard',
  component: VideoCard,
  ...storybookParameters,
};

type PreviewProps = { theme?: Record<string, unknown>, props?: Partial<VideoCardProps> };

const defaultArgs = {
  dek: '<p><span class="ql-color-#000000">Test cook Keith Dresser shows host Julia Collin Davison the secret to Pan-Seared Shrimp with Peanuts, Black Pepper, and Lime. Equipment expert Adam Ried shares his top picks for petty and utility knives with host Bridget Lancaster. Test cook Elle Simone Scott makes Bridget a showstopping Shrimp Risotto.</span></p>',
  imageAlt: '',
  imageId: 'ATKTV and CCTV Season Refresh/ATKTV S22/Episode 7/ATK-S22_20210726_15-46-39_49849',
  isActive: false,
  relatedRecipe: {
    altText: 'Shrimp Risotto',
    avgRating: 4.87,
    cloudinaryId: '43534-stp-shrimp-risotto-40',
    commentsCount: 125,
    headline: 'Shrimp Risotto',
    numRatings: 15,
    slug: '11428-shrimp-risotto',
  },
  slug: '806-shrimp-fast-and-slow',
  title: 'Shrimp, Fast and Slow',
};

const PreviewVideoCard = ({ theme, props }: PreviewProps) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <VideoCard {...wrapKnobs({ ...defaultArgs, ...props })} />
  </ThemeProvider>
);

export const AtkVideoCard = () => <PreviewVideoCard theme={{ siteKey: 'atk' }} />;
export const CcoVideoCard = () => <PreviewVideoCard theme={{ siteKey: 'cco' }} />;
export const CioVideoCard = () => <PreviewVideoCard theme={{ siteKey: 'cio' }} />;
export const AtkVideoCardMobile = () => <PreviewVideoCard theme={{ siteKey: 'atk' }} />;
export const AtkVideoCardTablet = () => <PreviewVideoCard theme={{ siteKey: 'atk' }} />;
export const AtkVideoCardTabletLarge = () => <PreviewVideoCard theme={{ siteKey: 'atk' }} />;

setViewport('iphone6', AtkVideoCardMobile);
setViewport('ipad', AtkVideoCardTablet);
setViewport('ipad12p', AtkVideoCardTabletLarge);
