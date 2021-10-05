import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';
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

const AdDescriptionTheme = {
  default: css`
    font: ${fontSize.md}/2.1rem ${font.mwr};
    letter-spacing: normal;
    margin-bottom: ${spacing.sm};

    ${breakpoint('md')`
      font: ${fontSize.md}/2.6rem ${font.mwr};
      min-width: 35rem;
    `}

    ${breakpoint('lg')`
      min-width: 34rem;
    `}

    ${breakpoint('xlg')`
      min-width: 35rem;
    `}
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const AdDescription = styled.p`
  ${withThemes(AdDescriptionTheme)}
`;

const AdSuccess = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;

  svg {
    display: inline-block;
    height: 1.4rem;
    margin-right: ${spacing.xxsm};
    margin-top: 0.5rem;
    width: 7.1rem;

    ${breakpoint('md')`
      margin-right: ${spacing.xsm};
      width: 2.1rem;
    `}  
  }

  span {
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  }
`;

const AdTitleTheme = {
  default: css`
    font: ${fontSize.xl}/2.6rem ${font.pnb};
    letter-spacing: normal;
    margin-bottom: 1rem;

    ${breakpoint('md')`
      margin-bottom: ${spacing.xxsm};
    `}

    ${breakpoint('lg')`
      max-width: 32rem;
    `}

    ${breakpoint('xlg')`
      max-width: none;
    `}
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const AdTitle = styled.h2`
  ${withThemes(AdTitleTheme)}
`;

const AdWrapperTheme = {
  default: css`
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
  
        &::placeholder {
          font: ${fontSize.md}/2.6rem ${font.pnr};
        }
      }
  
      button {
        display: flex;
        justify-content: center;
        letter-spacing: 1.6px;
  
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
  
      ${breakpoint('md')`
        margin-top: 0.3rem;
      `}
    }
  
    .email-form button {
      ${breakpoint('md')`
        margin-top: 1rem;
      `}
    }
  
    ${breakpoint('md')`
      ${({ success }) => (success ? 'flex-direction: column; align-items: flex-start;' : 'flex-direction: row; justify-content: space-between;')}
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
    `}
  
    ${breakpoint('lg')`
      margin: ${spacing.xlg} 0 0;
      min-width: 66.7rem;
      padding: 2.5rem 3.65rem 3.45rem 3rem;
      width: 100%;
  
      .email-form {
        margin-top: 1.5rem;
        min-width: 27rem;
      }
  
    `}
  
    ${breakpoint('xlg')`
      margin: 4.4rem 0 0;
      padding: 3.4rem 5.3rem;
      width: 84.8rem;
  
      .email-form {
        margin-top: 0;
        min-width: 34rem;
      }
    `}
  `,
  atk: css`
    background-color: ${color.frost};

    .email-form {
      .form-input input {
        border: solid 1px #D8D8D8;
        color: ${color.eclipse};

        &::placeholder {
          ${color.eclipse};
        }
      }
    }

    .email-form__how {
      color: ${color.eclipse};
    }

    .email-form button {
      background-color: ${color.coldPool};
  
      &:hover {
        background-color: ${color.darkColdPool};
      }
    }
  `,
  cco: css`
    background-color: ${color.aliceBlue};

    .email-form {
      .form-input input {
        border: solid 1px #E5E5E5;
        color: ${color.black};

        &::placeholder {
          ${color.black};
        }
      }
    }

    .email-form__how {
      color: ${color.black};
    }

    .email-form button {
      background-color: ${color.denim};
  
      &:hover {
        background-color: ${color.arapawa};
      }
    }
  `,
  cio: css`
    background-color: ${color.ivory};

    .email-form {
      .form-input input {
        border: solid 1px #858585;
        color: ${color.cork};

        &::placeholder {
          ${color.cork};
        }
      }
    }

    .email-form__how {
      color: ${color.cork};
    }

    .email-form button {
      background-color: ${color.squirrel};
  
      &:hover {
        background-color: ${color.cork};
      }
    }
  `,
};

const AdWrapper = styled.div<{success: boolean | null | undefined}>`
  ${withThemes(AdWrapperTheme)}
`;

const MainContent = styled.div`
  width: 100%;

  ${breakpoint('md')`
    margin-right: 1.65rem;
    max-width: 34rem;
  `}

  ${breakpoint('lg')`
    margin-right: 0;
  `}

  ${breakpoint('xlg')`
    margin-right: 1.65rem;
  `}
`;

const ReviewsEmailCaptureDefaults = {
  success: false,
  successText: 'Thank you! Get ready for Well-Equipped Cook in your inbox on Wednesdays!',
};

type ReviewsEmailCaptureProps = {
  buttonTextColor?: string;
  buttonText?: string;
  description: string;
  errorText?: string;
  inputLabel?: string;
  inputId: string;
  onSubmit: (email: string) => void;
  placeholder?: string;
  success?: boolean;
  successText?: string;
  title: string;
};

const ReviewsEmailCapture = ({
  description,
  onSubmit,
  success = ReviewsEmailCaptureDefaults.success,
  successText = ReviewsEmailCaptureDefaults.successText,
  title,
  ...restProps
}: ReviewsEmailCaptureProps): ReactElement => (
  <AdWrapper success={success}>
    <MainContent>
      <AdTitle>{title}</AdTitle>
      {!success && (
        <AdDescription>{description}</AdDescription>
      )}
    </MainContent>
    {success
      ? (
        <AdSuccess>
          <Checkmark fill={color.mint} />
          <span>{successText}</span>
        </AdSuccess>
      )
      : (
        <EmailForm
          {...restProps}
          optionalIcon="‣"
          onSubmit={onSubmit}
          howWeUseText="How we use your email"
        />
      )}
  </AdWrapper>
);

ReviewsEmailCapture.propTypes = {
  buttonTextColor: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  inputLabel: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  success: PropTypes.bool,
  successText: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ReviewsEmailCapture;
