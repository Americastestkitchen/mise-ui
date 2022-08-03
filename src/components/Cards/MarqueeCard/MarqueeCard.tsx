import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';
import Badge from '../../Badge/Badge';
import Image from '../shared/Image/Image';
import Sticker from '../shared/Sticker';
import Byline from '../../Byline/Byline';
import { StickerType } from '../Cards';

const MarqueeCardWrapper = styled.article.attrs({
  className: 'article-card',
})`
  position: relative;

  .article-card__background-image {
    display: block;
    width: 100%;
  }

  @media(hover: hover) {
    &:hover {
      h2 {
        color: ${color.darkTeal}
      }
    }
  }

  ${breakpoint('md')`
    max-width: 77.6rem;

    .article-card__background-image {
      max-height: 43.2rem;
    }
  `};
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};
`;

const ContentWrapper = styled.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  padding: ${spacing.sm};
`;

export const StickerGroup = styled.div`
  display: flex;
  bottom: 0;
`;

export const StyledSticker = styled(Sticker)`
  &:first-child {
    margin-left: 0;
  }
`;

const Title = styled.h2`
  color: ${color.eclipse};
  font: 2rem/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.xsm};

  ${breakpoint('lg')`
    font-size: ${fontSize.xxl};
  `};
`;

const Description = styled.p`
  display: none;

  ${breakpoint('lg')`
    color: ${color.eclipse};
    display: block;
    font: ${fontSize.md}/${lineHeight.lg} ${font.mwr};
    margin-bottom: ${spacing.xsm};
  `}
`;

const StyledByline = styled(Byline)`
  align-items: center;
  flex-direction: row;

  &.no-image {
    margin-top: ${spacing.md};
  }

  .byline__attribution {
    margin-top: 0;

    span:first-child {
      display: block;
    }
  }
`;

export type MarqueeCardPropTypes = {
  author: string,
  authorImageCloudinaryId?: string,
  imageUrl: string,
  publishDate?: string,
  description?: string,
  href: string,
  siteKey: ThemeSiteKey,
  stickers?: StickerType[],
  title: string,
  onClick?: () => void,
}

const MarqueeCard = ({
  author,
  authorImageCloudinaryId,
  imageUrl,
  publishDate,
  description,
  href,
  siteKey,
  stickers = [],
  title,
  onClick = () => {},
}: MarqueeCardPropTypes) => (
  <MarqueeCardWrapper>
    <a
      href={href}
      onClick={onClick}
    >
      <StyledBadge type={siteKey} />
      <Image className="article-card__background-image" imageUrl={imageUrl} imageAlt="" />
      <ContentWrapper>
        { stickers ? (
          <StickerGroup>
            {stickers.map(({ text, type }) => (
              <StyledSticker
                key={text}
                type={type}
                text={text}
              />
            ))}
          </StickerGroup>
        ) : null }
        <Title>{title}</Title>
        <Description>{description}</Description>
        <StyledByline
          author={author}
          authorImageCloudinaryId={authorImageCloudinaryId}
          attribution={publishDate}
        />
      </ContentWrapper>
    </a>
  </MarqueeCardWrapper>
);

export default MarqueeCard;
