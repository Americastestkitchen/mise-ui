import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// grab email for for bottom logic
import EmailForm from '../../../Forms/EmailForm';
import { getImageUrl } from '../../../../lib/cloudinary';
import { color, font, fontSize, letterSpacing, spacing } from '../../../../styles';

const AdImage = styled.div`
  height: 20rem;
  max-height: 31.5rem;
  width: 100%;
  z-index: 1;
  background-image: url(${({ images }) => (images.mobileAsset)});
  background-repeat: no-repeat;
  background-size: cover;


  ${breakpoint('md')`
    background-image: url(${({ images }) => (images.tabletAsset ? images.tabletAsset : images.desktopAsset)});
    height: 30.7rem;
    max-height: 30.7rem;
    width: 50%;
    z-index: 2;
    min-height: 100%;
    max-width: 77.7rem;
  `}

  ${breakpoint('lg')`
    background-image: url(${({ images }) => (images.desktopAsset)});
  `}

  ${breakpoint('xlg')`
    background-image: url(${({ images }) => (images.desktopLgAsset ? images.desktopLgAsset : images.desktopAsset)});
    min-width: 50%;
  `}
`;

const ContentSection = styled.div`
  background-color: ${color.bigStone};
  color: ${color.white};
  top: 10.5rem;

  &.dollarOffer {
    background-color: ${color.dawnPink};
    color: ${color.eclipse};
    top: 7.5rem;
  }

  left: 1.7rem;
  padding: ${spacing.sm} 1.9rem ${spacing.md} 2rem;
  position: absolute;
  text-align: left;
  width: calc(100% - 3.4rem);
  z-index: 2;
  margin-bottom: 3rem;

  &.anon-user {
    padding: ${spacing.sm} 1.9rem ${spacing.xxsm} 2rem;
  }

  ${breakpoint('md')`
    max-height: 30.7rem;
    max-width: 50%;
    padding: ${spacing.xlg} 3.6rem ${spacing.xlg} 1.8rem;
    position: static;
    margin: 0;

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

  .email-form {
    .form-input input {
      background-color: ${color.white};

      &::placeholder {
        font: ${fontSize.md}/1rem ${font.pnr};
        line-height: 2.1rem;
      }
    }

    button {
      letter-spacing: ${letterSpacing.cta};
    }
  }

  .email-form__how {
    font: 1rem/1.2rem ${font.pnr};
    color: ${color.white};
  }

  &.dollarOffer {
    h2 {
      margin-bottom: 0;
      ${breakpoint('lg')`
        font-size: 2rem;
      `}
    }
    h3 {
      font: bold 2.8rem ${font.mwr};
      ${breakpoint('lg')`
        font-size: ${fontSize.xxl};
      `}
    }
    .email-form__how {
      color: ${color.eclipse};
    }
  }

  ${breakpoint('xs')`
    .email-form button {
      padding: 0;
    }
  `}

  ${breakpoint('md')`
    width: 35rem;

    .email-form {
      ${({ isAnonymous }) => (
    isAnonymous ? (
      'flex-direction: column; justify-content: space-between; min-height: 8.7rem'
    ) : ''
  )}
    }

    .email-form__how-we-use-text {
      left: 0;
      top 2.5rem;
    }

    .email-form__how {
      left: 0;
      padding-top: 0.7rem;
      position: absolute;
    }
  `}

  ${breakpoint('lg')`
    width: 42rem;
  `}

  ${breakpoint('xlg')`
    width: 55.5rem;

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
  font: ${fontSize.md}/1.9rem ${font.pnr};
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
  font: ${fontSize.md} ${font.pnb};
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1.2rem;

  ${breakpoint('md')`
    font: ${fontSize.lg}/3rem ${font.pnb};
    letter-spacing: 1.8px;
  `}

  ${breakpoint('lg')`
    font-size: ${fontSize.lg};
  `}
`;

const MarketingHatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20.5rem;
  width: 100%;

  @media print {
    display: none;
  }

  &.anon-user {
    margin-bottom: 23rem;
  }

  ${breakpoint('sm')`
    margin-bottom: 16rem;

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

const RegistrantSubmit = styled.button`
  align-items: center;
  background-color: ${color.frog};
  color: ${color.white};
  display: flex;
  font: ${fontSize.md}/2rem ${font.pnb};
  justify-content: center;
  letter-spacing: ${letterSpacing.md};
  max-height: ${spacing.xlg};
  min-height: ${spacing.xlg};
  max-width: 100%;
  text-transform: uppercase;

  &:hover {
    background-color: ${color.darkFrog};
  }

  ${breakpoint('md')`
    max-width: 22.6rem;
  `}
`;

const Title = styled.h3`
  font: bold 2.8rem/3rem ${font.pnb};

  letter-spacing: normal;
  margin-bottom: ${spacing.xsm};

  ${breakpoint('lg')`
    font-size: 4rem;
  `}

  ${breakpoint('xlg')`
    max-height: 4.9rem;
    min-height: 4.9rem;
    margin-bottom: ${spacing.xxsm};
  `}
`;

const ReviewsMarketingHat = ({
  buttonText,
  description,
  headline,
  inputId,
  images,
  isAnonymous,
  promoId,
  onSubmit,
  title,
}) => (
  <MarketingHatWrapper className={isAnonymous ? 'anon-user' : ''}>
    <AdImage images={images} />
    <ContentSection className={`${promoId} ${isAnonymous ? 'anon-user' : ''}`}>
      <ContentWrapper className={`${promoId} ${isAnonymous ? 'anon-user' : ''}`} isAnonymous={isAnonymous}>
        <Headline>{headline}</Headline>
        <Title>{title}</Title>
        <Description className={isAnonymous ? 'anon-user' : ''}>{description}</Description>
        {isAnonymous ? (
          <EmailForm
            buttonText={buttonText}
            formId="hat-email-form"
            inputId={inputId}
            onSubmit={onSubmit}
            placeholder="Enter your email address"
          />
        ) : (
          <RegistrantSubmit
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
  headline: PropTypes.string.isRequired,
  images: PropTypes.shape({
    desktopAsset: PropTypes.string,
    desktopLgAsset: PropTypes.string,
    tabletAsset: PropTypes.string,
    mobileAsset: PropTypes.string,
  }),
  /** Input Id used in email form to shift focus on error */
  inputId: PropTypes.string.isRequired,
  /** Remove Email Capture in instances where user is not anon */
  isAnonymous: PropTypes.bool.isRequired,
  promoId: PropTypes.string.isRequired,
  /** Function that redirects & fires mixpanel w/ corresponding incodes */
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  /** Object used to prevent marketing hat flashing while user is being defined */
};

ReviewsMarketingHat.defaultProps = {
  images: {
    desktopAsset: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1621261895/ATK%20Reviews%20Ads/PansHat_Desktop_3x.jpg',
    mobileAsset: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1621261948/ATK%20Reviews%20Ads/PansHat_Mobile_3x.jpg',
  },
};

export default ReviewsMarketingHat;
