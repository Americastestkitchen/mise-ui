import React from 'react';
import styled, { css } from 'styled-components';

import { md, lg, xlg } from '../../../styles/breakpoints';
import { color, font, fontSize, lineHeight, mixins, spacing, withThemes } from '../../../styles';
import Checkmark from '../../DesignTokens/Icon/svgs/Checkmark2';
import EmailForm, { EmailFormProps } from '../../Forms/EmailForm/EmailForm';

const NewsletterTitleTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.sm};

    ${lg(css`
      margin-bottom: 0;
    `)}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const NewsletterTitle = styled.h2.attrs({
  className: 'inline-newsletter__title',
})`${withThemes(NewsletterTitleTheme)}`;

const NewsletterInfoWrapper = styled.div.attrs({
  className: 'inline-newsletter__info',
})``;

const NewsletterSubtitleTheme = {
  default: css`
    font: ${fontSize.sm}/${lineHeight.sm} ${font.pnr};
    letter-spacing: 2.24px;
    margin-bottom: ${spacing.xsm};
    text-transform: uppercase;

    ${xlg(css`
      font: ${fontSize.md}/1.6rem ${font.pnr};
      letter-spacing: 2.56px;
    `)}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const NewsletterSubtitle = styled.div.attrs({
  className: 'inline-newsletter__subtitle',
})`${withThemes(NewsletterSubtitleTheme)}`;

const NewsletterSuccessTheme = {
  default: css`
    color: ${color.eclipse};
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin: 0 0 ${spacing.sm} ${spacing.xsm};

    svg {
      display: inline-block;
      height: 1.4rem;
      margin-right: ${spacing.xsm};
      width: 2.1rem;
    }
  `,
  dark: css`
    color: ${color.white};
  `,
};

const NewsletterSuccess = styled.div.attrs({
  className: 'inline-newsletter__success',
})`${withThemes(NewsletterSuccessTheme)}`;

const InlineNewsletterContent = styled.div<{success: boolean}>`
  ${({ success }) => md(css`
    align-items: ${success ? 'flex-start' : 'center'};
  `)}
  ${md(css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .email-form-wrapper {
      width: 100%;
    }

    button:focus {
      ${mixins.focusIndicator(color.white, '-4px')}
    }

    .how-we-use__link {
      margin-top: 0.8rem;
      padding: 0;

      &:focus {
        ${mixins.focusIndicator(color.eclipse, '2px')}
      }
    }
  `)}

  ${({ success }) => lg(css`
    ${success ? 'flex-direction: column;' : 'align-items: center;'}
  `)}

  ${lg(css`
    display: flex;
    justify-content: space-between;

    .inline-newsletter__success,
    .email-form-wrapper {
      flex: 3 0 auto;
      max-width: 69.6rem;
    }

    .inline-newsletter__info {
      flex: 4 1 auto;
      margin-bottom: 1rem;
    }
  `)}

  ${({ success }) => xlg(css`${success
    ? `flex-direction: column; align-iems: flex-start; color: ${color.eclipse}`
    : 'flex-direction: row;'}
  `)}

  ${xlg(css`
    margin: 0 auto;
    max-width: 113.6rem;

    .inline-newsletter__info {
      flex: 4 1 auto;
      margin-right: 2.6rem;
    }

    .inline-newsletter__success {
      max-width: 100%;
    }
  
    .email-form-wrapper {
      max-width: 56rem;
    }
  `)}
`;

const InlineNewsletterWrapperTheme = {
  default: css`
    padding: ${spacing.sm} ${spacing.sm} ${spacing.md};

    ${md(css`
      padding: 1.6rem 3.6rem 0.6rem;
    `)}

    ${xlg(css`
      padding: ${spacing.sm};
    `)}
  `,
  dark: css`
    background-color: ${color.asphalt};
  `,
};

const InlineNewsletterWrapper = styled.div.attrs({
  className: 'inline-newsletter',
})`${withThemes(InlineNewsletterWrapperTheme)}`;

export interface InlineNewsletterProps extends EmailFormProps {
  success?: boolean;
  successText?: string;
  subtitle: string;
  title: string;
}

const InlineNewsletter = ({
  buttonColor = 'frog',
  buttonTextColor = 'white',
  buttonText = 'Sign me up',
  errorText = 'Invalid email address',
  inputLabel = 'Email address',
  inputId,
  onSubmit,
  placeholder = 'Enter your email address',
  success = false,
  successText = 'Thank you! Get ready for Well-Equipped Cook in your inbox on Wednesdays!',
  subtitle,
  title,
}: InlineNewsletterProps) => (
  <InlineNewsletterWrapper>
    <InlineNewsletterContent success={success}>
      <NewsletterInfoWrapper>
        <NewsletterSubtitle>
          {subtitle}
        </NewsletterSubtitle>
        {!success && (
          <NewsletterTitle>
            {title}
          </NewsletterTitle>
        )}
      </NewsletterInfoWrapper>
      {success
        ? (
          <NewsletterSuccess>
            <Checkmark fill={color.mint} />
            <span>{successText}</span>
          </NewsletterSuccess>
        ) : (
          <EmailForm
            buttonColor={buttonColor}
            buttonTextColor={buttonTextColor}
            buttonText={buttonText}
            errorText={errorText}
            inputLabel={inputLabel}
            inputId={inputId}
            onSubmit={onSubmit}
            placeholder={placeholder}
          />
        )}
    </InlineNewsletterContent>
  </InlineNewsletterWrapper>
);

export default InlineNewsletter;
