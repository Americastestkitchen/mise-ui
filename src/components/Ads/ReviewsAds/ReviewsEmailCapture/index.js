import PropTypes from 'prop-types';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

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
import { cssThemedColor } from '../../../../styles/mixins';
import { lg, md, xlg } from '../../../../styles/breakpoints';

const variantTheme = variant => theme => (variant ? ({ ...theme, [variant]: true }) : theme);

const kidsVariant = interp => css`${({ theme }) => theme.kidsVariant && interp}`;

const cssThemedBackground = withThemes({
  atk: css`background-color: ${color.frost};`,
  cco: css`background-color: ${color.aliceBlue};`,
  cio: css`background-color: ${color.ivory};`,
});

const cssThemedBorder = withThemes({
  atk: css`border: solid 1px #D8D8D8;`,
  cco: css`border: solid 1px #E5E5E5;`,
  cio: css`border: solid 1px #858585;`,
});

const cssThemedButtonBackground = withThemes({
  atk: css`
    background-color: ${color.coldPool};
    &:hover {
      background-color: ${color.darkColdPool};
    }
  `,
  cco: css`
    background-color: ${color.denim};
    &:hover {
      background-color: ${color.arapawa};
    }
  `,
  cio: css`
    background-color: ${color.squirrel};
    &:hover {
      background-color: ${color.cork};
    }
  `,
});

const AdDescription = styled.p`
  font: ${fontSize.md}/2.1rem ${font.mwr};
  letter-spacing: normal;
  margin-bottom: ${spacing.sm};
  ${md(css`
    font: ${fontSize.md}/2.6rem ${font.mwr};
    min-width: 35rem;
  `)}
  ${lg(css`
    min-width: 34rem;
  `)}
  ${xlg(css`
    min-width: 35rem;
  `)}
  ${cssThemedColor}
  ${kidsVariant(css`
    font: ${fontSize.md}/2.6rem ${font.pnr} !important;
  `)}
`;

const AdSuccess = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  ${cssThemedColor}
  svg {
    display: inline-block;
    height: 1.4rem;
    margin-right: ${spacing.xxsm};
    margin-top: 0.5rem;
    width: 7.1rem;

    ${md(css`
      margin-right: ${spacing.xsm};
      width: 2.1rem;
    `)}  
  }
  span {
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  }
  .success-svg-wrapper{
    max-width: 10%;
  }
`;

const AdTitle = styled.h2`
  font: ${fontSize.xl}/2.6rem ${font.pnb};
  letter-spacing: normal;
  margin-bottom: 1rem;
  ${cssThemedColor}
  ${kidsVariant(css`
    font: ${fontSize.xl}/2.6rem ${font.gdn} !important;
  `)}
  ${md(css`
    margin-bottom: ${spacing.xxsm};
  `)}
  ${lg(css`
    max-width: 32rem;
  `)}
  ${xlg(css`
    max-width: none;
  `)}
