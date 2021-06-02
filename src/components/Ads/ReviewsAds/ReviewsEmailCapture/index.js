import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
  color,
  font,
  fontSize,
  lineHeight,
  spacing,
} from '../../../../styles';

import Checkmark from '../../../DesignTokens/Icon/svgs/Checkmark2';
import EmailForm from '../../../Forms/EmailForm';

const AdDescription = styled.p`
  color: ${color.eclipse};
  font: ${fontSize.md}/2.1rem ${font.mwr};
  letter-spacing: normal;
  margin-bottom: ${spacing.sm};

  ${breakpoint('md')`
    font: ${fontSize.md}/2.6rem ${font.mwr};
    min-width: 35rem;
  `}
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

const AdTitle = styled.h2`
  color: ${color.eclipse};
  font: ${fontSize.xl}/2.6rem ${font.pnb};
  letter-spacing: normal;
  margin-bottom: 1rem;

  ${breakpoint('md')`
    margin-bottom: ${spacing.xxsm};
  `}
`;

const AdWrapper = styled.div`
  background-color: ${color.frost};
  display: flex;
  flex-direction: column;
  margin: 3.6rem -${spacing.sm} 0;
  padding: ${spacing.md} ${spacing.sm} 2.2rem;
  text-align: left;
  width: calc(100% + ${spacing.lg});

  .email-form {
    display: flex;
    justify-content: center;

    .form-input input {
      background-color: ${color.white};

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
    color: ${color.eclipse};
    left: 0;
    padding: 0;
    position: absolute;

    ${breakpoint('md')`
      margin-top: 0.3rem;
    `}
  }

  .email-form button {
    background-color: ${color.coldPool};

    &:hover {
      background-color: ${color.darkColdPool};
    }

    ${breakpoint('md')`
      margin-top: 1rem;
    `}
  }

  ${breakpoint('md')`
    ${({ success }) => (success
    ? 'flex-direction: column; align-items: flex-start;'
    : 'flex-direction: row; justify-content: space-between;')}
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

  ${breakpoint('xlg')`
    margin: 4.4rem 0 0;
    padding: 3.4rem 5.3rem;
    width: 84.8rem;
`}
`;

const MainContent = styled.div`
  width: 100%;

  ${breakpoint('md')`
    margin-right: 1.65rem;
    max-width: 34rem;
  `}
`;

const ReviewsEmailCapture = ({
  description,
  onSubmit,
  success,
  successText,
  title,
  ...emailFormProps
}) => (
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
          {...emailFormProps}
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

ReviewsEmailCapture.defaultProps = {
  success: false,
  successText: 'Thank you! Get ready for watch and cook newsletter in your inbox.',
  ...EmailForm.defaultProps,
};

export default ReviewsEmailCapture;
