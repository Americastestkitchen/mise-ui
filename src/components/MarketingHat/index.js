import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import EmailForm from '../Forms/EmailForm';
import { getImageUrl } from '../../lib/cloudinary';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  spacing,
} from '../../styles';

const HeroHatWrapper = styled.div`
  background: no-repeat top left url(${getImageUrl('atk-article-detail-hat_sinouh', { height: 157 })});
  background-size: contain;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  padding-top: 7.6rem;

  ${breakpoint('md')`
    align-items: center;
    background-image: url(${getImageUrl('atk-article-detail-hat_yxgph2', { width: 800 })});
    background-size: cover;
    display: flex;
    margin-bottom: ${spacing.sm};
    min-height: 16.7rem;
    padding-top: 0;
  `}

  ${breakpoint('xlg')`
    background-image: url(${getImageUrl('atk-article-detail-hat-desktop_ocrinm', { width: 1600 })});
    background-position: center center;
    margin-bottom: ${spacing.lg};
  `}
`;

const HeroHatBody = styled.div`
  background-color: ${color.athensGray};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: calc(100% - 2.8rem);
  padding: 1rem 2rem;
  width: 34.2rem;

  #article-page-hat-form-email,
  #article-page-hat-form-submit {
    height: ${spacing.xlg};
    max-height: ${spacing.xlg};
  }

  input {
    background-color: ${color.white};
    border-color: ${color.nobel};
    font: ${fontSize.md}/1 ${font.mwr};
    line-height: 4rem;
    padding: 0 1rem;
  }

  #article-page-hat-form-submit {
    align-items: center;
    background-color: ${color.frog};
    display: flex;
    font: ${fontSize.lg}/1 ${font.pnb};
    justify-content: center;
    letter-spacing: ${letterSpacing.cta};
    padding: 0;

    &:hover {
      background-color: ${color.darkFrog};
    }
  }

  .form-error__inline {
    top: 0.2rem;
  }

  .form-control {
    margin: 0;
  }

  .email-form__how {
    color: ${color.eclipse};
    font: ${fontSize.xsm}/1 ${font.pnr};
    left: 0;
    letter-spacing: normal;
    padding-bottom: 0.2rem;
    position: absolute;
    text-decoration: none;
    width: fit-content;

    &:hover {
      background-color: transparent;
    }
  }

  input::placeholder {
    color: ${color.shadyLady};
    font: ${fontSize.md}/1 ${font.mwr};
    font-style: italic;
    line-height: ${spacing.xlg};
    padding: 0;
  }

  .email-form {
    max-width: 30.7rem;
  }

  .form-input {
    margin-bottom: 0;
  }

  .how-we-use__text {
    top: 2rem;
  }

  ${breakpoint('md')`
    align-items: center;
    background-color: transparent;
    flex-direction: row;
    max-width: 77rem;
    padding: 0 5.6rem 0 8.6rem;
    width: 100%;

    .form-control {
      display: flex;
      width: 100%;
    }

    .email-form {
      flex-direction: column;
      max-width: 100%;
      width: clamp(48%, 45rem, 100%);

      input {
        max-height: 4rem;
      }
    }

    .how-we-use__text {
      left: 0;
      top: 2rem;
    }
  `}

  ${breakpoint('lg')`
    width: 135rem;

    .email-form__form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

  `}

  ${breakpoint('xlg')`
    justify-content: space-between;
    max-width: 124rem;
    padding: 0 8.6rem;

    .email-form-wrapper {
      margin-bottom: 2rem;
    }

    .email-form {
      flex-direction: row;
      width: 45.2rem;

      button {
        max-width: 22.6rem;
        min-width: 22.6rem;
        padding: 0;
      }

      input {
        max-width: 22.6rem;
      }
    }
  `}
`;

const HeroHatContent = styled.div`
  color: ${color.eclipse};
  max-width: 25rem;

  ${breakpoint('md')`
    max-width: 32.5rem;
    padding-right: 2rem;
  `}
`;

const HeroHatHeading = styled.h2`
  font: 2.6rem/${spacing.lg} ${font.mwr};
  font-weight: 600;
  margin-bottom: 0.6rem;

  ${breakpoint('md')`
    font-size: ${fontSize.xxl};
    line-height: 3.9rem;
  `}

  ${breakpoint('xlg')`
    line-height: 4.6rem;
    white-space: nowrap;
  `}
`;

const HeroHatDescription = styled.p`
  font: ${fontSize.md}/1.22 ${font.pnr};
  margin-bottom: 1rem;

  ${breakpoint('md')`
    margin-bottom: 0;
    font-size: ${fontSize.lg};
    line-height: 2.3rem;
  `}

  ${breakpoint('xlg')`
    white-space: nowrap;
  `}
`;

const RegistrantSubmit = styled.button`
  background-color: ${color.frog};
  color: ${color.white};
  text-transform: uppercase;
  max-width: 25rem;

  &:hover {
    background-color: ${color.darkFrog};
  }

  ${breakpoint('md')`
    max-width: 28rem;
    min-width: 28rem;
  `}

  ${breakpoint('xlg')`
    margin-bottom: 2%;
    margin-right: 19%;
    max-width: 22.6rem;
    min-width: 22.6rem;
  `}
`;

const AtkMarketingHat = ({
  cta,
  description,
  errorText,
  headline,
  inputId,
  isRegistrant,
  onSubmit,
  user,
}) => (
  <>
    {Object.entries(user).length > 0 ? (
      <HeroHatWrapper>
        <HeroHatBody>
          <HeroHatContent>
            <HeroHatHeading>
              {headline}
            </HeroHatHeading>
            <HeroHatDescription>
              {description}
            </HeroHatDescription>
          </HeroHatContent>
          {isRegistrant ? (
            <RegistrantSubmit
              data-testid="isRegistrant"
              id={`${inputId}-submit`}
              onClick={onSubmit}
            >
              {cta}
            </RegistrantSubmit>
          ) : (
            <EmailForm
              buttonText={cta}
              errorText={errorText}
              inputId={inputId}
              onSubmit={onSubmit}
              placeholder="Your email address"
            />
          )}
        </HeroHatBody>
      </HeroHatWrapper>
    ) : null }
  </>
);

AtkMarketingHat.propTypes = {
  cta: PropTypes.string,
  description: PropTypes.string,
  errorText: PropTypes.string,
  headline: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  isRegistrant: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  user: PropTypes.object,
};

AtkMarketingHat.defaultProps = {
  cta: 'Get Free Access',
  description: 'Start your 2-week free trial and get instant access to everything.',
  errorText: 'Invalid email address',
  headline: 'Cook Anything with Confidence',
  user: null,
};

export default AtkMarketingHat;
