import React from 'react';

import EmailForm, { EmailFormProps } from '../Forms/EmailForm/EmailForm';
import HeroHatBody from './components/HeroHatBody';
import HeroHatContent from './components/HeroHatContent';
import HeroHatDescription from './components/HeroHatDescription';
import HeroHatHeading from './components/HeroHatHeading';
import HeroHatSubHeading from './components/HeroHatSubHeading';
import HeroHatWrapper from './components/HeroHatWrapper';
import RegistrantSubmit from './components/RegistrantSubmit';

export type HeroImagesType = {
  mobile: string;
  tablet: string;
  desktop: string;
  desktopLg: string;
  mobileTall: string;
  tabletTall: string;
  desktopTall: string;
  desktopLgTall: string;
}

export interface RecipesMarketingHatProps extends EmailFormProps {
  className?: string | undefined;
  cta?: string;
  description?: string;
  headline?: string;
  subheadline?: string;
  heroImages?: HeroImagesType;
  isRegistrant: boolean
  onSubmit: () => void;
  user?: Record<string, unknown> | null;
  isTall?: string;
}

const RecipesMarketingHat = ({
  className = '',
  cta = 'Get Free Access',
  description = 'Cook anything better with the most reliable recipes, guaranteed. Get instant access to everything across our sites free for 2 weeks.',
  headline = 'Get Every Recipe',
  subheadline = 'Try All Access Free',
  heroImages = {
    mobile: 'Marketing Hat 2022/Recipes Chicken Biscuits/mobile',
    tablet: 'Marketing Hat 2022/Recipes Chicken Biscuits/tablet',
    desktop: 'Marketing Hat 2022/Recipes Chicken Biscuits/desktop',
    desktopLg: 'Marketing Hat 2022/Recipes Chicken Biscuits/desktop-lg',
    mobileTall: 'Marketing Hat 2022/Recipes Chicken Biscuits/Mobile-Tall_2x',
    tabletTall: 'Marketing Hat 2022/Recipes Chicken Biscuits/Tablet-Tall_2x',
    desktopTall: 'Marketing Hat 2022/Recipes Chicken Biscuits/Desktop-Tall_2x',
    desktopLgTall: 'Marketing Hat 2022/Recipes Chicken Biscuits/Desktop-MaxWidth-Tall_2x',
  },
  inputId,
  isRegistrant,
  onSubmit,
  user,
  isTall = '',
}: RecipesMarketingHatProps) => (
  <>
    {user && Object.entries(user).length > 0 && (
      <HeroHatWrapper
        className={`hero-hat ${className} ${isTall}`}
        heroImages={heroImages}
      >
        <HeroHatBody isTall={isTall}>
          <HeroHatContent isTall={isTall}>
            <HeroHatHeading isTall={isTall}>
              {headline}
            </HeroHatHeading>
            <HeroHatSubHeading isTall={isTall}>
              {subheadline}
            </HeroHatSubHeading>
            <HeroHatDescription
              dangerouslySetInnerHTML={{ __html: description }}
              isTall={isTall}
            />
          </HeroHatContent>
          {isRegistrant ? (
            <RegistrantSubmit
              data-testid="isRegistrant"
              isTall={isTall}
              id={`${inputId}-submit`}
              onClick={onSubmit}
            >
              {cta}
            </RegistrantSubmit>
          ) : (
            <EmailForm
              buttonText={cta}
              inputId={inputId}
              onSubmit={onSubmit}
              placeholder="Your email address"
            />
          )}
        </HeroHatBody>
      </HeroHatWrapper>
    )}
  </>
);

export default RecipesMarketingHat;
