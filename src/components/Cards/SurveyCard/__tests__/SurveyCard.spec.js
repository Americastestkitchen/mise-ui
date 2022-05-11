import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import SurveyCard from '..';

const surveyProps = {
  title: 'Tell us about you',
  subTitle: 'What kind of recipes you want to see more of?',
  surveyType: 'onboardingtags',
  handleSubmit: () => {},
};

describe('SurveyCard component', () => {
  const renderComponent = props => render(<SurveyCard {...props} />);

  it('does renders a Title', () => {
    renderComponent(surveyProps);
    expect(screen.getByTestId('survey-title'));
  });

  it('does render a Subtitle', () => {
    renderComponent(surveyProps);
    expect(screen.getByTestId('survey-subtitle'));
  });

  it('does renders a Form', () => {
    renderComponent(surveyProps);
    expect(screen.getByTestId('survey-form'));
  });

  it('does renders a Submit button', () => {
    renderComponent(surveyProps);
    expect(screen.getByTestId('surveySubmit-button'));
  });
});
