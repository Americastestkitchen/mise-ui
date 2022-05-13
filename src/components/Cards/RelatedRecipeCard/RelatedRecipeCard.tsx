import React from 'react';
import styled, { css } from 'styled-components';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import { color, font, withThemes } from '../../../styles';
import { UserAttributions } from '../shared/UserAttributions';
import mixins, { cssThemedColor } from '../../../styles/mixins';
import { InferStyledTypes } from '../../../styles/utility-types';

const CtaLink = styled.a`
  display: flex;
  width: min(344px, 100%);
  height: 128px;
`;

const cssBackgroundColor = withThemes({
  default: css`
    background-color: ${color.white};
  `,
  cco: css`
    background-color: ${color.whiteSmoke};
  `,
});

const Content = styled.div`
  ${cssBackgroundColor}

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  padding: 0 16px;
`;

const Headline = styled.span`
  ${cssThemedColor}
  ${mixins.truncateLineClamp(4)}
  font-size: 16px;
  font-family: ${font.pnb};
  line-height: 23px;
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
  linkProps: InferStyledTypes<typeof CtaLink>;
};

const RelatedRecipeCard = ({
  altText = '',
  avgRating = 0,
  cloudinaryId,
  headline,
  linkProps,
  commentsCount = 0,
  numRatings = 0,
}: RelatedRecipeCardProps) => {
  const src = cloudinaryInstance.url(cloudinaryId, {
    ...baseImageConfig,
    width: 128,
    height: 128,
  });
  return (
    <CtaLink {...linkProps}>
      <ImageWrapper>
        <img alt={altText} src={src} />
      </ImageWrapper>
      <Content>
        <Headline>{headline}</Headline>
        <UserAttributions
          avgRating={avgRating}
          commentsCount={commentsCount}
          numRatings={numRatings}
        />
      </Content>
    </CtaLink>
  );
};

export default RelatedRecipeCard;
