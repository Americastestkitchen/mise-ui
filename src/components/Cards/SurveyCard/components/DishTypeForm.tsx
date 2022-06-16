import React, { useState } from 'react';
import styled from 'styled-components';
import styledBreakpoint from 'styled-components-breakpoint';

import { color, fontSize, mixins } from '../../../../styles';
import { dishTypeData } from '../data';
import { SubmitButton } from '..';
import Checkmark from '../../../DesignTokens/Icon/svgs/Checkmark3';

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
  margin: 0 8px 10px 0;

  &:focus {
      ${mixins.focusIndicator('#3d3d3d', '2px')}
    }

  ${styledBreakpoint('md')`
    margin-bottom: 14px;
  `}

  input {
    display: none;
  }

  &:hover span {
    background-color: ${color.whiteSmoke};
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
  }
`;

const DishTypeForm = ({
  handleSubmit,
}: { handleSubmit: (dishTypeResponse: string[]) => void}) => {
  const [dishTypeResponse, setDishTypeResponse] = useState<string[]>([]);

  const handleOnChange = (value: string) => {
    if (dishTypeResponse.includes(value)) {
      setDishTypeResponse(prevState => prevState.filter(dishType => dishType !== value));
      return;
    }

    setDishTypeResponse(prevState => [...prevState, value]);
  };

  const handleDishTypeSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleSubmit(dishTypeResponse);
  };

  return (
    <SurveyForm
      onSubmit={handleDishTypeSubmit}
      data-testid="survey-form"
    >
      {dishTypeData.map(slug => (
        <SurveyCardOption
          key={slug}
          htmlFor={slug}
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && handleOnChange(slug)}
        >
          <input
            type="checkbox"
            id={slug}
            value={slug}
            name="recommendationOption"
            checked={dishTypeResponse.includes(slug)}
            onChange={e => handleOnChange(e.target.value)}
          />
          <span>{slug}</span>
        </SurveyCardOption>
      ))}
      <SubmitButton type="submit" data-testid="surveySubmit-button" className="survey-buttons">
        <span className="checkmark"><Checkmark fill={color.eclipse} /></span>
        <span className="submit-text">Submit</span>
      </SubmitButton>
    </SurveyForm>
  );
};

export default DishTypeForm;
