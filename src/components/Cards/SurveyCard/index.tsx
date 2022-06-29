import React, { useState } from 'react';
import styled from 'styled-components';
import styledBreakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, mixins } from '../../../styles';
import DishTypeForm from './components/DishTypeForm';
import NpsForm from './components/NpsForm';
import FeedbackForm from './components/FeedBackForm';

const SurveyCardWrapper = styled.div<{ hasSuccessMessage: boolean}>`
  background-color: ${color.white};
  color: ${color.eclipse};
  text-align: center;
  margin: auto;
  padding: 2rem;
  padding-bottom: 4.4rem;
  position: relative;
  font: ${fontSize.sm}/${lineHeight.md} ${font.pnr};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 27.2rem;

  ${props => props.hasSuccessMessage && `
    height: 27.2rem;
    padding-top: 0;
    padding-bottom: 0;

    ${styledBreakpoint('md')`
      padding-bottom: 3.3rem;
    `}

  `}

  ${styledBreakpoint('md')`
    padding: 3.3rem 3.3rem 6rem;
    width: 56rem;
    height: 27.2rem;
  `}

`;

const Title = styled.p`
  line-height: 2.36;
  letter-spacing: 2.24px;
  text-transform: uppercase;
`;

const SubTitle = styled.p`
  font: 2.6rem/1.27 ${font.pnb};
  margin: 1rem auto;
  max-width: 49rem;
`;

export const SubmitButton = styled.button`
  position: absolute;
  bottom: -3.2rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;

  &:focus {
    ${mixins.focusIndicator('#3d3d3d', '2px')}
  }

  ${styledBreakpoint('smmd')`
    bottom: -3.7rem;
  `}

  &:hover {
    span svg {
      background-color: ${color.darkerMint};
      path, g, line {
        stroke: ${color.white};
      }
    }
  }

  span svg {
    width: 40px;
    height: 40px;
    padding: 11px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    border-radius: 40px;
    background-color: ${color.white};
    font-size: 16px;
  }

  .submit-text {
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1.6px;
  }
`;

const ErrorMessage = styled.p`
  font-size: ${fontSize.md};
  color: ${color.salsaMexicana};
  line-height: 2.06;
  position: absolute;
  bottom: 2rem;
  left: auto;
  right: auto;
`;

const SuccessMessage = styled.p`
  font: 2.6rem/1.27 ${font.pnb};
  max-width: 434px;
  margin: 1rem auto;
`;

type SurveyCardProps = {
  subTitle: string,
  title: string,
  surveyType: string,
  handleSubmit: (surveyResponse: string | string[]) => void,
}

type FormTypeProps = {
  surveyType: string,
  handleSubmit: (surveyResponse: string | string[]) => void,
}

const FormEl = ({ surveyType, handleSubmit }: FormTypeProps) => {
  let El = null;
  switch (surveyType) {
    case 'onboardingtags':
      El = <DishTypeForm handleSubmit={handleSubmit} />;
      break;
    case 'nps':
      El = <NpsForm handleSubmit={handleSubmit} />;
      break;
    case 'feedback':
      El = <FeedbackForm handleSubmit={handleSubmit} />;
      break;
    default:
      El = <NpsForm handleSubmit={handleSubmit} />;
  }
  return El;
};

const SurveyCard = ({
  title,
  subTitle,
  handleSubmit,
  surveyType,
}: SurveyCardProps) => {
  const message = {
    success: 'Thank you! Your feedback helps us better serve members like you.',
    error: 'Please make a selection.',
  };
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleResponseSubmit = (surveyResponse: string | string[]) => {
    if (surveyResponse.length > 0) {
      handleSubmit(surveyResponse);
      setSuccessMessage(true);
      setErrorMessage(false);
      return;
    }

    setErrorMessage(true);
  };

  return (
    <SurveyCardWrapper hasSuccessMessage={successMessage}>
      <Title data-testid="survey-title">{title}</Title>
      {!successMessage && (
        <>
          <SubTitle data-testid="survey-subtitle">{subTitle}</SubTitle>
          <FormEl surveyType={surveyType} handleSubmit={handleResponseSubmit} />
        </>
      )}
      {successMessage && <SuccessMessage>{message.success}</SuccessMessage>}
      {errorMessage ? (<ErrorMessage>{message.error}</ErrorMessage>) : null}
    </SurveyCardWrapper>
  );
};

export default SurveyCard;
