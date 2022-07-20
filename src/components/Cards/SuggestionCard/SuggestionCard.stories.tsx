import React from 'react';
import styled from 'styled-components';
import { SuggestionCard } from './SuggestionCard';

const SuggestionContainer = styled.div`
  max-width: 62rem;
`;

export default {
  title: 'Components/Cards/SuggestionCard',
  component: SuggestionCard,
};

export const SuggestionCardDefault = () => (
  <SuggestionContainer>
    <SuggestionCard
      objectId="recipe_14018"
      href="/recipes/14018-balsamic-glazed-steaks-with-orzo-salad"
      title="Balsamic-Glazed Steaks with Orzo Salad"
      subtitle="Serves 4 Takes 1 hour"
      imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/ar_3:4,c_fill,dpr_2.0,f_auto,fl_lossy,g_faces:auto,h_400,q_auto:low/SFS_BalsamicGlazedStripSteaksSummerVegetableOrzo-49_grkg7q"
      siteKey="atk"
      avgRating={4.2}
      resourceType="recipe"
      comments={82}
      numRatings={38}
      stickers={[
        { type: 'editorial', text: 'Weeknight' },
      ]}
    />
  </SuggestionContainer>
);
