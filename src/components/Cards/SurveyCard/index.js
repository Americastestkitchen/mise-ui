import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight } from '../../../styles';
import DishTypeForm from './components/DishTypeForm';
import NpsForm from './components/NpsForm';
import FeedbackForm from './components/FeedBackForm';

const SurveyCardWrapper = styled.div`
  background-color: ${color.white};
  color: ${color.eclipse};
  text-align: center;
  margin: auto;
  padding: 2rem;
  padding-bottom: 4.4rem;
  position: relative;
  font: ${fontSize.sm}/${lineHeight.md} ${font.pnr};

  ${breakpoint('smmd')`
    padding: 3.3rem;
    padding-bottom: 6.8rem;
    max-width: 56rem;
  `}
`;

const Title = styled.p`
  letter-spacing: 2.24px;
`;

const SubTitle = styled.p`
  font: ${fontSize.xl}/${lineHeight.md} ${font.pnb};
  margin: 1rem auto;
  max-width: 34rem;
`;

export const SubmitButton = styled.button`
  position: absolute;
  bottom: -3.7rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    span > svg {
      background-color: ${color.darkTeal};
      path, g {
        fill: ${color.white};
        stroke: ${color.white};
      }
    }
  }

  span > svg {
    width: 40px;
    height: 40px;
    padding: 15.3px 13.6px 15.3px 13.6px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    border-radius: 40px;
    margin-bottom: 0.5rem;
    background-color: ${color.white};

    svg {
      width: 12.9px;
      height: 9.4px;
    }
  }

`;

const ErrorMessage = styled.p`
  color: ${color.tomato};
  margin-top: 1rem;
  font-weight: bold;
`;

const SuccessMessage = styled.p`
  font: ${fontSize.xl}/${lineHeight.md} ${font.pnb};
  max-width: 390px;
  margin: 1rem auto;
`;

const FormEl = ({ surveyType, handleSubmit }) => {
  let El;
  switch (surveyType) {
    case 'onBoardingDishType':
      El = <DishTypeForm handleSubmit={handleSubmit} />;
      break;
    case 'NPS':
      El = <NpsForm handleSubmit={handleSubmit} />;
      break;
    case 'feedBack':
      El = <FeedbackForm handleSubmit={handleSubmit} />;
      break;
    default:
      El = null;
      break;
  }
  return El;
};

const SurveyCard = ({
  title,
  subTitle,
  handleSubmit,
  surveyType,
}) => {
  const [errorMesssge, setErrorMessage] = useState();
  const [successMessage, setsuccessMessage] = useState(null);

  const handleResponseSubmit = (surveyResponse) => {
    if (surveyResponse.length > 0) {
      handleSubmit(surveyResponse);
      setsuccessMessage('Thank you! Your feedback helps us better serve members like you.');
      setErrorMessage(null);
    } else {
      setErrorMessage('Please make a selection');
    }
  };

  return (
    <SurveyCardWrapper>
      {title && (<Title>{title}</Title>)}
      {subTitle && !successMessage ? (
        <SubTitle>{subTitle}</SubTitle>
      ) : null }
      {successMessage ? (
        <SuccessMessage>{successMessage}</SuccessMessage>
      ) : null}
      {!successMessage && surveyType ? (
        <FormEl surveyType={surveyType} handleSubmit={handleResponseSubmit} />
      ) : null}
      {errorMesssge ? (<ErrorMessage>{errorMesssge}</ErrorMessage>) : null}
    </SurveyCardWrapper>
  );
};

SurveyCard.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  surveyType: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SurveyCard;
