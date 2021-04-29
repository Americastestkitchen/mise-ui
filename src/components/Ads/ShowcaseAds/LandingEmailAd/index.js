import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import {
  color,
  font,
  fontSize,
  lineHeight,
  spacing,
  withThemes,
} from '../../../../styles';

import Checkmark from '../../../DesignTokens/Icon/svgs/Checkmark2';
import EmailForm from '../../../Forms/EmailForm';
import Image from '../../../Cards/shared/Image';

const LandingEmailTheme = {
  default: css`
    align-items: center;
    background-color: ${color.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    ${({ success }) => (success ? 'height: 34rem' : 'min-height: 46rem;')}
    width: calc(100% - 3.2rem);

    ${breakpoint('md')`
      flex-direction: row;
      min-height: 33rem;
      width: calc(100% - 7.2rem);
    `}

    ${breakpoint('lg')`
      width: calc(100% - 3.2rem);
    `}

    ${breakpoint('xlg')`
      height: 33rem; 
      width: 113.6rem;
    `}

    .email-form button {
      background-color: ${color.coldPool};
      width: 100%;

      ${breakpoint('xlg')`
        max-width: 35rem;
      `}

      &:hover {
        background-color: ${color.darkColdPool};
      }
    }

    .how-we-use__link {
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

const LandingEmailWrapper = styled.div.attrs({
  className: 'landing-email-ad-wrapper',
})`${withThemes(LandingEmailTheme)}`;

const ImageWrapper = styled.div`
  background-size: cover;    
  margin-bottom: 1rem;
  width: 100%;

  ${breakpoint('md')`
    margin-bottom: 0;
    max-height: 33rem;
    overflow: hidden;
    width: 50%;
  `}

  .landing-ad-image {
    height: 100%;
    width: 100%;

    ${breakpoint('md')`
      min-height: 32.9rem;
    `}
  }
`;

const FormColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ success }) => (success ? '10%' : '0')};

  ${breakpoint('md')`
    width: 50%;
  `} 
`;

const FormBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  width: 30rem;

  ${breakpoint('xlg')`
    margin-bottom: 0;
    width: 34.4rem;
  `}

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
    border: 1px solid ${color.black};

    &::placeholder {
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

    ${breakpoint('xlg')`
      font: ${fontSize.md}/1.6rem ${font.pnr};
    `}
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

    ${breakpoint('sm')`
      width: 31rem;
    `}  

    ${breakpoint('xlg')`
      width: 34.4rem;
    `}
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

    ${breakpoint('xlg')`
      width: 85%;
    `}
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

const LandingEmailAd = ({
  buttonText,
  errorText,
  headline,
  imageUrl,
  inputId,
  onSubmit,
  success,
  successText,
  title,
}) => (
  <LandingEmailWrapper success={success}>
    <ImageWrapper data-testid="adImage">
      <Image className="landing-ad-image" imageUrl={imageUrl} />
    </ImageWrapper>
    <FormColumnWrapper success={success}>
      <FormBodyContent success={success}>
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

LandingEmailAd.propTypes = {
  buttonText: PropTypes.string,
  errorText: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  headline: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  success: PropTypes.bool,
  successText: PropTypes.string,
};

LandingEmailAd.defaultProps = {
  buttonText: 'Sign me up',
  errorText: 'Invalid email address',
  headline: '',
  success: false,
  successText: 'Thank you! Get ready for watch and cook newsletter in your inbox.',
};

export default LandingEmailAd;
