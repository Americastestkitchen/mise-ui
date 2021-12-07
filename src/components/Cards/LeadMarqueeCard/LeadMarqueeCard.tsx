import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';
import Badge from '../../Badge';
import Byline from '../../Byline';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';
import BylineList, { Author } from '../../BylineList';

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
      height: 102%;
      max-width: 79rem;
    }
  `}
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};
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
  siteKey: 'atk' | 'cco' | 'cio' | 'kids' | 'school' | 'shop'
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
  backgroundColor = '#783681',
  description = '',
  imageAlt = '',
  imageUrl,
  href,
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
      <StyledBadge type={siteKey} />
      <Image
        className="lead-marquee-card__image"
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />
      <ContentWrapper
        backgroundColor={backgroundColor}
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
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          {authors.length ? <BylineListSC authors={authors} attribution="" /> : (
            <Byline
              author={`By ${author}`}
              authorImageCloudinaryId={authorImageCloudinaryId}
            />
          )}

        </div>
      </ContentWrapper>
    </a>
  </LeadMarqueeCardWrapper>
);

export default LeadMarqueeCard;
