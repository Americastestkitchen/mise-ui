import React from 'react';
import styled, { css } from 'styled-components';
import { color, font, fontSize, grid, lineHeight, spacing } from '../../../styles';
import { md } from '../../../styles/breakpoints';
import Badge from '../../Badge';
import Image from '../shared/Image';
import { keyToLogo } from '../../DesignTokens/Logo';
import Sticker from '../shared/Sticker';
import { BaseCardPropType } from '../Cards';

const tallCardWidth = grid.columnWidth;
const tallCardWideWidth = '36.8rem';

type LogoType = 'atk' | 'cco' | 'cio' | 'mysteryRecipe' | 'perfectlySeasonal' | 'proof' | 'walkIn' | 'whatsEatingDan'
export type TallCardPropTypes = BaseCardPropType & {
  dek?: string,
  logoKey?: LogoType,
  isWide?: boolean,
  overlayColor?: string,
}
const StyledTallCard = styled.article<{isWide: boolean}>`
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

  a img {
    transition: all .3s ease;
  }

  @media(hover: hover) {
    &:hover {
      .tall-card__background-img {
        transform: translateY(-${spacing.xsm});
        z-index: 0;
      }
    }
  }

  ${({ isWide }) => `
    ${md(css`
      width: ${isWide ? tallCardWideWidth : tallCardWidth};
    `)}
  `}
`;

const Overlay = styled.div<{overlayColor: string}>`
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

const TallCardLogo = styled.div<{ logoWidth: string }>`
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


const determineLogoWidth = (logoType: LogoType) => {
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
  className = '',
  contentType,
  dek,
  href,
  logoKey,
  imageAlt,
  imageUrl,
  isWide = false,
  onClick,
  overlayColor = color.black,
  siteKey,
  stickers,
  target,
}: TallCardPropTypes) => {
  const Logo = keyToLogo(logoKey);

  return (
    <StyledTallCard
      className={imageUrl ? '' : 'no-image'}
      data-testid="tall-card"
      isWide={isWide}
    >
      <a
        href={href}
        onClick={onClick}
        rel={target && target === '_blank' ? 'noopener noreferrer' : ''}
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
          {Logo && logoKey && (
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

export default TallCard;
