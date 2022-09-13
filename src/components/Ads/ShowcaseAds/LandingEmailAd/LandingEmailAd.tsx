import React from 'react';
import styled, { css } from 'styled-components';
import { sm, md, lg, xlg } from '../../../../styles/breakpoints';

import {
  color,
  font,
  fontSize,
  lineHeight,
  spacing,
  withThemes,
} from '../../../../styles';

import Checkmark from '../../../DesignTokens/Icon/svgs/Checkmark2';
import EmailForm from '../../../Forms/EmailForm/EmailForm';
import Image from '../../../Cards/shared/Image/Image';

const LandingEmailTheme = {
  default: css<{ success?: boolean }>`
    align-items: center;
    background-color: ${color.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    ${({ success }) => (success ? 'height: 34rem' : 'min-height: 46rem;')}
    width: calc(100% - 3.2rem);

    .landing-ad-image-desktop {
      display: none;
    }

    ${md(css`
      flex-direction: row;
      min-height: 33rem;
      width: calc(100% - 7.2rem);
    `)}

    ${lg(css`
      width: calc(100% - 3.2rem);
    `)}

    ${xlg(css`
      height: 33rem;
      width: 113.6rem;

      .landing-ad-image-tablet {
        display: none;
      }

      .landing-ad-image-desktop {
        display: block;
      }
    `)}

    .email-form button {
      background-color: ${color.coldPool};
      width: 100%;

      ${xlg(css`
        max-width: 35rem;
      `)}

      &:hover {
        background-color: ${color.darkColdPool};
      }
    }

    .how-we-use__link {
        color: ${color.eclipse};
        padding: 0;
    }
  `,
  dark: css`
    background-color: ${color.smokeyQuartz};

    .email-form button {
      background-color: ${color.tomato};

      &:hover {
        background-color: ${color.tomato};
      }
    }
  `,
};

const LandingEmailWrapper = styled.div.attrs<{ success?: boolean }>({
  className: 'landing-email-ad-wrapper',
})<{ success?: boolean }>`${withThemes(LandingEmailTheme)}`;

const ImageWrapper = styled.div`
  background-size: cover;
  margin-bottom: 1rem;
  width: 100%;

  ${md(css`
    margin-bottom: 0;
    max-height: 33rem;
    overflow: hidden;
    width: 50%;
  `)}

  .landing-ad-image {
    height: 100%;
    width: 100%;

    ${md(css`
      min-height: 32.9rem;
    `)}
  }
`;

const FormColumnWrapper = styled.div<{ success?: boolean }>`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ success }) => (success ? '10%' : '0')};

  ${md(css`
    width: 50%;
  `)}
`;

const FormBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  width: 30rem;

  ${xlg(css`
    margin-bottom: 0;
    width: 34.4rem;
  `)}

  .email-form {
    flex-direction: column;

    & div {
      margin: 1.6rem 0 0.8rem;
    }

    .form-error__inline {
      margin: 0;
      position: absolute;
      top: 5%;
    }
  }

  .email-form-wrapper div {
    justify-content: flex-start;
  }

  #landing-newsletter-ad {
    background-color: ${color.white};
    border: 1px solid ${color.eclipse};

    &::placeholder {
      color: ${color.eclipse};
      font: ${fontSize.md}/2.6rem ${font.mwr};
      font-style: italic;
    }
  }
`;

const ContentHeadlineTheme = {
  default: css`
    color: ${color.eclipse};
    font: 1.34rem/1.6rem ${font.pnr};
    letter-spacing: 0.25rem;
    margin-bottom: 0.9rem;
    text-transform: uppercase;

    ${xlg(css`
      font: ${fontSize.md}/1.6rem ${font.pnr};
    `)}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const ContentHeadline = styled.span.attrs({
  className: 'landing-ad-content-headline',
})`${withThemes(ContentHeadlineTheme)}`;

const ContentTitleTheme = {
  default: css`
    color: ${color.eclipse};
    font: 2.6rem ${font.pnb};
    line-height: 3rem;
    width: 30rem;

    ${sm(css`
      width: 31rem;
    `)}

    ${xlg(css`
      width: 34.4rem;
    `)}
  `,
  dark: css`
    color: ${color.white};
    width: 30rem;
  `,
};

const NewsletterSuccessTheme = {
  default: css`
    color: ${color.eclipse};
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin: 0 0 ${spacing.sm} 0;
    svg {
      display: inline-block;
      height: 1.4rem;
      margin-right: ${spacing.xsm};
      width: 2.1rem;
    }

    ${xlg(css`
      width: 85%;
    `)}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const NewsletterSuccess = styled.div.attrs({
  className: 'newsletter-showcase__success',
})`${withThemes(NewsletterSuccessTheme)}`;

const ContentTitle = styled.p.attrs({
  className: 'landing-ad-content-title',
})`${withThemes(ContentTitleTheme)}`;

export type LandingEmailAdProps = {
  buttonText?: string,
  desktopImageUrl: string,
  errorText?: string,
  inputId: string,
  headline: string,
  onSubmit: () => void,
  tabletImageUrl: string,
  title: string,
  success?: boolean,
  successText?: string,
}

const LandingEmailAd = ({
  desktopImageUrl,
  inputId,
  onSubmit,
  tabletImageUrl,
  title,
  buttonText = 'Sign me up',
  errorText = 'Invalid email address',
  headline = '',
  success = false,
  successText = 'Thank you! Get ready for watch and cook newsletter in your inbox.',
}: LandingEmailAdProps) => (
  <LandingEmailWrapper success={success}>
    <ImageWrapper>
      <Image
        className="landing-ad-image-desktop"
        testId="landing-ad-image-desktop"
        imageUrl={desktopImageUrl}
        imageAlt=""
      />
      <Image
        className="landing-ad-image-tablet"
        testId="landing-ad-image-tablet"
        imageUrl={tabletImageUrl}
        imageAlt=""
      />
    </ImageWrapper>
    <FormColumnWrapper success={success}>
      <FormBodyContent>
        {headline ? <ContentHeadline>{headline}</ContentHeadline> : null}
        {!success && (<ContentTitle>{title}</ContentTitle>)}
        {success
          ? (
            <NewsletterSuccess>
              <Checkmark fill={color.mint} />
              <span>{successText}</span>
            </NewsletterSuccess>
          )
          : (
            <EmailForm
              buttonText={buttonText}
              errorText={errorText}
              inputId={inputId}
              onSubmit={onSubmit}
              placeholder="Enter Your Email Address"
            />
          )}
      </FormBodyContent>
    </FormColumnWrapper>
  </LandingEmailWrapper>
);

export default LandingEmailAd;
