import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { setViewport, storybookParameters } from '../../config/shared.stories';
import MediaEmbed, { InstagramEmbedCloned, TikTokEmbed, YoutubeEmbed, ZypeEmbed } from './MediaEmbed';

export default {
  title: 'Components/MediaEmbed',
  component: MediaEmbed,
  ...storybookParameters,
} as ComponentMeta<typeof MediaEmbed>;

const tiktokUrl = 'https://www.tiktok.com/@scout2015/video/6718335390845095173';
const youtubeUrl = 'https://www.youtube.com/watch?v=jP8iCuXeM3g';
const youtubeOtherUrl = 'https://www.youtu.be/jP8iCuXeM3g';
const instagramUrl = 'https://www.instagram.com/p/CXM58mVgJF0/';
const stackblitzUrl = 'https://stackblitz.com/edit/react?embed=1&file=src/App.js';
const zypeVideoId = '5b400b9f4b32992a310627f6';

export const TikTok: ComponentStory<typeof TikTokEmbed> = () => <TikTokEmbed source={tiktokUrl} />;
TikTok.storyName = 'TikTok';

export const YouTube: ComponentStory<typeof YoutubeEmbed> = () => (
  <YoutubeEmbed source={youtubeUrl} />
);
YouTube.storyName = 'YouTube';

export const Zype = () => <ZypeEmbed source={zypeVideoId} token={process.env.ZYPE_CLIENT_TOKEN ?? ''} />;

export const Instagram = () => (
  <InstagramEmbedCloned
    source="https://www.instagram.com/p/CXMZEJGLRqq/"
    caption=""
  />
);

export const GenericIframe = () => (
  <MediaEmbed
    caption=""
    site="Other"
    source={stackblitzUrl}
  />
);

export const MediaEmbeds = () => (
  <div>
    <MediaEmbed
      source={tiktokUrl}
      site="TikTok"
      caption=""
    />
    <MediaEmbed
      source={youtubeOtherUrl}
      site="YouTube"
      caption=""
    />
    <MediaEmbed
      source={youtubeUrl}
      site="YouTube"
      caption=""
    />
    <MediaEmbed
      source={instagramUrl}
      site="Instagram"
      caption=""
    />
    <MediaEmbed
      source={instagramUrl}
      site="Instagram"
      caption="add caption"
    />
    {/* iframe embed requires explicit sizing */}
    <div style={{ height: '600px' }}>
      <MediaEmbed
        source={stackblitzUrl}
        site="Other"
        caption=""
      />
    </div>
  </div>
);
MediaEmbeds.storyName = 'MediaEmbed';

export const MobileMediaEmbeds = () => (
  <div>
    <MediaEmbed
      source={tiktokUrl}
      site="TikTok"
      caption=""
    />
    <MediaEmbed
      source={youtubeUrl}
      site="YouTube"
      caption=""
    />
    <MediaEmbed
      source={instagramUrl}
      site="Instagram"
      caption=""
    />
    <MediaEmbed
      source={instagramUrl}
      site="Instagram"
      caption="add caption"
    />
    {/* iframe embed requires explicit sizing */}
    <div style={{ height: '400px' }}>
      <MediaEmbed
        source={stackblitzUrl}
        site="Other"
        caption=""
      />
    </div>
  </div>
);

setViewport('iphone6', MobileMediaEmbeds);
