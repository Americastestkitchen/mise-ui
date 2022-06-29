import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs';

import SurveyCard from '.';

export default {
  title: 'Components/Cards/SurveyCard',
  component: SurveyCard,
  decorators: [withKnobs],
};

const handleSubmit = () => {};

export const DishTypeForm = () => (
  <SurveyCard
    title="Tell us about you"
    subTitle="What kind of recipes you want to see more of?"
    handleSubmit={handleSubmit}
    surveyType="onboardingtags"
  />
);

export const NpsForm = () => (
  <SurveyCard
    title="Tell us about you"
    subTitle="How likely would you be to recommend America's Test Kitchen to a friend?"
    handleSubmit={handleSubmit}
    surveyType="nps"
  />
);

export const FeedBack = () => (
  <SurveyCard
    title="Tell us about you"
    subTitle="Was this collection helpful to you"
    handleSubmit={handleSubmit}
    surveyType="feedback"
  />
);
