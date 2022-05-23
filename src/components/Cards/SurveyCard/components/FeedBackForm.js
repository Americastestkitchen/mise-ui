import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color } from '../../../..';
import { SubmitButton } from '..';
import Checkmark from '../../../DesignTokens/Icon/svgs/Checkmark2';
import { Close } from '../../../DesignTokens/Icon';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -4.7rem;
  left: 50%;
  transform: translate(-50%, 0);

  button {
    position: relative;
    margin-left: 2rem;
    left: auto;
    bottom: auto;
  }

  .text {
    font-size: 1rem;
    line-height: 2.6;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }
`;

const FeedbackForm = ({ handleSubmit }) => (
  <ButtonWrapper>
    <SubmitButton onClick={() => handleSubmit('No')} className="survey-buttons">
      <span className="close"><Close fill={color.eclipse} /></span>
      <span className="text">No</span>
    </SubmitButton>
    <SubmitButton onClick={() => handleSubmit('Yes')} className="survey-buttons">
      <span className="checkmark"><Checkmark fill={color.eclipse} /></span>
      <span className="text">Yes</span>
    </SubmitButton>
  </ButtonWrapper>
);

FeedbackForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default FeedbackForm;
