import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';
import Badge from '../../Badge';
import Image from '../shared/Image';
import PersonHeadShot from '../shared/PersonHeadShot';
import Sticker from '../shared/Sticker';
import Byline from '../../Byline';

const ArticleCardWrapper = styled.article.attrs({
  className: 'article-card',
})`
  position: relative;

  .article-card__background-image {
    display: block;
    width: 100%;
  }

  @media(hover: hover) {
    &:hover {
      transform: translateY(-${spacing.xsm});
      z-index: 0;
    }
  }

  ${breakpoint('md')`
    .article-card__background-image {
      max-height: 19rem;
    }
  `};

  ${breakpoint('lg')`
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
`;

export const StickerGroup = styled.div`
  display: flex;
  bottom: 0;
`;

const stickerHeightMobile = '1.2rem';
export const StyledSticker = styled(Sticker)`
  margin-left: 0;

  ${breakpoint('xs', 'lg')`
    border-radius: 0.5rem;
    line-height: ${stickerHeightMobile};
    height: ${stickerHeightMobile};
    font-size: ${fontSize.xxsm};
  `}
`;

const Title = styled.h2`
  color: ${color.eclipse};
  font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.xsm};

  ${breakpoint('md')`
    font-size: ${fontSize.xxxl};
  `};
`;

const Description = styled.p`
  display: none;
  margin-bottom: ${spacing.xxsm};

  ${breakpoint('lg')`
    color: ${color.eclipse};
    display: block;
    font: ${fontSize.lg}/${lineHeight.lg} ${font.mwr};
  `}
`;

const ArticleCard = ({
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
  <ArticleCardWrapper>
    <a
      href={href}
      onClick={onClick}
    >
      <StyledBadge type={siteKey} />
      <Image className="article-card__background-image" imageUrl={getImageUrl(backgroundCloudinaryId)} />
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
        <Byline>
          <PersonHeadShot imgCloudinaryId={authorImageCloudinaryId} size={{ sm: '4' }} />
          <span rel="author">{author} |</span>
          <time dateTime={publishDate} pubdate="pubdate"> {publishDate}</time>
        </Byline>
      </ContentWrapper>
    </a>
  </ArticleCardWrapper>
);

ArticleCard.propTypes = {
  /** Author of article */
  author: PropTypes.string.isRequired,
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


ArticleCard.defaultProps = {
  authorImageCloudinaryId: '',
  description: null,
  publishDate: '',
  stickers: null,
  onClick: () => {},
};

export default ArticleCard;
