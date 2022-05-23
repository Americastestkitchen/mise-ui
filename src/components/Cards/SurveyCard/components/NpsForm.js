import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styledBreakpoint from 'styled-components-breakpoint';

import { color, fontSize } from '../../../..';
import { npsData } from '../data';
import { SubmitButton } from '..';
import Checkmark from '../../../DesignTokens/Icon/svgs/Checkmark2';

const SurveyForm = styled.form`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const SurveyCardOption = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
  max-width: 5.5rem;

  ${styledBreakpoint('md')` 
    max-width: 7rem;
    margin-right: 2rem;
  `}

  &:nth-child(5) {
    margin-right: 0;
  }

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

  &:hover input {
    background-color: ${color.whiteSmoke};
  }

  input:checked {
    background-color: ${color.darkTeal};
  }

  span {
    color: ${color.eclipse};
    font-size: 1.1rem;
    letter-spacing: 2.24px;
    text-transform: uppercase;
    
    ${styledBreakpoint('md')` 
      font-size: ${fontSize.sm};
  `}
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
    <SurveyForm onSubmit={handleNpsFormSubmit}>
      {npsData.map(slug => (
        <SurveyCardOption
          key={slug}
          htmlFor={slug}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleOnChange(e);
            }
          }}
        >
          <input
            type="checkbox"
            id={slug}
            value={slug}
            checked={npsResponse === slug}
            name="recommendationOption"
            onChange={handleOnChange}
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
