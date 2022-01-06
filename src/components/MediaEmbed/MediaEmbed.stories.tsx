import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { setViewport, storybookParameters } from '../../config/shared.stories';
import MediaEmbed, { TikTokEmbed, YoutubeEmbed, ZypeEmbed } from './MediaEmbed';
import { InstagramEmbed } from '.';

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

const longCaptionText = 'Both our winning products had simple ingredient lists with a noticeable lack of additives, such as food colorings and preservatives. In contrast, our least favorite sticks had a slew of additives, including titanium dioxide, a food coloring that is no longer considered safe for consumption by the European Food Safety Authority.';

export const TikTok: ComponentStory<typeof TikTokEmbed> = () => <TikTokEmbed source={tiktokUrl} />;
TikTok.storyName = 'TikTok';

export const TikTokWithCaption: ComponentStory<typeof TikTokEmbed> = () => (
  <TikTokEmbed source={tiktokUrl} caption={longCaptionText} />
);
TikTokWithCaption.storyName = 'TikTok With Caption';

export const YouTube: ComponentStory<typeof YoutubeEmbed> = () => (
  <YoutubeEmbed source={youtubeUrl} />
);
YouTube.storyName = 'YouTube';

export const YouTubeWithCaption: ComponentStory<typeof YoutubeEmbed> = () => (
  <YoutubeEmbed source={youtubeUrl} caption={longCaptionText} />
);
YouTubeWithCaption.storyName = 'YouTube With Caption';

export const Zype = () => <ZypeEmbed source={zypeVideoId} token={process.env.ZYPE_CLIENT_TOKEN ?? ''} />;
export const ZypeWithCaption = () => <ZypeEmbed source={zypeVideoId} caption={longCaptionText} token={process.env.ZYPE_CLIENT_TOKEN ?? ''} />;

export const Instagram = () => (
  <InstagramEmbed
    source="https://www.instagram.com/p/CXMZEJGLRqq/"
  />
);

export const InstagramWithCaption = () => (
  <InstagramEmbed
    source="https://www.instagram.com/p/CXMZEJGLRqq/"
    caption={longCaptionText}
  />
);

export const GenericIframe = () => (
  <MediaEmbed
    site="Other"
    source={stackblitzUrl}
  />
);

export const GenericIframeWithCaption = () => (
  <MediaEmbed
    site="Other"
    source={stackblitzUrl}
    caption={longCaptionText}
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
    />
    <MediaEmbed
      source={youtubeUrl}
      site="YouTube"
    />
    <MediaEmbed
      source={instagramUrl}
      site="Instagram"
    />
    <MediaEmbed
      source={instagramUrl}
      site="Instagram"
    />
    {/* iframe embed requires explicit sizing */}
    <div style={{ height: '400px' }}>
      <MediaEmbed
        source={stackblitzUrl}
        site="Other"
      />
    </div>
  </div>
);

setViewport('iphone6', MobileMediaEmbeds);
