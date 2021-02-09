import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';
import Badge from '../../Badge';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';
import Byline from '../../Byline';

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

  ${breakpoint('xs', 'md')`
    width: 1.6rem;
    height: 1.6rem;
  `}
`;

const ContentWrapper = styled.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  padding: ${spacing.sm};

  .byline.no-image {
    margin-top: ${spacing.md};
  }
`;

export const StickerGroup = styled.div`
  display: flex;
  bottom: 0;
`;

const stickerHeightMobile = '1.2rem';
export const StyledSticker = styled(Sticker)`
  &:first-child {
    margin-left: 0;
  }

  ${breakpoint('xs', 'lg')`
    border-radius: 0.5rem;
    line-height: ${stickerHeightMobile};
    height: ${stickerHeightMobile};
    font-size: ${fontSize.xxsm};
  `}
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

const MarqueeCard = ({
  author,
  authorImageCloudinaryId,
  backgroundCloudinaryId,
  publishDate,
  description,
  href,
  siteKey,
  stickers,
  title,
  onClick,
}) => (
  <MarqueeCardWrapper>
    <a
      href={href}
      onClick={onClick}
    >
      <StyledBadge type={siteKey} />
      <Image className="article-card__background-image" imageUrl={getImageUrl(backgroundCloudinaryId)} imageAlt="" />
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
        <Byline
          author={author}
          authorImageCloudinaryId={authorImageCloudinaryId}
          attribution={publishDate}
        />
      </ContentWrapper>
    </a>
  </MarqueeCardWrapper>
);

MarqueeCard.propTypes = {
  /** Author Name */
  author: PropTypes.string.isRequired,
  /** Image id for author */
  authorImageCloudinaryId: PropTypes.string,
  /** Image for card. */
  backgroundCloudinaryId: PropTypes.string.isRequired,
  publishDate: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string.isRequired,
  siteKey: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids', 'school', 'shop']).isRequired,
  /** Optional: Data used to render stickers */
  stickers: PropTypes.array,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};


MarqueeCard.defaultProps = {
  authorImageCloudinaryId: '',
  description: null,
  publishDate: '',
  stickers: null,
  onClick: () => {},
};

export default MarqueeCard;
