import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import { getImageUrl } from '../../lib/cloudinary';
import ShowMoreResults, { ShowMoreResultsProps } from './ShowMoreResults';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import LabelFrame from '../LabelFrame/LabelFrame';
import { color, font, fontSize, lineHeight, spacing } from '../../styles';
import PodcastEpisodeCard from '../Cards/PodcastEpisodeCard';

const episodes = [
  {
    id: 1,
    title: 'testtitle',
    description: 'test',
    episode: 64,
    siteKey: 'atk',
    imageUrl: getImageUrl('play-listen/proof-s3e8-vertical'),
  },
  {
    id: 1,
    title: 'testtitle',
    description: 'test',
    episode: 64,
    siteKey: 'atk',
    imageUrl: getImageUrl('play-listen/proof-s3e8-vertical'),
  },
];

export default {
  title: 'Components/ShowMoreResults',
  component: ShowMoreResults,
} as ComponentMeta<typeof ShowMoreResults>;

const StyledShowMoreResults = styled(ShowMoreResults)`
  margin-bottom: 3rem;
`;

const Template: ComponentStory<typeof ShowMoreResults> = (args: ShowMoreResultsProps) => (
  <MiseInstantSearch>
    <StyledShowMoreResults {...args} />
  </MiseInstantSearch>
);

export const Default = Template.bind({});
Default.args = {
  resultsCount: 40,
};

const StyledLabelFrame = styled(LabelFrame)`
  padding: ${spacing.xlg} 0 ${spacing.sm};
  
  h1 {
    font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
    margin: ${spacing.lg};
  }
  
  .podcast-episode-card {
    margin: ${spacing.sm} 0;
  }
`;

const DarkModeWrapper = styled.div`
  background-color: ${color.gunmetal};
  padding: ${spacing.lg};
  width: 100%;
`;

const WithoutAlgoliaTemplate: ComponentStory<typeof ShowMoreResults> = (
  args: ShowMoreResultsProps,
) => {
  const [episodeCount, setEpisodeCount] = useState(0);

  return (
    <>
      <StyledLabelFrame label="component">
        <DarkModeWrapper>
          <ShowMoreResults
            {...args}
            hasMore={!(episodeCount === episodes.length)}
            refineNext={() => setEpisodeCount(episodeCount + 2)}
          />
        </DarkModeWrapper>
      </StyledLabelFrame>
      <StyledLabelFrame label="Supplemental Component">
        {episodes.slice(0, episodeCount).map(ep => (
          <PodcastEpisodeCard {...ep} />
        ))}
      </StyledLabelFrame>
    </>
  );
};

export const WithoutAlgolia = WithoutAlgoliaTemplate.bind({});
WithoutAlgolia.args = {
  isAlgolia: false,
  resultType: 'Episode',
};
