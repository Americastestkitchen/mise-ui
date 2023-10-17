import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import PersonHeadShot from '../shared/PersonHeadShot';
import Sticker from '../shared/Sticker';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';
import { keyToLogo } from '../../DesignTokens/Logo';
import { VideoPlay } from '../../DesignTokens/Icon/svgs';

const HeroCardWrapper = styled.div.attrs({
  className: 'hero-card',
})`
  background-image: ${({ backgroundImg }) => `url("${backgroundImg}")`};
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 46.5rem;
  justify-content: flex-end;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &::after {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(8, 8, 8, 1));
    content: ' ';
    position: absolute;
    bottom: -1px;
    height: 50%;
    width: 100%;
  }
`;

const HeroCardLogo = styled.div`
  margin-bottom: ${spacing.sm};
  max-width: 13rem;

  ${breakpoint('md')`
    max-width: 21rem;
  `}

  img {
    object-position: bottom;
    object-fit: contain;
    max-width: 100%;
    width: 100%;
  }
`;

const HeroCardHeadshot = styled.div`
  margin-bottom: ${spacing.sm};

  .person-head-shot {
    border-radius: 5rem;
    height: 5rem;
    width: 5rem;
  }

  ${breakpoint('md')`
    .person-head-shot {
      border-radius: 8rem;
      height: 8rem;
      width: 8rem;
    }
  `}
`;

const HeroCardSticker = styled.div`
  margin-bottom: ${spacing.xsm};

  span {
    margin: 0;
  }
`;

const HeroCardTitle = styled.div`
  color: ${color.white};
  font: 700 (${fontSize.xxxl}/${lineHeight.sm} )${font.pnb};
  margin-bottom: ${spacing.xxsm};
`;

const HeroCardDescription = styled.div`
  color: ${color.white};
  margin-bottom: ${spacing.xsm};

  ${({ cardType }) => (cardType === 'learn' ? `
    font: 700 (${fontSize.lg}/${lineHeight.md} )${font.pnb};
    max-width: 24.6rem;
  ` : `
    font: 700 (${fontSize.sm}/${lineHeight.md} )${font.pnb};
    max-width: 32.6rem;
  `)}

  ${breakpoint('md')`
    font: 700 (${fontSize.lg}/${lineHeight.md} )${font.pnb};
    max-width: 45.4rem;
  `}

  &:hover {
    cursor: default;
  }
`;

const HeroCardLink = styled.a`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  justify-content: flex-end;
  padding: ${spacing.lg} ${spacing.sm};
  z-index: 1;

  ${breakpoint('md')`
    padding: ${spacing.xlg};
  `}
`;

const HeroCardCta = styled.span`
  align-items: center;
  display: flex;
`;

const HeroCardCtaIcon = styled.div`
  height: 3.8rem;
  margin-right: ${spacing.xsm};
  width: 3.8rem;

  ${breakpoint('md')`
    height: 4rem;
    margin-right: ${spacing.sm};
    width: 4rem;
  `}

  svg {
    max-height: 100%;
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }

`;

const HeroCardCtaText = styled.span`
  color: ${color.white};
  font: 700 (${fontSize.xl}/${lineHeight.sm} )${font.pnb};
`;

const HeroCard = ({
  backgroundCloudinaryId,
  ctaUrl,
  ctaText,
  description,
  iconKey,
  personHeadShot,
  sticker,
  title,
  onClick,
}) => {
  const Logo = keyToLogo(iconKey);
  const backgroundImg = getImageUrl(backgroundCloudinaryId, 'heroCard');
  return (
    <HeroCardWrapper
      backgroundImg={backgroundImg}
    >
      <HeroCardLink
        href={ctaUrl}
        onClick={onClick}
      >
        {
          Logo && (
            <HeroCardLogo>
              <Logo />
            </HeroCardLogo>
          )
        }
        {
          personHeadShot && (
            <HeroCardHeadshot>
              <PersonHeadShot
                {...personHeadShot}
                size={{
                  sm: '5',
                  md: '8',
                }}
              />
            </HeroCardHeadshot>
          )
        }
        {
          sticker && (
            <HeroCardSticker>
              <Sticker {...sticker} />
            </HeroCardSticker>
          )
        }
        {
          title && (
            <HeroCardTitle>
              {title}
            </HeroCardTitle>
          )
        }
        <HeroCardDescription
          cardType={personHeadShot && sticker ? 'learn' : 'watch'}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <HeroCardCta>
          <HeroCardCtaIcon>
            <VideoPlay fill={color.white} />
          </HeroCardCtaIcon>
          <HeroCardCtaText>
            {ctaText}
          </HeroCardCtaText>
        </HeroCardCta>
      </HeroCardLink>
    </HeroCardWrapper>
  );
};

HeroCard.propTypes = {
  /** Image rendered as background for card. */
  backgroundCloudinaryId: PropTypes.string.isRequired,
  /** href for card CTA */
  ctaUrl: PropTypes.string,
  /** text for card CTA */
  ctaText: PropTypes.string.isRequired,
  /** Description text above CTA */
  description: PropTypes.string.isRequired,
  /** Optional: Key value that maps to a show logo. */
  iconKey: PropTypes.string,
  /** Optional: Image data that is used to render a PersonHeadShot. */
  personHeadShot: PropTypes.shape({
    ...PersonHeadShot.propTypes,
  }),
  /** Optional: Data used to render a sticker. */
  sticker: PropTypes.shape({
    ...Sticker.propTypes,
  }),
  /** Title text above description */
  title: PropTypes.string,
  onClick: PropTypes.func,
};

HeroCard.defaultProps = {
  ctaUrl: null,
  iconKey: null,
  personHeadShot: null,
  sticker: null,
  title: null,
  onClick: () => {},
};

export default HeroCard;
