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
    margin-bottom: 0.3rem;
  `}
`;

const AdWrapper = styled.div`
  background-color: ${color.frost};
  display: flex;
  flex-direction: column;
  margin-top: 3.6rem;
  padding: 2.4rem 1.7rem 2.2rem;
  text-align: left;
  width: 100%;

  .email-form__how {
    color: ${color.eclipse};
    left: 0;
    padding: 0;
    position: absolute;

    ${breakpoint('md')`
      left: 0;
      margin-top: 0.3rem;
      position: absolute;
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
    margin-top: 4rem;
    max-height: 17.7rem;
    padding: 3.5rem 3.65rem 3.45rem 3.6rem;

    .email-form {
      flex-direction: column;
      min-width: 34rem;
    }
  `}

  ${breakpoint('xlg')`
    margin-top: 4.4rem;
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
