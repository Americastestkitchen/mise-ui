import React from 'react';
import styled, { css } from 'styled-components';
import { untilSm, sm, md, lg, xlg } from '../../../../styles/breakpoints';

import EmailForm, { EmailFormProps } from '../../../Forms/EmailForm/EmailForm';
import { color, font, fontSize, letterSpacing, spacing } from '../../../../styles';

type HeroImages = {
  mobileAsset: string;
  tabletAsset?: string;
  desktopAsset: string;
  desktopLgAsset?: string;
}

const AdImage = styled.div<{images: HeroImages}>`
  background-image: url(${({ images }) => images.mobileAsset});
  background-repeat: no-repeat;
  background-size: cover;
  height: 20rem;
  max-height: 31.5rem;
  width: 100%;
  z-index: 1;
  
  ${({ images }) => md(`
    background-image: url(${images.tabletAsset || images.desktopAsset});
    height: 30.7rem;
    max-width: 77.7rem;
    width: 50%;
    z-index: 2;
  `)}

  ${({ images }) => lg(`
    background-image: url(${images.desktopAsset});
  `)}

  ${({ images }) => xlg(`
    background-image: url(${images.desktopLgAsset || images.desktopAsset})
  `)}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &.dollarOffer {
    h2 {
      margin-bottom: 0;
      ${lg(css`
        font-size: 2rem;
      `)}
    }

    h3 {
      font: bold 2.8rem ${font.mwr};
      ${lg(css`
        font-size: ${fontSize.xxl};
      `)}
    }

    .email-form__how {
      color: ${color.eclipse};
    }
  }

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

    .email-form__how {
      color: ${color.white};
      font: 1rem/1.2rem ${font.pnr};
    }
  }

  .how-we-use__text {
    left: 0;
    top: 3.5rem;
  }

  ${untilSm(css`
    .email-form button {
      padding: 0;
    }
  `)}

  ${md(css`
    width: 35rem;

    &.anon-user {
      .email-form {
        flex-direction: column;
        justify-content: space-between;
        min-height: 8.7rem
      }
    }

    .email-form__how {
      left: 0;
      padding-top: 0.7rem;
      position: absolute;
    }
  `)}

  ${lg(css`
    width: 42rem;

    .email-form__how {
      left: 0;
      padding-top: ${spacing.xsm};
      position: absolute;
    }
  `)}

  ${xlg(css`
    width: 55.5rem;

    &.anon-user {
      .email-form {
        flex-direction: row;
        max-width: 51.5rem;
        min-height: ${spacing.xlg};
  
        button {
          min-width: 22.5rem;
        }
  
        .form-input input {
          max-height: ${spacing.xlg};
          max-width: 29rem;
        }
  
        .email-form__how {
          left: 0;
          padding-top: ${spacing.xsm};
          position: absolute;
        }
      }
    }
  `)}
`;

const ContentSection = styled.div`
  background-color: ${color.bigStone};
  color: ${color.white};
  left: 1.7rem;
  margin-bottom: 3rem;
  padding: ${spacing.sm} 1.9rem ${spacing.md} 2rem;
  position: absolute;
  text-align: left;
  top: 10.5rem;
  width: calc(100% - 3.4rem);
  z-index: 2;

  &.dollarOffer {
    background-color: ${color.dawnPink};
    color: ${color.eclipse};
    top: 7.5rem;
  }

  &.anon-user {
    padding: ${spacing.sm} 1.9rem ${spacing.xxsm} 2rem;
  }

  ${md(css`
    margin: 0;
    max-height: 30.7rem;
    max-width: 50%;
    padding: ${spacing.xlg} 3.6rem ${spacing.xlg} 1.8rem;
    position: static;

    &.anon-user {
      padding: 1.4rem 1.8rem;
    }
  `)}

  ${xlg(css`
    min-width: 83.2rem;
    padding: 5.1rem 23.8rem 5.8rem ${spacing.xlg};

    &.anon-user {
      padding: 5.1rem 23.8rem 5.8rem ${spacing.xlg};
    }
  `)}
`;

const Description = styled.p`
  font: ${fontSize.md}/1.9rem ${font.pnr};
  letter-spacing: normal;
  margin-bottom: ${spacing.sm};

  ${md(css`
    margin-bottom: ${spacing.md};

    &.anon-user {
      margin-bottom: 1.2rem;
    }
  `)}

  ${xlg(css`
    margin-bottom: 2rem;

    &.anon-user {
      margin-bottom: 2rem;
    }
  `)}
`;

const Headline = styled.h2`
  font: ${fontSize.md} ${font.pnb};
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1.2rem;

  ${md(css`
    font: ${fontSize.lg}/3rem ${font.pnb};
    letter-spacing: 1.8px;
  `)}

  ${lg(css`
    font-size: ${fontSize.lg};
  `)}
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

  ${sm(css`
    margin-bottom: 16rem;

    &.anon-user {
      margin-bottom: 20rem;
    }
  `)}

  ${md(css`
    flex-direction: row;
    margin-bottom: 0;

    &.anon-user {
      margin-bottom: 0;
    }
  `)}
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

  ${md(css`
    max-width: 22.6rem;
  `)}
`;

const Title = styled.h3`
  font: bold 2.8rem/3rem ${font.pnb};

  letter-spacing: normal;
  margin-bottom: ${spacing.xsm};

  ${lg(css`
    font-size: 4rem;
  `)}

  ${xlg(css`
    max-height: 4.9rem;
    min-height: 4.9rem;
    margin-bottom: ${spacing.xxsm};
  `)}

`;

export interface ReviewsMarketingHatProps extends EmailFormProps {
  buttonText: string;
  description: string;
  headline: string;
  images?: HeroImages;
  inputId: string;
  isAnonymous: boolean;
  promoId: string;
  onSubmit: () => void;
  title: string;
}

const ReviewsMarketingHat = ({
  buttonText,
  description,
  headline,
  inputId,
  images = {
    desktopAsset: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1621261895/ATK%20Reviews%20Ads/PansHat_Desktop_3x.jpg',
    mobileAsset: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1621261948/ATK%20Reviews%20Ads/PansHat_Mobile_3x.jpg',
  },
  isAnonymous,
  onSubmit,
  promoId,
  title,
}: ReviewsMarketingHatProps) => {
  const anonClass = isAnonymous ? 'anon-user' : '';
  return (
    <MarketingHatWrapper className={anonClass}>
      <AdImage images={images} />
      <ContentSection className={`${promoId} ${anonClass}`}>
        <ContentWrapper className={`${promoId} ${anonClass}`}>
          <Headline>{headline}</Headline>
          <Title>{title}</Title>
          <Description className={anonClass}>{description}</Description>
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
};

export default ReviewsMarketingHat;
