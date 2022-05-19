import React from 'react';
import styled, { css } from 'styled-components';

import { getImageUrl } from '../../../lib/cloudinary';
import { color, font, fontSize, withThemes, mixins } from '../../../styles';
import { StandardUserAttributions } from '../shared/UserAttributions/UserAttributions';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';
import { cssThemedColor } from '../../../styles/mixins';
import { md } from '../../../styles/breakpoints';

const CtaLink = styled.a`
  display: flex;
  width: fit-content;
`;

const ContentTheme = {
  default: css`
    background: ${color.white};
    display: flex;
    flex-direction: column;
    width: 21.2rem;
    max-width: 21.2rem;
    padding: .7rem .7rem 0 .7rem;
    @media (min-width: 360px) {
      padding: 2rem 3.8rem 0 1.6rem;
    }

    ${md(css`
      width: 21.6rem;
      max-width: 21.6rem;
    `)}
  `,
  cco: css`
    background: ${color.whiteSmoke};
  `,
};

const Content = styled.div`
  ${withThemes(ContentTheme)}
`;

const HeadlineTheme = {
  default: css`
    font: ${fontSize.md} / 2.3rem ${font.pnb};
    margin-bottom: 1.4rem;
  `,
  atk: css`
    line-height: 2rem;
  `,
};

const Headline = styled.span`
  ${withThemes(HeadlineTheme)}
  ${cssThemedColor}
  ${mixins.truncateLineClamp(3)}

  &:hover {
    color: ${color.grayishCyan};
  }
`;

const ImageWrapper = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;

  @media (min-width: 360px) {
    height: 128px;
    width: 128px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StickerGroup = styled.div`
  bottom: 0;
  display: flex;
  flex-shrink: 0;
  margin-bottom: 8px;
`;

const StyledSticker = styled(Sticker)`
  margin-bottom: 0;

  &:first-child {
    margin-left: 0;
  }
`;

type ContentTypeProps =
  | 'collection'
  | 'clip'
  | 'episode'
  | 'playlist'
  | 'video'
  | 'cooking school course';

interface IStickers {
  className: string;
  contentType: ContentTypeProps;
  icon: string;
  text: string;
  type: string;
}

export interface RelatedRecipeCardProps {
  altText?: string;
  avgRating?: number;
  cloudinaryId: string;
  commentsCount?: number;
  headline: string;
  numRatings?: number;
  url: string;
  stickers: IStickers[];
}

const RelatedRecipeCard = ({
  altText = '',
  avgRating = 0,
  cloudinaryId,
  commentsCount = 0,
  headline,
  numRatings = 0,
  url,
  stickers,
}: RelatedRecipeCardProps) => (
  <CtaLink href={url} title={headline} className="related-recipe-card">
    <ImageWrapper>
      <Image
        className="mini-card__image"
        imageAlt={altText}
        imageUrl={getImageUrl(cloudinaryId)}
      />
    </ImageWrapper>
    <Content>
      {stickers ? (
        <StickerGroup>
          {stickers.map(({ contentType, icon, text, type }) => (
            <StyledSticker
              contentType={contentType}
              key={text}
              icon={icon}
              text={text}
              type={type}
            />
          ))}
        </StickerGroup>
      ) : null}
      <Headline>{headline}</Headline>
      {avgRating && numRatings ? (
        <StandardUserAttributions
          avgRating={avgRating}
          commentsCount={commentsCount}
          numRatings={numRatings}
        />
      ) : null}
    </Content>
  </CtaLink>
);

export default RelatedRecipeCard;
