import React from 'react';
import styled from 'styled-components';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import useMedia from '../../hooks/useMedia';
import DisplayContent, { DisplayContentProps } from './DisplayContent';

export type HeroImages = {
  mobile: string,
  tablet: string,
  largeTablet: string,
  desktop: string,
}

const ImageLeft = styled.img`
  position: absolute;
  height: 100%;
  left: 0;
  max-width: unset;
`;

const ImageRight = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
  max-width: unset;
`;

const FullImage = styled.img`
  position: absolute;
  height: 100%;
  max-width: unset;
`;

const exampleImages = {
  desktop: '2022 Review Landing/Belt-placeholder-AKO-Desktop-1280x150_2x.png',
  largeTablet: '2022 Review Landing/Belt-placeholder-AKO-Landscape_Tablet-1024x150_2x.png',
  mobile: '2022 Review Landing/Belt-placeholder-AKO-Mobile-372x192_2x.png',
  tablet: '2022 Review Landing/Belt-placeholder-AKO-Tablet-768x150_2x.png',
};

const shared = { alt: '', crossOrigin: 'anonymous', decoding: 'async' } as const;

function DisplayBeltImage({ backgroundImages } : {backgroundImages: HeroImages}) {
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px)');
  const isLargeTablet = useMedia('(min-width: 1024px)');
  const isDesktop = useMedia('(min-width: 1136px)');

  if (isDesktop) {
    return (
      <FullImage
        className="display-belt__desktop-image"
        src={cloudinaryInstance.url(backgroundImages?.desktop, {
          ...baseImageConfig,
          height: 150,
        })}
        {...shared}
      />
    );
  }

  if (isLargeTablet) {
    return (
      <>
        <ImageLeft
          src={cloudinaryInstance.url(backgroundImages?.largeTablet, {
            ...baseImageConfig,
            height: 150,
            width: 350,
            gravity: 'west',
          })}
          {...shared}
        />
        <ImageRight
          src={cloudinaryInstance.url(backgroundImages?.largeTablet, {
            ...baseImageConfig,
            height: 150,
            width: 350,
            gravity: 'east',
          })}
          {...shared}
        />
      </>
    );
  }

  if (isTablet) {
    return (
      <>
        <ImageLeft
          src={cloudinaryInstance.url(backgroundImages?.tablet, {
            ...baseImageConfig,
            height: 150,
            width: 220,
            gravity: 'west',
          })}
          {...shared}
        />
        <ImageRight
          src={cloudinaryInstance.url(backgroundImages?.tablet, {
            ...baseImageConfig,
            height: 150,
            width: 220,
            gravity: 'east',
          })}
          {...shared}
        />
      </>
    );
  }

  if (isMobile) {
    return (
      <ImageLeft
        src={cloudinaryInstance.url(backgroundImages?.mobile, {
          ...baseImageConfig,
          height: 192,
          width: 192,
        })}
        {...shared}
      />
    );
  }

  return null;
}

export type DisplayBeltAdProps = Omit<DisplayContentProps, 'displayImageComponent'> & {
  /** background images */
  backgroundImages?: HeroImages;
};

const DisplayBeltAd = ({
  backgroundImages = exampleImages,
  ...displayContentProps
}: DisplayBeltAdProps) => (
  <DisplayContent
    {...displayContentProps}
    displayImageComponent={<DisplayBeltImage backgroundImages={backgroundImages} />}
  />
);

export default DisplayBeltAd;
