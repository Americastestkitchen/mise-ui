import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, mixins, spacing, withThemes } from '../../../styles';
import { untilMd } from '../../../styles/breakpoints';
import Badge from '../../Badge/Badge';
import Byline from '../../Byline/Byline';
import FavoriteRibbonWithBg from '../shared/FavoriteRibbonWithBg/FavoriteRibbonWithBg';
import Image from '../shared/Image/Image';
import Sticker from '../shared/Sticker/Sticker';
import { Author, BylineListLight } from '../../BylineList';
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

  a {
    overflow: hidden;
    &:focus {
      .lead-marquee-card__content {
        ${mixins.focusIndicator('#ffffff', '18px')}
      }
    }
  }

  button:focus {
    ${mixins.focusIndicator('#ffffff', '2px')}
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
    height: 44rem;

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
  overflow: hidden;
  position: relative;

  ${breakpoint('xlg')`
    max-width: calc(100% - 34.5rem);
    width: calc(100% - 34.5rem);
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
  justify-content: center;
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

  .person-head-shot {
    height: 4rem;
    margin: 0 0.8rem 0 0;
    width: 4rem;
  }

  ${breakpoint('xlg')`
    min-width: 34.5rem;
    width: 34.5rem;
  `}
`;

export const StickerGroup = styled.div`
  bottom: 0;
  display: flex;
  flex-shrink: 0;
  margin-bottom: 8px;
`;

export const StyledSticker = styled(Sticker)`
  margin-bottom: 0;

  &:first-child {
    margin-left: 0;
  }
`;

const TitleTheme = {
  default: css`
    color: ${color.white};
    font: ${fontSize.xxl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.xsm};

    width: 34rem;

    ${breakpoint('md')`
      width: 68rem;
    `}

    ${breakpoint('lg')`
      width: 84.8rem;
    `}

    ${breakpoint('xlg')`
      width: 28.8rem;
    `}
  `,
  cco: css`
    font-family: ${font.clb} !important;
  `,
  cio: css`
    font-family: ${font.mwr} !important;
  `,
};

const Title = styled.h2`
  ${withThemes(TitleTheme)}
`;

const StyledAttributions = styled(FeatureCardUserAttributions)`
  ${untilMd(css`margin-bottom: 1rem;`)}
`;

const DekTheme = {
  default: css`
    color: ${color.white};
    display: none;

    ${breakpoint('md')`
      display: block;
      font: ${fontSize.md}/${lineHeight.lg} ${font.mwr};
      margin: 0.4rem 0 ${spacing.sm};
      max-width: 65.8rem;
    `};

    ${breakpoint('lg')`
      line-height: ${lineHeight.md};
      max-width: 72.4rem;
    `}

    ${breakpoint('xlg')`
      max-width: 26.4rem;
    `}
  `,
  cco: css`
    font-family: ${font.pnr} !important;
  `,
};

const Description = styled.p`
  ${withThemes(DekTheme)}
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
  siteKey: ThemeSiteKey;
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
              <StyledAttributions
                commentsCount={commentsCount}
                numRatings={numRatings}
                avgRating={avgRating}
              />
            )
          }
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          {authors.length ? (
            <BylineListLight authors={authors} attribution="" />
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
