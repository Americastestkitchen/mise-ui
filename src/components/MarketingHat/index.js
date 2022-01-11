import React from 'react';
import PropTypes from 'prop-types';

import EmailForm from '../Forms/EmailForm';
import HeroHatBody from './components/HeroHatBody';
import HeroHatContent from './components/HeroHatContent';
import HeroHatDescription from './components/HeroHatDescription';
import HeroHatHeading from './components/HeroHatHeading';
import HeroHatSuccess from './components/HeroHatSuccess';
import HeroHatWrapper from './components/HeroHatWrapper';
import RegistrantSubmit from './components/RegistrantSubmit';

import {
  color,
} from '../../styles';

import Checkmark from '../DesignTokens/Icon/svgs/Checkmark2';

const AtkMarketingHat = ({
  className,
  cta,
  description,
  errorText,
  headline,
  heroImages,
  inputId,
  isRegistrant,
  onSubmit,
  success,
  successText,
  user,
}) => (
  <>
    {Object.entries(user).length > 0 ? (
      <HeroHatWrapper
        className={className}
        heroImages={heroImages}
      >
        <HeroHatBody>
          <HeroHatContent>
            <HeroHatHeading>
              {headline}
            </HeroHatHeading>
            <HeroHatDescription>
              {description}
            </HeroHatDescription>
          </HeroHatContent>
          {success ? (
            <HeroHatSuccess>
              <Checkmark fill={color.mint} />
              <span>{successText}</span>
            </HeroHatSuccess>
          ) : (
            isRegistrant ? (
              <RegistrantSubmit
                className="registrant-submit"
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
            )
          )}
        </HeroHatBody>
      </HeroHatWrapper>
    ) : null }
  </>
);

AtkMarketingHat.propTypes = {
  className: PropTypes.string,
  cta: PropTypes.string,
  description: PropTypes.string,
  errorText: PropTypes.string,
  headline: PropTypes.string,
  heroImages: PropTypes.shape({
    mobile: PropTypes.string.isRequired,
    tablet: PropTypes.string.isRequired,
    desktop: PropTypes.string.isRequired,
  }),
  inputId: PropTypes.string.isRequired,
  isRegistrant: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  success: PropTypes.bool,
  successText: PropTypes.string,
  user: PropTypes.object,
};

AtkMarketingHat.defaultProps = {
  className: null,
  cta: 'Get Free Access',
  description: 'Start your 2-week free trial and get instant access to everything.',
  errorText: 'Invalid email address',
  headline: 'Cook Anything with Confidence',
  heroImages: {
    mobile: 'atk-article-detail-hat_sinouh',
    tablet: 'atk-article-detail-hat_yxgph2',
    desktop: 'atk-article-detail-hat-desktop_ocrinm',
  },
  success: false,
  successText: 'Thanks for signing up!',
  user: null,
};

export default AtkMarketingHat;
