import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import SubscribeBubbles from './index';
import { color, spacing } from '../../styles';

export default {
  title: 'Components|SubscribeBubbles',
  component: SubscribeBubbles,
};

const podcastApps = [
  {
    type: 'applePodcasts',
    name: 'Apple Podcasts',
    href: 'https://itunes.apple.com/us/podcast/proof/id1438546054',
  },
  {
    type: 'stitcher',
    name: 'Stitcher',
    href: 'https://www.stitcher.com/podcast/americas-test-kitchen-2/proof-2',
  },
  {
    type: 'spotify',
    name: 'Spotify',
    href: 'https://open.spotify.com/show/0LgmhfcOQJNHyz6KyhtsDY?si=Egcx7XxbQou4mEDndA-3Gw',
  },
  {
    type: 'googlePodcasts',
    name: 'Google Podcasts',
    href: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL3Byb29m',
  },
  {
    type: 'radioPublic',
    name: 'Radio Public',
    href: 'https://radiopublic.com/proof-Ww0OAm',
  },
  {
    type: 'tuneIn',
    name: 'TuneIn',
    href: 'https://tunein.com/podcasts/Food--Cooking-Podcasts/Proof-p1163135/',
  },
  {
    type: 'pocketCasts',
    name: 'Pocket Casts',
    href: 'https://pca.st/JFtm',
  },
  {
    type: 'castbox',
    name: 'Castbox',
    href: 'https://castbox.fm/x/_eDM',
  },
];

const SubscribeBubblesStory = styled.div`
  background-color: ${color.nero};
  padding: ${spacing.sm};
`;

export const Default = ({ className }) => (
  <SubscribeBubblesStory>
    <SubscribeBubbles bubbles={podcastApps}/>
  </SubscribeBubblesStory>
);
