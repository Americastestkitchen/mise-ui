import React from 'react';
import styled, { css } from 'styled-components';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import { color, font, withThemes } from '../../../styles';
import { UserAttributions } from '../shared/UserAttributions';
import mixins, { cssThemedColor } from '../../../styles/mixins';
import { InferStyledTypes } from '../../../styles/utility-types';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';

const CtaLink = styled.a`
  display: flex;
  width: 100%;
  @media screen and (min-width: 580px) {
    width: 344px;
  }
  height: 128px;

  .card-image {
    background-position: center center;
    background-repeat: no-repeat;

    height: 128px;
    width: 128px;
    flex-shrink: 0;

    img {
      width: 100%;
    }
  }
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
  ${mixins.truncateLineClamp(3)}
  font-size: 16px;
  font-family: ${font.pnb};
  line-height: 23px;
`;

export const StickerGroup = styled.div`
  bottom: 0;
  display: flex;
  flex-shrink: 0;
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

export type RelatedRecipeCardProps = {
  altText?: string;
  avgRating?: number;
  cloudinaryId: string;
  commentsCount?: number;
  headline: string;
  numRatings?: number;
  stickers: IStickers[];
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
  stickers,
}: RelatedRecipeCardProps) => {
  const src = cloudinaryInstance.url(cloudinaryId, {
    ...baseImageConfig,
    width: 128,
    height: 128,
  });
  return (
    <CtaLink {...linkProps} className="related-recipe-card" title={headline}>
      <Image
        imageAlt={altText}
        imageUrl={src}
        className="card-image"
      />
      <Content className="related-recipe-card-content">
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
        <Headline className="headline">{headline}</Headline>
        <UserAttributions
          avgRating={avgRating}
          commentsCount={commentsCount}
          numRatings={numRatings}
          hideEmptyAttributions
        />
      </Content>
    </CtaLink>
  );
};

export default RelatedRecipeCard;
