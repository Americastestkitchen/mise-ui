import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';
import Badge from '../../Badge';
import Byline from '../../Byline';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';

const LeadMarqueeCardWrapper = styled.article.attrs({
  className: 'lead-marquee-card',
})`
  position: relative;
  overflow: hidden;

  @media(hover: hover) {
    &:hover {
      .lead-marquee-card__image {
        transition: all 0.3s ease;
        transform:  translateY(-${spacing.xsm}) scale(1.1);
        z-index: 0;
      }
    }
  }
  
  .lead-marquee-card__image {
    display: block;
    width: 100%;
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

  ${breakpoint('lg')`
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

  ${breakpoint('xs', 'md')`
    width: 1.6rem;
    height: 1.6rem;
  `}
`;

const ContentWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: ${spacing.md};
  position: relative;
  text-align: center;
  z-index: 1;

  .byline span {
    color: ${color.white};
  }

  ${breakpoint('lg')`
    max-width: 34.4rem;
    padding: ${spacing.xxxlg} ${spacing.md};
  `}
`;

export const StickerGroup = styled.div`
  bottom: 0;
  display: flex;
  flex-shrink: 0;
`;

const stickerHeightMobile = '1.2rem';
export const StyledSticker = styled(Sticker)`
  ${breakpoint('xs', 'lg')`
    border-radius: 0.5rem;
    line-height: ${stickerHeightMobile};
    height: ${stickerHeightMobile};
    font-size: ${fontSize.xxsm};
  `}
`;

const Title = styled.h1`
  color: ${color.white};
  font: ${fontSize.xxl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.xsm};

  ${breakpoint('lg')`
    margin-bottom: ${spacing.sm};
  `};
`;

const Description = styled.p`
  color: ${color.white};
  display: none;

  ${breakpoint('md')`
    display: block;
    font: ${fontSize.md}/${lineHeight.lg} ${font.mwr};
    margin-bottom: ${spacing.sm};
  `};
`;

const LeadMarqueeCard = ({
  author,
  authorImageCloudinaryId,
  backgroundColor,
  description,
  imageCloudinaryId,
  href,
  siteKey,
  stickers,
  title,
  onClick,
}) => (
  <LeadMarqueeCardWrapper>
    <a
      href={href}
      onClick={onClick}
    >
      <StyledBadge type={siteKey} />
      <Image
        className="lead-marquee-card__image"
        imageUrl={getImageUrl(imageCloudinaryId)}
        imageAlt=""
      />
      <ContentWrapper backgroundColor={backgroundColor}>
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
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <Byline
          author={`By ${author}`}
          authorImageCloudinaryId={authorImageCloudinaryId}
        />
      </ContentWrapper>
    </a>
  </LeadMarqueeCardWrapper>
);

LeadMarqueeCard.propTypes = {
  /** Author Name */
  author: PropTypes.string.isRequired,
  /** Image id for author */
  authorImageCloudinaryId: PropTypes.string,
  /** Background color for content wrapper */
  backgroundColor: PropTypes.string.isRequired,
  description: PropTypes.string,
  /** Image for card. */
  imageCloudinaryId: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  siteKey: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids', 'school', 'shop']).isRequired,
  /** Optional: Data used to render stickers */
  stickers: PropTypes.array,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};


LeadMarqueeCard.defaultProps = {
  authorImageCloudinaryId: '',
  backgroundColor: '#783681',
  description: null,
  stickers: null,
  onClick: () => {},
};

export default LeadMarqueeCard;
