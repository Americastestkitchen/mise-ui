import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import {
  color,
  font,
  fontSize,
  withThemes,
} from '../../../../styles';

import EmailForm from '../../../Forms/EmailForm';
import Image from '../../../Cards/shared/Image';

const LandingEmailTheme = {
  default: css`
    display: flex;
    margin: 0 auto;
    width: 34rem;

    ${breakpoint('xlg')`
      height: 33rem;
      width: 113.6rem;
    `}

    .email-form button {
      background-color: ${color.coldPool};

      &:hover {
        background-color: ${color.coldPool};
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
  width: 50%;

  .landing-ad-image {
    height: 100%;
    width: 100%;
  }
`;

const FormColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const FormBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;

  ${breakpoint('xlg')`
    width: 34.4rem;
  `}

  .email-form {
    flex-direction: column;

    & div {
      margin: 1.6rem 0 0.8rem;
    }
  }

  .email-form-wrapper div {
    justify-content: flex-start;
  }
`;

const ContentHeadlineTheme = {
  default: css`
    color: ${color.eclipse};
    font: ${fontSize.md}/1.6rem ${font.pnr};
    letter-spacing: 0.25rem;
    margin-bottom: 0.9rem;
    text-transform: uppercase;
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
    width: 34.4rem;
  `,
  dark: css`
    color: ${color.white};
    width: 30rem;
  `,
};

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
  title,
}) => (
  <LandingEmailWrapper>
    <ImageWrapper data-testid="adImage">
      <Image className="landing-ad-image" imageUrl={imageUrl} />
    </ImageWrapper>
    <FormColumnWrapper>
      <FormBodyContent>
        {headline ? <ContentHeadline>{headline}</ContentHeadline> : null}
        <ContentTitle>{title}</ContentTitle>
        <EmailForm
          buttonText={buttonText}
          errorText={errorText}
          inputId={inputId}
          onSubmit={onSubmit}
          placeholder="Enter Your Email Address"
        />
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
};

LandingEmailAd.defaultProps = {
  buttonText: 'Sign me up',
  errorText: 'Invalid email address',
  headline: '',
};

export default LandingEmailAd;
