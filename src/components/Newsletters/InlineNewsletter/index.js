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
} from '../../../styles';

import Checkmark from '../../DesignTokens/Icon/svgs/Checkmark2';
import EmailForm from '../../Forms/EmailForm';

const NewsletterTitleTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.sm};

    ${breakpoint('lg')`
      margin-bottom: 0;
    `}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const NewsletterInfoWrapper = styled.div.attrs({
  className: 'inline-newsletter__info',
})``;

const NewsletterTitle = styled.div.attrs({
  className: 'inline-newsletter__title',
})`${withThemes(NewsletterTitleTheme)}`;

const NewsletterSubtitleTheme = {
  default: css`
    font: ${fontSize.sm}/${lineHeight.sm} ${font.pnr};
    letter-spacing: 2.24px;
    margin-bottom: ${spacing.xsm};
    text-transform: uppercase;
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

const InlineNewsletterContent = styled.div`
  ${breakpoint('md')`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .inline-newsletter__info {
      max-width: 69.6rem;
    }

    .email-form-wrapper {
      min-width: 69.6rem;
    }
  `}

  ${breakpoint('lg')`
    display: flex;
    justify-content: space-between;
    ${({ success }) => `${success
    ? 'flex-direction: column;'
    : 'align-items: center;'}
    `}

    .inline-newsletter__success,
    .email-form-wrapper {
      flex: 3 0 auto;
      min-width: 69.6rem;
    }

    .inline-newsletter__info {
      flex: 4 1 auto;
      margin-bottom: 1rem;
    }
  `}

  ${breakpoint('xlg')`
    flex-direction: row;
    margin: 0 auto;
    max-width: 113.6rem;

    .inline-newsletter__info {
      flex: 4 1 auto;
      margin-right: 2.6rem;
    }

    .inline-newsletter__success,
    .email-form-wrapper {
      min-width: 56rem;
    }
  `}
`;

const InlineNewsletterWrapperTheme = {
  default: css`
    padding: ${spacing.sm} ${spacing.sm} ${spacing.md};

    ${breakpoint('md')`
      padding: 1.6rem 3.6rem 0.6rem;
    `}

    ${breakpoint('xlg')`
      padding: ${spacing.sm};
    `}
  `,
  dark: css`
    background-color: ${color.asphalt};
  `,
};

const InlineNewsletterWrapper = styled.div.attrs({
  className: 'inline-newsletter',
})`${withThemes(InlineNewsletterWrapperTheme)}`;

const InlineNewsletter = ({
  onSubmit,
  success,
  successText,
  subtitle,
  title,
  ...emailFormProps
}) => (
  <InlineNewsletterWrapper>
    <InlineNewsletterContent
      success={success}
    >
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
        )
        : (
          <EmailForm
            onSubmit={onSubmit}
            {...emailFormProps}
          />
        )}
    </InlineNewsletterContent>
  </InlineNewsletterWrapper>
);

InlineNewsletter.propTypes = {
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonText: PropTypes.string,
  errorText: PropTypes.string,
  inputLabel: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  success: PropTypes.bool,
  successText: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

InlineNewsletter.defaultProps = {
  ...EmailForm.defaultProps,
  success: false,
  successText: 'Thank you! You have been added to our mailing list.',
  successDescription: null,
};

export default InlineNewsletter;
