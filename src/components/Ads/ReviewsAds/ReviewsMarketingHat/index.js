import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// grab email for for bottom logic
import EmailForm from '../../../Forms/EmailForm';
import { getImageUrl } from '../../../../lib/cloudinary';
import { color, font, fontSize, letterSpacing, spacing } from '../../../../styles';

const AdImage = styled.picture`
  max-height: 26.7rem;
  width: 100%;
  z-index: 1;

  img {
    max-height: 31.5rem;
    min-width: 100%;
  }

  ${breakpoint('md')`
    max-height: 30.7rem;
    width: 50%;
    z-index: 2;

    img {
      max-height: 30.7rem;
      max-width: 77.7rem;
    }
  `}

  ${breakpoint('xlg')`
    min-width: 50%;

    img {
      min-height: 100%;
    }
  `}
`;

const ContentSection = styled.div`
  background-color: ${color.bigStone};
  left: 1.7rem;
  padding: ${spacing.sm} 1.9rem ${spacing.md} 2rem;
  position: absolute;
  text-align: left;
  top: 15.5rem;
  width: calc(100% - 3.4rem);
  z-index: 2;

  &.anon-user {
    padding: ${spacing.sm} 1.9rem ${spacing.xxsm} 2rem;
  }

  ${breakpoint('md')`
    max-height: 30.7rem;
    max-width: 50%;
    padding: ${spacing.xlg} 3.6rem ${spacing.xlg} 1.8rem;
    position: static;

    &.anon-user {
      padding: 1.4rem 1.8rem;
    }
  `}

  ${breakpoint('xlg')`
    padding: 5.1rem 23.8rem 5.8rem ${spacing.xlg};
    min-width: 83.2rem;

    &.anon-user {
      padding: 5.1rem 23.8rem 5.8rem ${spacing.xlg};
    }
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
      max-width: 51.5rem;
      min-height: ${spacing.xlg};

      button {
        min-width: 22.5rem;
      }

      .form-input {
        input {
          max-height: ${spacing.xlg};
          max-width: 29rem;
        }
    }

    .email-form__how {
      left: 0;
      padding-top: ${spacing.xsm};
      position: absolute;
    }
  `}
`;

const Description = styled.p`
  color: ${color.white};
  font: ${fontSize.md}/2.1rem ${font.pnr};
  letter-spacing: normal;
  margin-bottom: ${spacing.sm};

  ${breakpoint('md')`
    margin-bottom: ${spacing.md};

    &.anon-user {
      margin-bottom: 1.2rem;
    }
  `}

  ${breakpoint('xlg')`
    margin-bottom: 2rem;

    &.anon-user {
      margin-bottom: 2rem;
    }
  `}
`;

const Headline = styled.h2`
  color: ${color.white};
  font: ${fontSize.sm}/1.7rem ${font.pnb};
  letter-spacing: 1.4px;
  margin-bottom: ${spacing.xsm};
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
  margin-bottom: 20rem;
  width: 100%;

  &.anon-user {
    margin-bottom: 26rem;
  }

  ${breakpoint('sm')`
    margin-bottom: 14rem;

    &.anon-user {
      margin-bottom: 20rem;
    }
  `}

  ${breakpoint('md')`
    flex-direction: row;
    margin-bottom: 0;

    &.anon-user {
      margin-bottom: 0;
    }
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
  max-height: ${spacing.xlg};
  min-height: ${spacing.xlg};
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
  margin-bottom: ${spacing.xxsm};

  ${breakpoint('md')`
    font: 4rem/3rem ${font.pnb};
    margin-bottom: ${spacing.sm};
  `}

  ${breakpoint('xlg')`
    margin-bottom: ${spacing.xsm};
    max-height: 4.9rem;
    min-height: 4.9rem;
  `}
`;

const ReviewsMarketingHat = ({
  buttonText,
  description,
  desktopAsset,
  headline,
  incode,
  inputId,
  isAnonymous,
  mdc,
  mobileAsset,
  onSubmit,
  title,
}) => (
  <MarketingHatWrapper className={isAnonymous ? 'anon-user' : ''}>
    <AdImage>
      <source
        srcSet={getImageUrl(desktopAsset, 'reviewsMarketingHat', 307, 'fit')}
        media="(min-width: 1136px)"
      />
      <source
        srcSet={getImageUrl(mobileAsset, 'reviewsMarketingHat', 307, 'fit', 512)}
        media="(min-width: 768px)"
      />
      <img
        alt=""
        className="marketing-hat__image"
        src={getImageUrl(mobileAsset, 'reviewsMarketingHat', 267, 'fit', 450)}
      />
    </AdImage>
    <ContentSection className={isAnonymous ? 'anon-user' : ''}>
      <ContentWrapper className={isAnonymous ? 'anon-user' : ''} isAnonymous={isAnonymous}>
        <Headline>{headline}</Headline>
        <Title>{title}</Title>
        <Description className={isAnonymous ? 'anon-user' : ''}>{description}</Description>
        {isAnonymous ? (
          <EmailForm
            buttonText={buttonText}
            inputId={inputId}
            onSubmit={onSubmit}
            placeholder="Enter Your Email Address"
          />
        ) : (
          <RegistrantSubmit
            href={`/order?mdc=${mdc}&incode=${incode}`}
            onClick={onSubmit}
          >
            {buttonText}
          </RegistrantSubmit>
        )}
      </ContentWrapper>
    </ContentSection>
  </MarketingHatWrapper>
);

ReviewsMarketingHat.propTypes = {
  buttonText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  desktopAsset: PropTypes.string,
  headline: PropTypes.string.isRequired,
  incode: PropTypes.string.isRequired,
  /** Input Id used in email form to shift focus on error */
  inputId: PropTypes.string.isRequired,
  /** Remove Email Capture in instances where user is not anon */
  isAnonymous: PropTypes.bool.isRequired,
  mdc: PropTypes.string.isRequired,
  mobileAsset: PropTypes.string,
  /** Function that redirects & fires mixpanel w/ corresponding incodes */
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  /** Object used to prevent marketing hat flashing while user is being defined */
};

ReviewsMarketingHat.defaultProps = {
  desktopAsset: 'ATK Reviews Ads/PansHat_Desktop_3x.jpg',
  mobileAsset: 'ATK Reviews Ads/PansHat_Mobile_3x.jpg',
};

export default ReviewsMarketingHat;
