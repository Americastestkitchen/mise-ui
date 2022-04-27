import React from 'react';
import styled, { css } from 'styled-components';
import { getImageUrl } from '../../../lib/cloudinary';
import { color, font, fontSize, withThemes } from '../../../styles';
import { UserAttributions } from '../shared/UserAttributions';
import Image from '../shared/Image';
import mixins, { cssThemedColor } from '../../../styles/mixins';

const CtaLink = styled.a`
  display: flex;
  width: min(344px, 100%);
  height: 128px;
`;

const cssBackgroundColor = withThemes({
  default: css`background-color: ${color.white};`,
  cco: css`background-color: ${color.whiteSmoke};`,
});

const Content = styled.div`
  ${cssBackgroundColor}

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  padding: 0 16px;
`;

const Headline = styled.span`
  ${cssThemedColor}
  ${mixins.truncateLineClamp(4)}
  font: ${fontSize.md}/2.3rem ${font.pnb};
`;

const ImageWrapper = styled.div`
  background-position: center center;
  background-repeat: no-repeat;

  height: 128px;
  width: 128px;
  flex-shrink: 0;

  img {
    width: 100%;   
  }
`;

export type RelatedRecipeCardProps = {
  altText?: string;
  avgRating?: number;
  cloudinaryId: string;
  commentsCount?: number;
  headline: string;
  numRatings?: number;
  slug: string;
};

const RelatedRecipeCard = ({
  altText = '',
  avgRating = 0,
  cloudinaryId,
  commentsCount = 0,
  headline,
  numRatings = 0,
  slug,
}: RelatedRecipeCardProps) => (
  <CtaLink href={`/recipes/${slug}`}>
    <ImageWrapper>
      <Image
        className="mini-card__image"
        imageAlt={altText}
        imageUrl={getImageUrl(cloudinaryId)}
      />
    </ImageWrapper>
    <Content>
      <Headline>
        {headline}
      </Headline>
      <UserAttributions
        avgRating={avgRating}
        commentsCount={commentsCount}
        numRatings={numRatings}
      />
    </Content>
  </CtaLink>
);

export default RelatedRecipeCard;
