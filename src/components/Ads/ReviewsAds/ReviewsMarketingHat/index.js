import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// grab email for for bottom logic
import EmailForm from '../../../Forms/EmailForm';
import { getImageUrl } from '../../../../lib/cloudinary';
import { color, font, fontSize, letterSpacing } from '../../../../styles';

const AdImage = styled.picture`
  max-height: 26.7rem;
  width: 100%;
  z-index: 1;

  ${breakpoint('md')`
    max-height: 30.7rem;
    width: 50%;
    z-index: 2;

    img {
      max-height: 30.7rem;
      max-width: 77.7rem;
    }
  `}
`;

const ContentSection = styled.div`
  background-color: ${color.bigStone};
  left: 1.7rem;
  padding: 1.6rem 1.9rem 2.4rem 2rem;
  position: absolute;
  text-align: left;
  top: 15.5rem;
  width: calc(100% - 3.4rem);
  z-index: 2;

  ${breakpoint('md')`
    max-height: 30.7rem;
    padding: ${({ isAnonymous }) => (isAnonymous
    ? '1.4rem 1.8rem;'
    : '4.1rem 3.6rem 4rem 1.8rem;')}
    position: static;
  `}

  ${breakpoint('xlg')`
    padding: 5.8rem 23.8rem 5.8rem 4rem;
    min-width: 83.2rem;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint('xs')`
    .email-form button {
      padding: 0;
    }
  `}
  
  ${breakpoint('md')`
    width: 34rem;

    .email-form {
      ${({ isAnonymous }) => (
    isAnonymous ? (
      'flex-direction: column; justify-content: space-between; min-height: 8.7rem'
    ) : ''
  )}
    }

    .email-form__how {
      left: 0;
      padding-top: 0.7rem;
      position: absolute;
    }
  `}

  ${breakpoint('xlg')`
    width: 54.5rem;

    .email-form {
      flex-direction: row;
      min-height: 4rem;
    }

    .email-form__how {
      left: 0;
      padding-top: 0.7rem;
      position: absolute;
    }
  `}
`;

const Description = styled.p`
  color: ${color.white};
  font: ${fontSize.md}/2.1rem ${font.pnr};
  letter-spacing: normal;
  margin-bottom: 1.6rem;

  ${breakpoint('md')`
    margin-bottom: ${({ isAnonymous }) => (isAnonymous ? '1.2rem;' : '2.4rem;')}
  `}

  ${breakpoint('xlg')`
    margin-bottom: 2rem;
  `}
`;

const Headline = styled.h2`
  color: ${color.white};
  font: ${fontSize.sm}/1.7rem ${font.pnb};
  letter-spacing: 1.4px;
  margin-bottom: 0.7rem;
  text-transform: uppercase;

  ${breakpoint('md')`
    font: ${fontSize.lg}/2rem ${font.pnb};
    letter-spacing: 1.8px;
    margin-bottom: 1rem;
  `}

  ${breakpoint('xlg')`
    font: ${fontSize.lg}/3rem ${font.pnb};
    margin-bottom: 1.2rem;
  `}
`;

const MarketingHatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpoint('md')`
    flex-direction: row;
  `}

  ${breakpoint('xlg')`
    width: 160.9rem;
  `}
`;

const RegistrantSubmit = styled.a`
  align-items: center;
  background-color: ${color.frog};
  color: ${color.white};
  display: flex;
  font: ${fontSize.lg}/2rem ${font.pnb};
  justify-content: center;
  letter-spacing: ${letterSpacing.cta};
  max-height: 4rem;
  min-height: 4rem;
  max-width: 100%;
  text-transform: uppercase;

  ${breakpoint('md')`
    max-width: 22.6rem;
  `}
`;

const Title = styled.h3`
  color: ${color.white};
  font: 3rem/3rem ${font.pnb};
  letter-spacing: normal;
  margin-bottom: 0.3rem;

  ${breakpoint('md')`
    font: 4rem/3rem ${font.pnb};
    margin-bottom: 1.6rem;
  `}

  ${breakpoint('xlg')`
    margin-bottom: 0.7rem;
    max-height: 4.9rem;
    min-height: 4.9rem;
  `}
`;

const ReviewsMarketingHat = ({
  buttonText,
  description,
  desktopAsset,
  headline,
  inputId,
  isAnonymous,
  mobileAsset,
  onSubmit,
  subdomain,
  title,
  user,
}) => (
  <>
    {user ? (
      <MarketingHatWrapper>
        <AdImage>
          <source
            srcSet={getImageUrl(desktopAsset, 'reviewsMarketingHat', 777, 307)}
            media="(min-width: 1136px)"
          />
          <source
            srcSet={getImageUrl(desktopAsset, 'reviewsMarketingHat', 376, 307)}
            media="(min-width: 768px)"
          />
          <img
            alt=""
            className="marketing-hat__image"
            src={getImageUrl(mobileAsset, 'reviewsMarketingHat', 375, 267)}
          />
        </AdImage>
        <ContentSection isAnonymous={isAnonymous}>
          <ContentWrapper isAnonymous={isAnonymous}>
            <Headline>{headline}</Headline>
            <Title>{title}</Title>
            <Description isAnonymous={isAnonymous}>{description}</Description>
            {isAnonymous ? (
              <EmailForm
                buttonText={buttonText}
                inputId={inputId}
                onSubmit={onSubmit}
                placeholder="Enter Your Email Address"
              />
            ) : (
              <RegistrantSubmit
                href=""
                onClick={() => onSubmit(subdomain, user.email, true)}
              >
                {buttonText}
              </RegistrantSubmit>
            )}
          </ContentWrapper>
        </ContentSection>
      </MarketingHatWrapper>
    ) : null }
  </>
);

ReviewsMarketingHat.propTypes = {
  buttonText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  desktopAsset: PropTypes.string,
  headline: PropTypes.string.isRequired,
  /** Input Id used in email form to shift focus on error */
  inputId: PropTypes.string.isRequired,
  /** Remove Email Capture in instances where user is not anon */
  isAnonymous: PropTypes.bool.isRequired,
  mobileAsset: PropTypes.string,
  /** Function that redirects & fires mixpanel w/ corresponding incodes */
  onSubmit: PropTypes.func.isRequired,
  subdomain: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  /** Object used to prevent marketing hat flashing while user is being defined */
  user: PropTypes.object,
};

ReviewsMarketingHat.defaultProps = {
  desktopAsset: 'ATK Reviews Ads/PansHat_Desktop_3x.jpg',
  mobileAsset: 'ATK Reviews Ads/PansHat_Mobile_3x.jpg',
  user: null,
};

export default ReviewsMarketingHat;
