import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, fontSize, spacing } from '../../../styles';
import Badge from '../../Badge';
import Attributions from '../shared/Attributions';
import CtaLink from '../shared/CtaLink';
import FavoriteButton from '../shared/FavoriteButton';
import Sticker from '../shared/Sticker';
import Title from '../shared/Title';

const StyledStandardCard = styled.article`
  position: relative;
  padding-bottom: ${spacing.xlg};
  width: 16.2rem;
  color: ${color.eclipse};

  ${breakpoint('tablet')`
    width: 27.2rem;
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: ${spacing.xsm};
  height: 16.2rem;

  ${breakpoint('tablet')`
    height: 27.2rem;
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledFavoriteButton = styled(FavoriteButton)`
  flex-shrink: 0;
  margin-top: ${spacing.xxsm};
`;

const StickerGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

const stickerHeightMobile = '1.2rem';
const StyledSticker = styled(Sticker)`

  ${breakpoint('mobile', 'tablet')`
    border-radius: 0.5rem;
    line-height: ${stickerHeightMobile};
    height: ${stickerHeightMobile};
    font-size: ${fontSize.xxsm};
  `}
`;

const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};

  ${breakpoint('mobile', 'tablet')`
    width: 1.6rem;
    height: 1.6rem;
  `}
`;

export function StandardCard({
  badgeType,
  className,
  commentCount,
  contentType,
  ctaText,
  ctaUrl,
  displayCommentCount,
  displayFavoritesButton,
  displayLockIcon,
  hasImage,
  hasStickers,
  imageAlt,
  isFavorited,
  onClick,
  title,
}) {
  return (
    <StyledStandardCard>
      <ImageWrapper>
        { hasImage ? (
          <img src="https://placekitten.com/272/272" alt={imageAlt} />
        ) : null }
        <StyledBadge
          className={className}
          type={badgeType}
        />
        { hasStickers ? (
          <StickerGroup>
            <StyledSticker
              className={className}
              isPriority
              text='new'
            />
            <StyledSticker
              className={className}
              text='popular'
            />
          </StickerGroup>
        ) : null }
      </ImageWrapper>
      <TitleWrapper>
        <Title title={title} />
        { displayFavoritesButton ? (
          <StyledFavoriteButton
            ariaLabel="Save to favorites"
            className={className}
            role="button"
            isFavorited={isFavorited}
            onClick={onClick}
          />
        ) : null }
      </TitleWrapper>
      <Attributions
        commentCount={commentCount}
        contentType={contentType}
        displayLockIcon={displayLockIcon}
        displayCommentCount={displayCommentCount}
      />
      { ctaUrl ? <CtaLink ctaText={ctaText} ctaUrl={ctaUrl} /> : null }
    </StyledStandardCard>
  )
}

StandardCard.propTypes = {
  badgeType: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids']).isRequired,
  displayFavoritesButton: PropTypes.bool,
  contentType: PropTypes.oneOf([
    'Article',
    'Class',
    'Collection',
    'Cookbook Collection',
    'Episode',
    'How to',
    'Recipe',
    'Review',
  ]).isRequired,
  commentCount: PropTypes.number,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  displayCommentCount: PropTypes.bool,
  displayLockIcon: PropTypes.bool,
  hasStickers: PropTypes.bool,
  imageAlt: PropTypes.string.isRequired,
  isFavorited: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

StandardCard.defaultProps = {
  commentCount: null,
  ctaText: '',
  ctaUrl: '',
  displayCommentCount: false,
  displayFavoritesButton: false,
  displayLockIcon: false,
  hasStickers: false,
  isFavorited: false,
  onClick: null,
};

export default StandardCard;
