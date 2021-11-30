/* eslint-disable react/require-default-props */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PhotoCarousel, { PhotoCarouselProps } from './PhotoCarousel';
import { defaultTheme, setBackground, storybookParameters, wrapKnobs } from '../../../config/shared.stories';

export default {
  title: 'Components/Carousels/PhotoCarousel',
  component: PhotoCarousel,
  ...storybookParameters,
};

type PreviewProps = { theme?: any, props?: Partial<PhotoCarouselProps> };

const items: PhotoCarouselProps['items'] = [
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

const defaultArgs: Partial<PhotoCarouselProps> = {
  as: 'h1',
  title: 'Tips for Grilling Burgers',
  items,
  maxWidth: '800px',
};

const PreviewPhotoCarousel = ({ theme, props }: PreviewProps) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <PhotoCarousel {...wrapKnobs({ ...defaultArgs, ...props })} />
  </ThemeProvider>
);

export const AtkPhotoCarousel = () => <PreviewPhotoCarousel theme={{ siteKey: 'atk' }} />;

export const CcoPhotoCarousel = () => <PreviewPhotoCarousel theme={{ siteKey: 'cco' }} />;
setBackground([CcoPhotoCarousel], 'cco');

export const CioPhotoCarousel = () => <PreviewPhotoCarousel theme={{ siteKey: 'cio' }} />;
setBackground([CioPhotoCarousel], 'cio');

export const AtkPhotoCarouselOneItem = () => <PreviewPhotoCarousel theme={{ siteKey: 'atk' }} props={{ items: [items[0]] }} />;

export const AtkPhotoCarouselScaledDown = () => <PreviewPhotoCarousel theme={{ siteKey: 'atk' }} props={{ maxWidth: '400px' }} />;

const Container = styled.div`
  width: 500px;
  border: 3px solid black;
`;

export const AtkPhotoCarouselInContainer = () => <Container><PreviewPhotoCarousel theme={{ siteKey: 'atk' }} /></Container>;
