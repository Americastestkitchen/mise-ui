import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, fontSize, spacing } from '../../../styles';
import Badge from '../../Badge';
import Attributions from '../shared/Attributions';
import CtaLink from '../shared/CtaLink';
import FavoriteButton from '../shared/FavoriteButton';
import Image from '../shared/Image';
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
  width: 100%;

  .no-image & {
    display: flex;
    align-items: center;
    margin-bottom: ${spacing.xxsm};
  }

  img {
    display: block;
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${spacing.xsm};
`;

const StyledTitle = styled(Title)`
  transition: color 0.2s ease;

  &:hover {
    color: ${color.mint};
  }
`;

const StyledFavoriteButton = styled(FavoriteButton)`
  flex-shrink: 0;
  margin-top: ${spacing.xxsm};
`;

const StickerGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;

  .no-image & {
    position: static;

    & > * {
      margin-bottom: 0;
    }
  }
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

  .no-image & {
    position: relative;
    top: 0;
    left: 0;
  }

  ${breakpoint('mobile', 'tablet')`
    width: 1.6rem;
    height: 1.6rem;
  `}
`;

export function StandardCard({
  className,
  commentCount,
  contentType,
  contentTypeFormatted,
  ctaText,
  ctaUrl,
  displayCommentCount,
  displayFavoritesButton,
  displayLockIcon,
  stickers,
  imageAlt,
  imageUrl,
  isFavorited,
  objectId,
  onClick,
  siteKey,
  siteKeyFavorites,
  title,
  href,
}) {
  return (
    <StyledStandardCard className={imageUrl ? '' : 'no-image'}>
      <a href={href}>
        <ImageWrapper>
          { imageUrl ? (
            <Image
              aria-hidden="true"
              imageAlt={imageAlt}
              imageUrl={imageUrl}
            />
          ) : null }
          <StyledBadge
            className={className}
            type={siteKey}
          />
          { stickers ?
            <StickerGroup>
              {stickers.map(({ text, type }) => (
                <StyledSticker
                  key={text}
                  contentType={contentType}
                  type={type}
                  text={text}
                />
              ))}
            </StickerGroup>
          : null }
        </ImageWrapper>
        <TitleWrapper>
          <StyledTitle className={className} title={title} />
          { displayFavoritesButton ? (
            <StyledFavoriteButton
              ariaLabel="Save to favorites"
              className={className}
              role="button"
              isFavorited={isFavorited}
              objectId={objectId}
              onClick={onClick}
              siteKey={siteKeyFavorites}
              title={title}
            />
          ) : null }
        </TitleWrapper>
      </a>
      <Attributions
        commentCount={commentCount}
        contentType={contentTypeFormatted || contentType}
        displayLockIcon={displayLockIcon}
        displayCommentCount={displayCommentCount}
      />
      { ctaUrl ? <CtaLink ctaText={ctaText} ctaUrl={ctaUrl} /> : null }
    </StyledStandardCard>
  )
}

StandardCard.propTypes = {
  displayFavoritesButton: PropTypes.bool,
  contentType: PropTypes.string.isRequired,
  contentTypeFormatted: PropTypes.string,
  commentCount: PropTypes.number,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  displayCommentCount: PropTypes.bool,
  displayLockIcon: PropTypes.bool,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
  isFavorited: PropTypes.bool,
  objectId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  siteKey: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids', 'school', 'shop']).isRequired,
  siteKeyFavorites: PropTypes.oneOf(['atk', 'cco', 'cio']).isRequired,
  stickers: PropTypes.array,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

StandardCard.defaultProps = {
  commentCount: null,
  contentTypeFormatted: null,
  ctaText: '',
  ctaUrl: '',
  displayCommentCount: false,
  displayFavoritesButton: false,
  displayLockIcon: false,
  imageAlt: '',
  imageUrl: '',
  isFavorited: false,
  onClick: null,
  stickers: [],
};

export default StandardCard;
