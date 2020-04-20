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
  padding-bottom: ${spacing.md};
  width: 16.2rem;
  color: ${color.eclipse};

  ${breakpoint('lg')`
    padding-bottom: ${spacing.lg};
    width: 27.2rem;
  `}
`;

const ImageWrapper = styled.div`
  background: ${color.white};
  position: relative;
  width: 100%;

  .no-image & {
    background: transparent;
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
  ${breakpoint('xs', 'lg')`
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

  ${breakpoint('xs', 'lg')`
    width: 1.6rem;
    height: 1.6rem;
  `}
`;

function StandardCard({
  className,
  commentCount,
  contentType,
  contentTypeFormatted,
  ctaText,
  ctaUrl,
  displayCookbook,
  displayCommentCount,
  displayFavoritesButton,
  displayLockIcon,
  stickers,
  imageAlt,
  imageUrl,
  isFavorited,
  objectId,
  onClick,
  shopPrices,
  siteKey,
  siteKeyFavorites,
  title,
  href,
}) {
  return (
    <StyledStandardCard className={imageUrl ? '' : 'no-image'}>
      <a
        className="standard-card__anchor"
        href={href}
        onClick={onClick}
      >
        <ImageWrapper className="standard-card__image-wrapper">
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
          { stickers ? (
            <StickerGroup>
              {stickers.map(({ text, type }) => (
                <StyledSticker
                  className={className}
                  key={text}
                  contentType={contentType}
                  type={type}
                  text={text}
                />
              ))}
            </StickerGroup>
          ) : null }
        </ImageWrapper>
        <TitleWrapper className="standard-card__title-wrapper">
          <StyledTitle className={className} title={title} />
          { displayFavoritesButton ? (
            <StyledFavoriteButton
              className={className}
              role="button"
              isFavorited={isFavorited}
              objectId={objectId}
              siteKey={siteKeyFavorites}
              title={title}
            />
          ) : null }
        </TitleWrapper>
      </a>
      <Attributions
        commentCount={commentCount}
        contentType={contentTypeFormatted || contentType}
        displayCookbook={displayCookbook}
        displayLockIcon={displayLockIcon}
        displayCommentCount={displayCommentCount}
        shopPrices={shopPrices}
      />
      {
        ctaUrl && (
          <CtaLink
            ctaText={ctaText}
            ctaUrl={ctaUrl}
            onClick={onClick}
          />
        )
      }
    </StyledStandardCard>
  );
}

StandardCard.propTypes = {
  displayFavoritesButton: PropTypes.bool,
  className: PropTypes.string,
  contentType: PropTypes.string.isRequired,
  contentTypeFormatted: PropTypes.string,
  commentCount: PropTypes.number,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  displayCookbook: PropTypes.bool,
  displayCommentCount: PropTypes.bool,
  displayLockIcon: PropTypes.bool,
  href: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
  isFavorited: PropTypes.bool,
  objectId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  shopPrices: PropTypes.object,
  siteKey: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids', 'school', 'shop']).isRequired,
  siteKeyFavorites: PropTypes.oneOf(['atk', 'cco', 'cio']),
  stickers: PropTypes.array,
  title: PropTypes.string.isRequired,
};

StandardCard.defaultProps = {
  className: null,
  commentCount: null,
  contentTypeFormatted: null,
  ctaText: '',
  ctaUrl: '',
  displayCookbook: false,
  displayCommentCount: false,
  displayFavoritesButton: false,
  displayLockIcon: false,
  imageAlt: '',
  imageUrl: '',
  isFavorited: false,
  onClick: null,
  shopPrices: null,
  siteKeyFavorites: null,
  stickers: [],
};

export default React.memo(StandardCard, (prev, next) => (
  prev.objectId === next.objectId
  && prev.href === next.href
));
