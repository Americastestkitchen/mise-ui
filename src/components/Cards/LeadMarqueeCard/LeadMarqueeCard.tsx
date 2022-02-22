import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';

import Badge from '../../Badge';
import Byline from '../../Byline';
import FavoriteRibbonWithBg from '../shared/FavoriteRibbonWithBg';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';
import BylineList, { Author } from '../../BylineList';
import { FeatureCardUserAttributions } from '../shared/UserAttributions/UserAttributions';

const LeadMarqueeCardWrapper = styled.article.attrs({
  className: 'lead-marquee-card',
})`
  position: relative;
  overflow: hidden;

  @media(hover: hover) {
    &:hover {
      .lead-marquee-card__image {
        transform:  translateY(-${spacing.xsm}) scale(1.1);
        z-index: 0;
      }
    }
  }
  
  .lead-marquee-card__image {
    display: block;
    width: 100%;
    transition: all 0.3s ease;
    transform: scale(1.1);
  }

  ${breakpoint('smmd')`
    .lead-marquee-card__image {
      transform: scale(1.05);
    }

    @media(hover: hover) {
      &:hover {
        .lead-marquee-card__image {
          transform:  translateY(-${spacing.xsm}) scale(1.05);
        }
      }
    }
  `}

  ${breakpoint('xlg')`
    a {
      display: flex;
      max-height: 44rem;
    }

    .lead-marquee-card__image {
      height: 100%;
      width: 100%;
    }
  `}
`;

const MarqueeImageWrapper = styled.div`
  position: relative;

  ${breakpoint('xlg')`
    height: 102%;
    max-width: 79rem;
  `}
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};
  z-index: 1;
`;

const StyledFavoriteButtonWithBg = styled(FavoriteRibbonWithBg)`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  z-index: 1;
`;

const ContentWrapper = styled.div<{ backgroundColor: CSSProperties['backgroundColor'] }>`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  display: flex;
  padding: ${spacing.md};
  position: relative;
  z-index: 1;

  .lead-marquee-card__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto 0;
    text-align: center;
  }

  .byline span {
    color: ${color.white};
  }

  .user-attributions {
    color: ${color.white};
  }
`;

export const StickerGroup = styled.div`
  bottom: 0;
  display: flex;
  flex-shrink: 0;
`;

export const StyledSticker = styled(Sticker)`
  margin-bottom: 0;

  &:first-child {
    margin-left: 0;
  }
`;

const Title = styled.h1`
  color: ${color.white};
  font: ${fontSize.xxl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.xsm};

  ${breakpoint('lg')`
    margin-bottom: ${spacing.sm};
  `};
`;

const BylineListSC = styled(BylineList)`
  color: white;
`;

const Description = styled.p`
  color: ${color.white};
  display: none;

  ${breakpoint('md')`
    display: block;
    font: ${fontSize.md}/${lineHeight.lg} ${font.mwr};
    margin-bottom: ${spacing.sm};
  `};
  
  ${breakpoint('lg')`
    line-height: ${lineHeight.md};
  `}
`;

const Comments = styled.p`
  align-items: center;
  color: ${color.white};
  display: flex;
  justify-content: center;
  font: ${fontSize.md} ${font.pnb};
  line-height: 1;
`;

type LeadMarqueeCardProps = {
  /**
   * Author Name
   * @deprecated, ignored if LeadMarqueeCardProps['authors provided']
   */
  author: string;
  /**
   * Image id for author
   * @deprecated, ignored if LeadMarqueeCardProps['authors provided']
   */
  authorImageCloudinaryId: string;
  /** Display one or more authors */
  authors?: Author[];
  /** Background color for content wrapper */
  backgroundColor?: CSSProperties['backgroundColor'];
  description?: string;
  imageAlt?: string;
  /** Image for card. */
  imageUrl: string;
  href: string;
  siteKey: 'atk' | 'cco' | 'cio' | 'kids' | 'school' | 'shop';
  /** Optional: attribution controls */
  displayAttributions?: boolean;
  commentsCount?: number;
  avgRating?: number;
  numRatings?: number;
  /** Optional: favorites controls */
  displayFavoritesRibbon?: boolean;
  favoriteObjectId?: string;
  /** Optional: Data used to render stickers */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stickers: any[];
  title: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const LeadMarqueeCard = ({
  author,
  authorImageCloudinaryId = '',
  authors = [],
  avgRating,
  backgroundColor = '#783681',
  commentsCount,
  description = '',
  displayFavoritesRibbon,
  displayAttributions,
  favoriteObjectId,
  imageAlt = '',
  imageUrl,
  href,
  numRatings,
  siteKey,
  stickers,
  title,
  onClick = () => {},
}: LeadMarqueeCardProps) => (
  <LeadMarqueeCardWrapper>
    <a
      href={href}
      onClick={onClick}
    >
      <MarqueeImageWrapper className="lead-marquee-card__image-wrapper">
        <StyledBadge type={siteKey} />
        {
          displayFavoritesRibbon && favoriteObjectId && (
            <StyledFavoriteButtonWithBg
              className="lead-marquee-card__favorites-ribbon"
              siteKey={siteKey}
              objectId={favoriteObjectId}
              title={title}
            />
          )
        }
        <Image
          className="lead-marquee-card__image"
          imageUrl={imageUrl}
          imageAlt={imageAlt}
        />
      </MarqueeImageWrapper>
      <ContentWrapper
        backgroundColor={backgroundColor}
        className="lead-marquee-card__content-wrapper"
      >
        <div
          className="lead-marquee-card__content"
        >
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
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          {
            displayAttributions && (
              <FeatureCardUserAttributions
                commentsCount={commentsCount}
                numRatings={numRatings}
                avgRating={avgRating}
              />
            )
          }
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          {authors.length ? (
            <BylineListSC authors={authors} attribution="" />
          ) : author ? (
            <Byline
              author={`By ${author}`}
              authorImageCloudinaryId={authorImageCloudinaryId}
            />
          ) : null}

        </div>
      </ContentWrapper>
    </a>
  </LeadMarqueeCardWrapper>
);

export default LeadMarqueeCard;
