import React from 'react';
import PropTypes from 'prop-types';

import EmailForm from '../Forms/EmailForm';
import HeroHatBody from './components/HeroHatBody';
import HeroHatContent from './components/HeroHatContent';
import HeroHatDescription from './components/HeroHatDescription';
import HeroHatHeading from './components/HeroHatHeading';
import HeroHatSubHeading from './components/HeroHatSubHeading';
import HeroHatWrapper from './components/HeroHatWrapper';
import RegistrantSubmit from './components/RegistrantSubmit';

const RecipesMarketingHat = ({
  className,
  cta,
  description,
  errorText,
  headline,
  subheadline,
  heroImages,
  inputId,
  isRegistrant,
  onSubmit,
  user,
  isTall,
}) => (
  <>
    {Object.entries(user).length > 0 ? (
      <HeroHatWrapper
        className={`${className} ${isTall}`}
        heroImages={heroImages}
      >
        <HeroHatBody className={isTall}>
          <HeroHatContent className={isTall}>
            <HeroHatHeading className={isTall}>
              {headline}
            </HeroHatHeading>
            <HeroHatSubHeading className={isTall}>
              {subheadline}
            </HeroHatSubHeading>
            <HeroHatDescription
              className={isTall}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </HeroHatContent>
          {isRegistrant ? (
            <RegistrantSubmit
              className={`${isTall} registrant-submit`}
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

RecipesMarketingHat.propTypes = {
  className: PropTypes.string,
  cta: PropTypes.string,
  description: PropTypes.string,
  errorText: PropTypes.string,
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  heroImages: PropTypes.shape({
    mobile: PropTypes.string.isRequired,
    tablet: PropTypes.string.isRequired,
    desktop: PropTypes.string.isRequired,
  }),
  inputId: PropTypes.string.isRequired,
  isRegistrant: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  user: PropTypes.object,
  isTall: PropTypes.string,
};

RecipesMarketingHat.defaultProps = {
  className: null,
  cta: 'Get Free Access',
  description: 'Cook anything better with the most reliable recipes, guaranteed. Get instant access to everything across our sites free for 2 weeks.',
  errorText: 'Invalid email address',
  headline: 'Get Every Recipe',
  subheadline: 'Try All Access Free',
  heroImages: {
    mobile: 'Marketing Hat 2022/Recipes Chicken Biscuits/mobile',
    tablet: 'Marketing Hat 2022/Recipes Chicken Biscuits/tablet',
    desktop: 'Marketing Hat 2022/Recipes Chicken Biscuits/desktop',
    desktopLg: 'Marketing Hat 2022/Recipes Chicken Biscuits/desktop-lg',
    mobileTall: 'Marketing Hat 2022/Recipes Chicken Biscuits/Mobile-Tall_2x',
    tabletTall: 'Marketing Hat 2022/Recipes Chicken Biscuits/Tablet-Tall_2x',
    desktopTall: 'Marketing Hat 2022/Recipes Chicken Biscuits/Desktop-Tall_2x',
    desktopLgTall: 'Marketing Hat 2022/Recipes Chicken Biscuits/Desktop-MaxWidth-Tall_2x',
  },
  user: null,
  isTall: '',
};

export default RecipesMarketingHat;
