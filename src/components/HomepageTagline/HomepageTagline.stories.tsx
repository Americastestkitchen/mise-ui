import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, setViewport, storybookParameters, wrapKnobs } from '../../config/shared.stories';
import HomepageTagline, { HomepageTaglineProps } from './HomepageTagline';

export default {
  title: 'Components/HomepageTagline',
  component: HomepageTagline,
  ...storybookParameters,
};

type PreviewProps = {
  theme?: Record<string, unknown>,
  props?: Partial<HomepageTaglineProps>,
};

const PreviewHomepageTagline = ({ theme, props }: PreviewProps) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <HomepageTagline {...wrapKnobs({ ...props })} />
  </ThemeProvider>
);

// add props to component variations V
export const AtkTagline = () => <PreviewHomepageTagline theme={{ siteKey: 'atk' }} props={{ siteKey: 'atk' }} />;
export const CcoTagline = () => <PreviewHomepageTagline theme={{ siteKey: 'cco' }} props={{ siteKey: 'cco' }} />;
export const CioTagline = () => <PreviewHomepageTagline theme={{ siteKey: 'cio' }} props={{ siteKey: 'cio' }} />;
export const AtkTaglineMobile = () => <PreviewHomepageTagline theme={{ siteKey: 'atk' }} props={{ siteKey: 'atk' }} />;
export const AtkTaglineTablet = () => <PreviewHomepageTagline theme={{ siteKey: 'atk' }} props={{ siteKey: 'atk' }} />;
export const AtkTaglineTabletLarge = () => <PreviewHomepageTagline theme={{ siteKey: 'atk' }} props={{ siteKey: 'atk' }} />;

setViewport('iphone6', AtkTaglineMobile);
setViewport('ipad', AtkTaglineTablet);
setViewport('ipad12p', AtkTaglineTabletLarge);
