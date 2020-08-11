import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import LabelFrame from '../../../LabelFrame';
import RefinementListBasic from './index';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import { color, spacing } from '../../../../styles';
import PodcastEpisodeCard from '../../../Cards/PodcastEpisodeCard';
const DarkModeWrapper = styled.div`
  background-color: ${color.nero};
  padding: ${spacing.lg};
  width: 100%;
`;

export default {
  title: 'Components|Algolia/shared/RefinementListBasic',
  component: RefinementListBasic,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <RefinementListBasic
        attribute="search_difficulty_list"
        icon="chefHat"
        label="Difficulty"
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const DarkMode = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ThemeProvider theme={{ mode: 'dark' }}>
        <DarkModeWrapper>
          <RefinementListBasic
            attribute="search_season_list"
            includeCount={false}
            label="Explore 20 Seasons"
          />
        </DarkModeWrapper>
      </ThemeProvider>
    </LabelFrame>
  </MiseInstantSearch>
);

export const WithoutAlgolia = () => {
  const [selectedSeason, setSeason] = useState("a239043a-f834-4070-afb0-3ac14c0442b1");

  const episodes = [
    {
      description: "How did the nem, a Vietnamese Spring Roll, become a prominent feature on Senegalese restaurant menus in New York City?",
      episode: 5,
      href: "https://www.americastestkitchen.com/proof/the-journey-of-the-nem",
      id: "8c44abbb-bf17-4946-a3c3-9a01f8e046b5",
      imageUrl: "https://content.production.cdn.art19.com/images/af/10/33/1a/af10331a-ab7d-4193-80e1-5f4776340af8/5a66e2d65d6b66a7a79c44ee4245485879a033fdaf469aefdae2100c342f264eea360f6d57f2ebce436f2870fbf00e2de8ee57b7d1081322e425aa536d2cb731.jpeg",
      title: "The Journey of the Nem",
      season: "7f86ce08-696b-4741-a8fc-dbbd0cb3cee1",
    },
    {
      description: "At a Chili Cook-off Championship, Don Eastep turned in a cup of chili to the judges filled with samples of everyone else’s chili mixed together. And then, he won first place.",
      episode: 6,
      href: "https://www.americastestkitchen.com/proof/cheater-cheater-chili-eater",
      id: "9a52801b-0ef1-4e60-ae8c-5cf04bc421dd",
      imageUrl: "https://content.production.cdn.art19.com/images/af/10/33/1a/af10331a-ab7d-4193-80e1-5f4776340af8/5a66e2d65d6b66a7a79c44ee4245485879a033fdaf469aefdae2100c342f264eea360f6d57f2ebce436f2870fbf00e2de8ee57b7d1081322e425aa536d2cb731.jpeg",
      title: "Cheater Cheater Chili Eater",
      season: "b7ea1631-9c92-49c3-94bc-f0910f69c735",
    },
    {
      description: "When a replica of Queen Elizabeth’s royal wedding cake was destroyed by vandals, hundreds of people would come together to recreate the show stopping replica cake.",
      episode: 7,
      href: "https://www.americastestkitchen.com/proof/royal-cake",
      id: "68303db1-7090-4356-8ab3-17b370a559f9",
      imageUrl: "https://content.production.cdn.art19.com/images/af/10/33/1a/af10331a-ab7d-4193-80e1-5f4776340af8/5a66e2d65d6b66a7a79c44ee4245485879a033fdaf469aefdae2100c342f264eea360f6d57f2ebce436f2870fbf00e2de8ee57b7d1081322e425aa536d2cb731.jpeg",
      season: "de1a5ee5-7449-470a-8a1c-4999b2324735",
      title: "The Reconstruction of A Royal Cake",
    }
  ]

  const setIsRefined = (items) => {
    items.filter((season) => season.value === selectedSeason).map(season => season.isRefined = !season.isRefined)
  }
  
  const items = [
    {
      label: "Season 1",
      value: "7f86ce08-696b-4741-a8fc-dbbd0cb3cee1",
      isRefined: false,
    },
    {
      label: "Season 2",
      value: "b7ea1631-9c92-49c3-94bc-f0910f69c735",
      isRefined: false,
    },
    {
      label: "Season 3",
      value: "de1a5ee5-7449-470a-8a1c-4999b2324735",
      isRefined: false,
    },
    {
      label: "Season 4",
      value: "a239043a-f834-4070-afb0-3ac14c0442b1",
      isRefined: false,
    },
  ];
  
  return (
  <>
    <LabelFrame label="Component">
      <ThemeProvider theme={{ mode: 'dark' }}>
        <DarkModeWrapper>
        <RefinementListBasic
          items={items}
          label="EXPLORE 4 SEASONS"
          handleClick={setIsRefined(items)}
          refine={setSeason}
        />
        </DarkModeWrapper>
        </ThemeProvider>
      </LabelFrame>
      <>
      { episodes.filter(ep => ep.season.toString() === selectedSeason).map(ep => (
        <PodcastEpisodeCard
          {...ep}
        />
      ))
      }
      </>
  </>
  )
}
