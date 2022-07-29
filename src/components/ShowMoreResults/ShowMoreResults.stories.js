import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import fetch from 'cross-fetch';

import LabelFrame from '../LabelFrame';
import ShowMoreResults from './index';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import PodcastEpisodeCard from '../Cards/PodcastEpisodeCard/PodcastEpisodeCard';
import { withKnobs, text } from '@storybook/addon-knobs';

import {
  color,
  font,
  fontSize,
  lineHeight,
  spacing,
} from '../../styles';

import { getImageUrl } from '../../lib/cloudinary';

const StyledShowMoreResults = styled(ShowMoreResults)`
  margin-bottom: 3rem;
`;

export const Default = ({ className }) => (
  <MiseInstantSearch>
    <StyledShowMoreResults
      className={className}
      resultsCount={40}
    />
  </MiseInstantSearch>
);

Default.propTypes = {
  className: PropTypes.string,
};

Default.defaultProps = {
  className: null,
};

export default {
  title: 'Components/ShowMoreResults',
  component: ShowMoreResults,
  decorators: [withKnobs],
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

const proxyUrl = 'https://www-staging.americastestkitchen.com/art19';
export const WithoutAlgolia = () => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${proxyUrl}/episodes?calendar_meta=true&page=1&per_page=25&rss=true&series_id=7f86ce08-696b-4741-a8fc-dbbd0cb3cee1`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.art19.v0+json;q=0.9,application/json;q=0.8',
            'Authorization': 'Token token="jQ-ldsLx7USTQ4mjtOEBPIOsEXAno8UTh8l2KomNLQM5B75NUL-P9iFVGd1lF6c9-Lcq1dmUFTmhZTBsb09BmA", credential="14c39803-3e99-47c4-a4d3-d79398e74089"',
          },
          mode: 'cors',
        },
      );
      const episodeData = await response.json().catch((err) => {
        console.error('REQUEST RESPONSE.JSON PARSING ERROR', url); // eslint-disable-line
        console.error(err); // eslint-disable-line
      });
      setEpisodes(episodeData.episodes.filter(ep => ep.itunes_type !== 'bonus').map(({
        id,
        title,
        episode_number,
        summary,
        rss_link_url,
      }) => ({
        id,
        title: title,
        description: summary,
        episode: episode_number,
        href: rss_link_url,
        siteKey: 'atk',
        imageUrl: getImageUrl('play-listen/proof-s3e8-vertical'),
      })));
    }
    fetchData();
  }, []);

  const [episodeCount, setEpisodeCount] = useState(8);

  return (
    <>
      <StyledLabelFrame label="Component">
        <ThemeProvider theme={{ mode: 'dark' }}>
          <DarkModeWrapper>
            <ShowMoreResults
              isAlgolia={false}
              hasMore={!(episodeCount === episodes.length)}
              refineNext={() => setEpisodeCount(episodeCount+8)}
              resultType={text('Result Type', 'Episode')}
            />
          </DarkModeWrapper>
        </ThemeProvider>
      </StyledLabelFrame>
      <StyledLabelFrame label="Supplemental Component">
      { episodes.slice(0, episodeCount).map(ep => (
        <PodcastEpisodeCard
          {...ep}
        />
      ))
      }
      </StyledLabelFrame>
    </>
  );
};