import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, grid, lineHeight, spacing } from '../../../styles';
import Badge from '../../Badge';
import Image from '../shared/Image';
import { keyToLogo } from '../../DesignTokens/Logo';
import Sticker from '../shared/Sticker';

const tallCardWidth = grid.columnWidth;
const tallCardWideWidth = '36.8rem';

const StyledTallCard = styled.article`
  height: 60rem;
  position: relative;
  width: ${tallCardWidth};

  .tall-card__subcomponents-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: ${spacing.sm} ${spacing.xsm} ${spacing.xlg};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${color.white};
    z-index: 2;
  }

  a {
    display: block;

      img {
        transition: all .3s ease;
      }
  }

  @media(hover: hover) {
    &:hover {
      .tall-card__background-img {
        transform: translateY(-${spacing.xsm});
        z-index: 0;
      }
    }
  }

  ${breakpoint('md')`
    width: ${({ isWide }) => (isWide ? tallCardWideWidth : tallCardWidth)};
  `}
`;

const Overlay = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), ${({ overlayColor }) => overlayColor});
  bottom: 0;
  height: 50.9rem;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const StyledImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};
`;

const StickersWrapper = styled.div`
  display: flex;
`;

const StyledSticker = styled(Sticker)`
  margin-bottom: ${spacing.sm};

  &:first-child {
    margin-left: 0;
  }
`;

const TallCardLogo = styled.div`
  margin-bottom: ${spacing.sm};
  width: ${({ logoWidth }) => logoWidth};

  img {
    height: auto;
    width: auto;
  }
`;

const Dek = styled.div`
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
  max-width: 70%;
  text-align: center;
`;

const determineLogoWidth = (logoType) => {
  const logoTypes = {
    atk: '13.6rem',
    cco: '18.93rem',
    cio: '15rem',
    mysteryRecipe: '14.3rem',
    perfectlySeasonal: '16.3rem',
    proof: '24rem',
    walkIn: '20rem',
    whatsEatingDan: '10rem',
  };
  const logoWidth = logoTypes[logoType];
  return logoWidth;
};

const TallCard = ({
  className,
  contentType,
  dek,
  href,
  logoKey,
  imageAlt,
  imageUrl,
  isWide,
  onClick,
  overlayColor,
  siteKey,
  stickers,
  target,
}) => {
  const Logo = keyToLogo(logoKey);

  return (
    <StyledTallCard
      className={imageUrl ? '' : 'no-image'}
      contentType={contentType}
      data-testid="tall-card"
      isWide={isWide}
    >
      <a
        href={href}
        onClick={onClick}
        rel={target && target === '_blank' ? 'noopener noreferrer' : null}
        target={target}
      >
        <Overlay
          overlayColor={overlayColor}
          data-testid="overlay"
        />
        <StyledImage
          className={`${className} tall-card__background-img`}
          imageAlt={imageAlt}
          imageUrl={imageUrl}
        />
        <StyledBadge
          className={className}
          type={siteKey}
        />
        <div className="tall-card__subcomponents-wrapper">
          { stickers && (
            <StickersWrapper>
              {stickers.map(({ text, type }) => (
                <StyledSticker
                  className={className}
                  key={text}
                  contentType={contentType}
                  type={type}
                  text={text}
                />
              ))}
            </StickersWrapper>
          )}
          { Logo && (
            <TallCardLogo
              logoWidth={determineLogoWidth(logoKey)}
            >
              <Logo
                backgroundFill={logoKey === 'atk' && color.white}
                data-testid="logo"
                fill={logoKey === 'atk' ? color.tomato : color.white}
              />
            </TallCardLogo>
          )}
          <Dek>{dek}</Dek>
        </div>
      </a>
    </StyledTallCard>
  );
};

TallCard.propTypes = {
  className: PropTypes.string,
  /** Passed down to stickers to set (optional) sticker icon */
  contentType: PropTypes.string.isRequired,
  /** Optional: short byline description for each show */
  dek: PropTypes.string,
  /** href for entire card */
  href: PropTypes.string.isRequired,
  /** Optional: Key value that maps to a show logo. */
  logoKey: PropTypes.string,
  /** Alt text for card image */
  imageAlt: PropTypes.string,
  /** Image source url for card image */
  imageUrl: PropTypes.string.isRequired,
  /** Determines if card is wide variation */
  isWide: PropTypes.bool,
  onClick: PropTypes.func,
  /** Specifies overlay color */
  overlayColor: PropTypes.string,
  /** Determines badge type */
  siteKey: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids', 'school', 'shop']).isRequired,
  /** Array of sticker objects */
  stickers: PropTypes.array,
  target: PropTypes.string,
};

TallCard.defaultProps = {
  className: null,
  dek: '',
  logoKey: null,
  imageAlt: '',
  isWide: false,
  onClick: null,
  overlayColor: color.black,
  stickers: [],
  target: null,
};

export default TallCard;
