import React from 'react';
import { ThemeProvider } from 'styled-components';
import RelatedContentCard, { RelatedContentCardProps } from './RelatedContentCard';
import { defaultTheme, setBackground, storybookParameters, wrapKnobs } from '../../../config/shared.stories';

export default {
  title: 'Components/Cards/RelatedContentCard',
  component: RelatedContentCard,
  ...storybookParameters,
};

type PreviewProps = { theme?: Record<string, unknown>, props?: Partial<RelatedContentCardProps> };

const defaultArgs = {
  href: '/',
  src: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,f_auto,g_faces:auto,q_auto:low,w_200,ar_1:1/v1592840035/mise-play/feature-card-wide.jpg',
  headline: 'Recipe',
  title: 'Whole Roast Snapper with Citrus Vinaigrette',
  body: 'To serve up an impressive dish of roasted red snapper, we started by making shallow slashes in the skin to ensure even cooking and seasoning; this step also allowed us to gauge the doneness of the fish easily.',
};

const PreviewRelatedContentCard = ({ theme, props }: PreviewProps) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <RelatedContentCard {...wrapKnobs({ ...defaultArgs, ...props })} />
  </ThemeProvider>
);

export const AtkNoLink = () => <PreviewRelatedContentCard theme={{ siteKey: 'atk' }} />;
export const AtkWithLink = () => <PreviewRelatedContentCard theme={{ siteKey: 'atk' }} props={{ link: 'Save 26% Right Now' }} />;
export const AtkWithButton = () => <PreviewRelatedContentCard theme={{ siteKey: 'atk' }} props={{ link: 'Save 26% Right Now', withButton: true }} />;

export const CcoNoLink = () => <PreviewRelatedContentCard theme={{ siteKey: 'cco' }} />;
export const CcoWithLink = () => <PreviewRelatedContentCard theme={{ siteKey: 'cco' }} props={{ link: 'Save 26% Right Now' }} />;
export const CcoWithButton = () => <PreviewRelatedContentCard theme={{ siteKey: 'cco' }} props={{ link: 'Save 26% Right Now', withButton: true }} />;
setBackground('cco', CcoNoLink, CcoWithLink, CcoWithButton);

export const CioNoLink = () => <PreviewRelatedContentCard theme={{ siteKey: 'cio' }} />;
export const CioWithLink = () => <PreviewRelatedContentCard theme={{ siteKey: 'cio' }} props={{ link: 'Save 26% Right Now' }} />;
export const CioWithButton = () => <PreviewRelatedContentCard theme={{ siteKey: 'cio' }} props={{ link: 'Save 26% Right Now', withButton: true }} />;
setBackground('cio', CioNoLink, CioWithLink, CioWithButton);
