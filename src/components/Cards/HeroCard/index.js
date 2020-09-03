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
  background-image: url("${({ backgroundImg }) => backgroundImg}");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 46.5rem;
  justify-content: flex-end;
  padding: ${spacing.lg} ${spacing.sm};
  width: 100%;

  ${breakpoint('md')`
    padding: ${spacing.xlg};
  `}
`;

const HeroCardLogo = styled.div`
  margin-bottom: ${spacing.sm};
  max-width: 10rem;

  ${breakpoint('md')`
    max-width: 13.7rem;
  `}

  svg {
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
  font: ${fontSize.xxxl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.xxsm};
`;

const HeroCardDescription = styled.p`
  color: ${color.white};
  margin-bottom: ${spacing.xsm};

  ${({ cardType }) => (cardType === 'learn' ? `
    font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
    max-width: 24.6rem;
  ` : `
    font: ${fontSize.sm}/${lineHeight.md} ${font.pnb};
    max-width: 32.6rem;
  `)}

  ${breakpoint('md')`
    font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
    max-width: 45.4rem;
  `}
`;

const HeroCardCta = styled.a`
  align-items: center;
  display: flex;
`;

const HeroCardCtaIcon = styled.div`
  height: 2rem;
  margin-right: ${spacing.xsm};
  width: 2rem;

  ${breakpoint('md')`
    height: 4rem;
    margin-right: ${spacing.sm};
    width: 4rem;
  `}

  svg {
    max-height: 100%;
    max-width: 100%;
  }
`;

const HeroCardCtaText = styled.span`
  color: ${color.white};
  font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
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
}) => {
  const Logo = keyToLogo(iconKey);
  const backgroundImg = getImageUrl(backgroundCloudinaryId, 'heroCard');
  return (
    <HeroCardWrapper
      backgroundImg={backgroundImg}
    >
      <div>
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
        >
          {description}
        </HeroCardDescription>
        <HeroCardCta href={ctaUrl}>
          <HeroCardCtaIcon>
            <VideoPlay fill={color.white} />
          </HeroCardCtaIcon>
          <HeroCardCtaText>
            {ctaText}
          </HeroCardCtaText>
        </HeroCardCta>
      </div>
    </HeroCardWrapper>
  );
};

HeroCard.propTypes = {
  /** Image rendered as background for card. */
  backgroundCloudinaryId: PropTypes.string.isRequired,
  /** href for card CTA */
  ctaUrl: PropTypes.string.isRequired,
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
};

HeroCard.defaultProps = {
  iconKey: null,
  personHeadShot: null,
  sticker: null,
  title: null,
};

export default HeroCard;