`;

const AdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.6rem -${spacing.sm} 0;
  padding: ${spacing.md} ${spacing.sm} 2.2rem;
  text-align: left;
  width: calc(100% + ${spacing.lg});

  @media print {
    display: none;
  }

  .email-form {
    display: flex;
    justify-content: center;

    .form-input input {
      background-color: ${color.white};
      border: none;
      ${cssThemedBorder}
      ${cssThemedColor}

      &::placeholder {
        font: ${fontSize.md}/2.6rem ${font.pnr};
        ${cssThemedColor}
      }
    }

    button {
      display: flex;
      justify-content: center;
      letter-spacing: 1.6px;
      background-color: ${color.coldPool};
      ${kidsVariant(css`
        background-color: ${color.frog} !important;
        &:hover {
          background-color: ${color.darkFrog} !important;
        }
      `)}
      ${md(css`
        margin-top: 1rem;
      `)}

      span {
        font-size: 3.1rem;
        margin: 0.15rem 0 0 0.8rem;
      }
    }
  }

  .email-form__how-we-use-text {
    top: 2rem;
  }

  .email-form__how {
    left: 0;
    padding: 0;
    position: absolute;
    ${cssThemedColor}

    ${md(css`
      margin-top: 0.3rem;
    `)}
  }

  ${md(css`
    margin: ${spacing.xlg} -3.6rem 0;
    max-height: 17.7rem;
    padding: 3.5rem 3.65rem 3.45rem 3.6rem;
    width: calc(100% + ${spacing.xxxlg});

    .email-form {
      flex-direction: column;
      min-width: 34rem;
    }

    .email-form__how-we-use-text {
      left: 0;
      top: 2.5rem;
    }
  `)}

  ${lg(css`
    margin: ${spacing.xlg} 0 0;
    min-width: 66.7rem;
    padding: 2.5rem 3.65rem 3.45rem 3rem;
    width: 100%;

    .email-form {
      margin-top: 1.5rem;
      min-width: 27rem;
    }

  `)}

  ${xlg(css`
    margin: 4.4rem 0 0;
    padding: 3.4rem 5.3rem;
    width: 84.8rem;
    ${({ isWide }) => (isWide ? `
      max-width: 100%;
      width: 100%;
    ` : '')}

    .email-form-wrapper {
      ${({ isWide }) => (isWide ? `
        max-width: calc(50% - 3rem);
        width: calc(50% - 3rem);
      ` : '')}
    }

    .email-form {
      margin-top: 0;
      min-width: 34rem;

      ${({ isWide }) => (isWide ? `
        flex-direction: row;
        justify-content: flex-start;
        button {
          margin-top: 0;
          max-width: 21.8rem;
        }
      ` : '')}
    }
  `)}

  ${cssThemedBackground}
`;

const MainContent = styled.div`
  width: 100%;

  ${md(css`
    margin-right: 1.65rem;
    max-width: 34rem;
  `)}
  ${lg(css`
    margin-right: 0;
  `)}
  ${xlg(css`
    margin-right: 1.65rem;

    ${({ isWide }) => (isWide ? `
      margin-right: 0;
      max-width: calc(50% - 3rem);
      width: calc(50% - 3rem);
      p {
        margin-bottom: 0;
      }
    ` : '')}
  `)}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${md(css`
    ${({ success }) => (success ? css`
      flex-direction: column; align-items: flex-start;
    ` : css`
      align-items: center; flex-direction: row; justify-content: space-between;
    `)}
  `)}

  ${xlg(css`
    ${({ isWide }) => (isWide ? 'margin: 0 auto; max-width: 113.6rem;' : '')}
  `)}
`;

const ReviewsEmailCapture = ({
  isWide,
  variant,
  description,
  onSubmit,
  success,
  successText,
  title,
  ...emailFormProps
}) => (
  <ThemeProvider theme={variantTheme(variant)}>
    <AdWrapper success={success} isWide={isWide}>
      <ContentWrapper success={success} isWide={isWide}>
        <MainContent isWide={isWide}>
          <AdTitle>{title}</AdTitle>
          {!success && (
          <AdDescription>{description}</AdDescription>
          )}
        </MainContent>
        {success
          ? (
            <AdSuccess>
              <div className="success-svg-wrapper">
                <Checkmark fill={color.mint} />
              </div>
              <span>{successText}</span>
            </AdSuccess>
          )
          : (
            <EmailForm
              {...emailFormProps}
              optionalIcon="‣"
              onSubmit={onSubmit}
              howWeUseText="How we use your email"
            />
          )}
      </ContentWrapper>
    </AdWrapper>
  </ThemeProvider>
);

ReviewsEmailCapture.propTypes = {
  variant: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  isWide: PropTypes.bool,
  inputLabel: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  success: PropTypes.bool,
  successText: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ReviewsEmailCapture.defaultProps = {
  isWide: false,
  variant: null,
  success: false,
  successText: 'Thank you! Get ready for Well-Equipped Cook in your inbox on Wednesdays!',
  ...EmailForm.defaultProps,
};

export default ReviewsEmailCapture;
