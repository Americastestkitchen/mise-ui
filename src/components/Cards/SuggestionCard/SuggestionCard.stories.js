import React from 'react';
import styled from 'styled-components';

import SuggestionCard from './index';
import { siteKey } from '../../../config/argTypes';

const SuggestionContainer = styled.div`
  max-width: 82rem;
`;

const SuggestionCardWrapper = (Story) => (
  <SuggestionContainer>
    <Story />
  </SuggestionContainer>
);

export default {
  title: 'Components/Cards/SuggestionCard',
  component: SuggestionCard,
  decorators: [ SuggestionCardWrapper ],
  argTypes: { siteKey },
};

const Template = (args) => <SuggestionCard {...args} />;

export const DefaultSuggestion = Template.bind({});
DefaultSuggestion.args = {
  description: 'More flavorful and less prone to overcooking than lean breasts, chicken thighs are a perfect weeknight dinner.',
  href: '/recipes/6832',
  imageAlt: '',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_fill,dpr_2.0,f_auto,fl_lossy,g_faces:auto,w_300,q_auto:low/9704_sfs-easy-roast-chicken-thighs-clr-8-article',
  objectId: 'recipe_8125',
  siteKey: 'atk',
  subtitle: 'Serves 6 to 8   Takes 55 minutes',
  title: 'Oven-Roasted Chicken Thighs',
};
