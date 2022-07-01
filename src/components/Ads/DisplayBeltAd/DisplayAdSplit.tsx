import React from 'react';
import styled from 'styled-components';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import useMedia from '../../hooks/useMedia';
import DisplayContent, { DisplayContentProps } from './DisplayContent';

export type AdAdminImages = {
  mobile: string;
  tabletLeft: string;
  tabletRight: string;
  landscapeTabletLeft: string;
  landscapeTabletRight: string;
  desktopLeft: string;
  desktopRight: string;
}

export type DisplayAdSplitProps = Omit<DisplayContentProps, 'displayImageComponent'> & {
  /** background images */
  backgroundImages?: AdAdminImages;
};

const EdgeAnchoredLeft = styled.img`
  position: absolute;
  height: 100%;
  left: 0;
  max-width: unset;
`;

const EdgeAnchoredRight = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
  max-width: unset;
`;

const OffsetMiddleLeft = styled.img`
  position: absolute;
  height: 100%;
  left: calc(50% + 164px);
  max-width: unset;
`;

const OffsetMiddleRight = styled.img`
  position: absolute;
  height: 100%;
  right: calc(50% + 164px);
  max-width: unset;
`;

const exampleImages: AdAdminImages = {
  desktopLeft: '2022 Review Landing/ShopLargeLeft_jhhynf.png',
  desktopRight: '2022 Review Landing/ShopLargeRight_hr9zmr',
  landscapeTabletLeft: '2022 Review Landing/Belt-placeholder-AKO-Landscape_Tablet-1024x150_2x.png',
  landscapeTabletRight: '2022 Review Landing/Belt-placeholder-AKO-Landscape_Tablet-1024x150_2x.png',
  tabletLeft: '2022 Review Landing/Belt-placeholder-AKO-Tablet-768x150_2x.png',
  tabletRight: '2022 Review Landing/ShopBeltRight_jddoq7',
  mobile: '2022 Review Landing/Belt-placeholder-AKO-Mobile-372x192_2x.png',
};

const shared = { alt: '', crossOrigin: 'anonymous', decoding: 'async' } as const;

function DisplayBeltImage({ backgroundImages } : {backgroundImages: AdAdminImages}) {
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px)');
  const isLargeTablet = useMedia('(min-width: 1024px)');
  const isDesktop = useMedia('(min-width: 1136px)');

  if (isDesktop) {
    return (
      <>
        <OffsetMiddleLeft
          src={cloudinaryInstance.url(backgroundImages?.desktopLeft, {
            ...baseImageConfig,
            height: 150,
            width: 500,
            gravity: 'west',
            crop: 'fit',
          })}
          {...shared}
        />
        <OffsetMiddleRight
          src={cloudinaryInstance.url(backgroundImages?.desktopRight, {
            ...baseImageConfig,
            height: 150,
            width: 500,
            gravity: 'east',
            crop: 'fit',
          })}
          {...shared}
        />
      </>
    );
  }

  if (isLargeTablet) {
    return (
      <>
        <EdgeAnchoredLeft
          src={cloudinaryInstance.url(backgroundImages?.landscapeTabletLeft, {
            ...baseImageConfig,
            height: 150,
            width: 350,
            gravity: 'west',
          })}
          {...shared}
        />
        <EdgeAnchoredRight
          src={cloudinaryInstance.url(backgroundImages?.landscapeTabletRight, {
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
        <EdgeAnchoredLeft
          src={cloudinaryInstance.url(backgroundImages?.tabletLeft, {
            ...baseImageConfig,
            height: 150,
            width: 220,
            gravity: 'west',
          })}
          {...shared}
        />
        <EdgeAnchoredRight
          src={cloudinaryInstance.url(backgroundImages?.tabletRight, {
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
      <EdgeAnchoredLeft
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

export default function DisplayAdSplit({
  backgroundImages = exampleImages,
  ...displayContentProps
}: DisplayAdSplitProps) {
  return (
    <DisplayContent
      {...displayContentProps}
      displayImageComponent={<DisplayBeltImage backgroundImages={backgroundImages} />}
    />
  );
}
