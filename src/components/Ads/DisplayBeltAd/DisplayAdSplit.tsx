import React from 'react';
import styled from 'styled-components';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import useMedia from '../../hooks/useMedia';
import DisplayContent, { DisplayContentProps } from './DisplayContent';

type AltTextProps = {
  altTextLeft?: string;
  altTextRight?: string;
}

export type AdAdminImages = {
  mobile: string;
  tabletLeft: string;
  tabletRight: string;
  landscapeTabletLeft: string;
  landscapeTabletRight: string;
  desktopLeft: string;
  desktopRight: string;
}

export type AdAdminImagesProps = AltTextProps & { backgroundImages: AdAdminImages };

export type DisplayAdSplitProps = Omit<DisplayContentProps, 'displayImageComponent'> & AdAdminImagesProps;

const EdgeAnchoredLeftFixed = styled.img`
  position: absolute;
  height: 128px;
  left: 0;
  max-width: unset;
`;

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

const OffsetMiddleRight = styled.img`
  position: absolute;
  height: 100%;
  left: calc(50% + 164px);
  max-width: unset;
`;

const OffsetMiddleLeft = styled.img`
  position: absolute;
  height: 100%;
  right: calc(50% + 164px);
  max-width: unset;
`;

const exampleImages: AdAdminImages = {
  desktopLeft: '2022-Shop-Ads/atk/atk-desktop-left.png',
  desktopRight: '2022-Shop-Ads/atk/atk-desktop-right.png',
  landscapeTabletLeft: '2022-Shop-Ads/atk/atk-landscape-left.png',
  landscapeTabletRight: '2022-Shop-Ads/atk/atk-landscape-right.png',
  tabletLeft: '2022-Shop-Ads/atk/atk-tablet-left.png',
  tabletRight: '2022-Shop-Ads/atk/atk-tablet-right.png',
  mobile: '2022-Shop-Ads/atk/atk-mobile.png',
};

const shared = { crossOrigin: 'anonymous', decoding: 'async' } as const;

function DisplayBeltImage({ backgroundImages, altTextLeft, altTextRight } : AdAdminImagesProps) {
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
            gravity: 'east',
            crop: 'fit',
          })}
          {...shared}
          alt={altTextLeft}
        />
        <OffsetMiddleRight
          src={cloudinaryInstance.url(backgroundImages?.desktopRight, {
            ...baseImageConfig,
            height: 150,
            width: 500,
            gravity: 'west',
            crop: 'fit',
          })}
          {...shared}
          alt={altTextRight}
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
          alt={altTextLeft}
        />
        <EdgeAnchoredRight
          src={cloudinaryInstance.url(backgroundImages?.landscapeTabletRight, {
            ...baseImageConfig,
            height: 150,
            width: 350,
            gravity: 'east',
          })}
          {...shared}
          alt={altTextRight}
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
          alt={altTextLeft}
        />
        <EdgeAnchoredRight
          src={cloudinaryInstance.url(backgroundImages?.tabletRight, {
            ...baseImageConfig,
            height: 150,
            width: 220,
            gravity: 'east',
          })}
          {...shared}
          alt={altTextRight}
        />
      </>
    );
  }

  if (isMobile) {
    return (
      <EdgeAnchoredLeftFixed
        src={cloudinaryInstance.url(backgroundImages?.mobile, {
          ...baseImageConfig,
          height: 128,
        })}
        {...shared}
        alt={altTextLeft}
      />
    );
  }

  return null;
}

export default function DisplayAdSplit({
  altTextLeft = '',
  altTextRight = '',
  backgroundImages = exampleImages,
  ...displayContentProps
}: DisplayAdSplitProps) {
  return (
    <DisplayContent
      {...displayContentProps}
      displayImageComponent={(
        <DisplayBeltImage
          backgroundImages={backgroundImages}
          altTextLeft={altTextLeft}
          altTextRight={altTextRight}
        />
      )}
    />
  );
}
