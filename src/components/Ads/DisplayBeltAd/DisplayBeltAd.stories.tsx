import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, setViewport, storybookParameters, wrapKnobs } from '../../../config/shared.stories';
import DisplayBeltAd, { DisplayBeltAdProps } from './DisplayBeltAd';

export default {
  title: 'Components/Ads/DisplayBelt',
  component: DisplayBeltAd,
  ...storybookParameters,
};

type PreviewProps = { theme?: Record<string, unknown>, props?: Partial<DisplayBeltAdProps> };

const defaultArgs = {
  backgroundImages: {
    mobile: '2022 Review Landing/Belt-placeholder-AKO-Mobile-372x192_2x.png',
    tablet: '2022 Review Landing/Belt-placeholder-AKO-Tablet-768x150_2x.png',
    largeTablet: '2022 Review Landing/Belt-placeholder-AKO-Landscape_Tablet-1024x150_2x.png',
    desktop: '2022 Review Landing/Belt-placeholder-AKO-Desktop-1280x150_2x.png',
  },
  ctaCopy: 'SAVE NOW',
  ctaLink: 'www.americastestkitchen.com',
  headline: 'Discover favorite cookbooks',
  saleCopy: 'Up to 70% off',
};

const PreviewDisplayBeltAd = ({ theme, props }: PreviewProps) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <DisplayBeltAd {...wrapKnobs({ ...defaultArgs, ...props })} />
  </ThemeProvider>
);

export const AtkBeltAd = () => <PreviewDisplayBeltAd theme={{ siteKey: 'atk' }} />;
export const CioBeltAd = () => <PreviewDisplayBeltAd theme={{ siteKey: 'cio' }} />;
export const CcoBeltAd = () => <PreviewDisplayBeltAd theme={{ siteKey: 'cco' }} />;
export const AtkBeltAdMobile = () => <PreviewDisplayBeltAd theme={{ siteKey: 'atk' }} />;
export const AtkBeltAdTablet = () => <PreviewDisplayBeltAd theme={{ siteKey: 'atk' }} />;

setViewport('iphone6', AtkBeltAdMobile);
setViewport('ipad', AtkBeltAdTablet);
