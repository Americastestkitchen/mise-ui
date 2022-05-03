import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, fontSize } from '../../../..';
import { dishTypeData } from '../data';
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
  display: inline-flex;
  cursor: pointer;

  input {
    display: none;
  }

  input:checked + span {
    background-color: ${color.darkTeal};
    color: white;
  }

  span {
    padding: 7px 12px 5px 10px;
    border-radius: 1.5rem;
    font-size: ${fontSize.sm};
    text-transform: uppercase;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    margin: 0 8px 0 0;
  }
`;

const DishTypeForm = ({ handleSubmit }) => {
  const [dishTypeResponse, setDishTypeResponse] = useState([]);

  const handleOnChange = (e) => {
    if (dishTypeResponse.includes(e.target.value)) {
      setDishTypeResponse(prevState => prevState.filter(dishType => dishType !== e.target.value));
    } else {
      setDishTypeResponse(prevState => [...prevState, e.target.value]);
    }
  };

  const handleDishTypeSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit(dishTypeResponse);
  };

  return (
    <SurveyForm
      onSubmit={e => handleDishTypeSubmit(e)}
      data-testid="survey-form"
    >
      {dishTypeData.map(slug => (
        <SurveyCardOption
          key={slug}
          htmlFor={slug}
        >
          <input
            type="checkbox"
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
        Submit
      </SubmitButton>
    </SurveyForm>
  );
};

DishTypeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default DishTypeForm;
