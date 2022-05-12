import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, fontSize } from '../../../..';
import { npsData } from '../data';
import { SubmitButton } from '..';
import Checkmark from '../../../DesignTokens/Icon/svgs/Checkmark2';

const SurveyForm = styled.form`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SurveyCardOption = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  margin-right: 2rem;
  margin-bottom: 1rem;

  input {
    appearance: none;
    width: 26px;
    height: 26px;
    margin-bottom: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;
    cursor: pointer;
  }

  input:checked {
    background-color: ${color.darkTeal};
  }

  span {
    color: ${color.eclipse};
    font-size: ${fontSize.sm};
    text-transform: uppercase;
  }
`;

const NpsForm = ({ handleSubmit }) => {
  const [npsResponse, setNpsResponse] = useState('');

  const handleOnChange = (evt) => {
    setNpsResponse(evt.target.value);
  };

  const handleNpsFormSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit(npsResponse);
  };

  return (
    <SurveyForm onSubmit={e => handleNpsFormSubmit(e)}>
      {npsData.map(slug => (
        <SurveyCardOption key={slug} htmlFor={slug}>
          <input
            key={slug}
            type="radio"
            id={slug}
            value={slug}
            name="recommendationOption"
            onChange={e => handleOnChange(e)}
          />
          <span>{slug}</span>
        </SurveyCardOption>
      ))}
      <SubmitButton type="submit" className="survey-buttons">
        <span className="checkmark"><Checkmark fill={color.eclipse} /></span>
        <span className="submit-text">Submit</span>
      </SubmitButton>
    </SurveyForm>
  );
};

NpsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default NpsForm;
