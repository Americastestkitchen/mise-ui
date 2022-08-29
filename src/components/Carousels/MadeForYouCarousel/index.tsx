import styled from 'styled-components';
import React from 'react';

import { font } from '../../../styles';
import { Title, Divider } from '../BaseCarousel/styled-elements';
import BaseCarousel from '../BaseCarousel';
import { useFlickityGroup } from '../BaseCarousel/useFlickity';
import { StandardSlide } from '../BaseCarousel/Slides';
import EmptyState from './EmptyState';
import MadeForYouCard from '../../Cards/MadeForYouCard';
import Sticker from '../../Cards/shared/Sticker/Sticker';

const StyledSticker = styled(Sticker)`
  margin: 0 0 8px 0;
  display: block;
  width: 42px;
`;

const Subtitle = styled.span`
  font: italic 1.6rem/1.25 ${font.mwr};
`;

type SlideItem = {
  'collection_type': string,
  'cloudinary_url': string,
  'url': string,
}

type MadeForYouCarouselProps = {
  title: string,
  subtitle: string,
  results?: SlideItem[],
}

const MadeForYouCarousel = ({
  results = [],
  title,
  subtitle,
}: MadeForYouCarouselProps) => {
  if (results.length === 0) {
    return (
      <>
        <StyledSticker type="priority" text="new" />
        <Title>{title}</Title>
        <Divider showDivider />
        <EmptyState />
      </>
    );
  }

  return (
    <>
      <StyledSticker type="priority" text="new" />
      <Subtitle>{subtitle}</Subtitle>
      <BaseCarousel
        header={(<Title>{title}</Title>)}
        showDivider
        useFlickityHook={useFlickityGroup}
        title="Smart Colletion Carousel"
      >
        {results.map((props, index) => (
          <StandardSlide key={index}>
            <MadeForYouCard index={index} {...props} />
          </StandardSlide>
        ))}
      </BaseCarousel>
    </>
  );
};

export default MadeForYouCarousel;
