import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import QueueCard, { QueueCardProps } from './QueueCard';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';
import { color, spacing, withThemes } from '../../../styles';
import { StickerType } from '../Cards';

export default {
  title: 'Components/Cards/QueueCard',
  component: QueueCard,
  decorators: [addThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof QueueCard>;

const StoryWrapperTheme = {
  default: css`
    padding: 2rem 0 2rem ${spacing.sm};
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
};

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

const Template = (args: QueueCardProps) => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <StoryWrapper className="story-wrapper">
      <QueueCard {...args} />
    </StoryWrapper>
  </ThemeProvider>
);

const defaultArgs: { href: string, stickers : StickerType[]} = {
  href: 'https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2',
  stickers: [{ type: 'editorial', text: '28:08' }],
};

export const resumeVideo: ComponentStory<typeof QueueCard> = Template.bind({});
resumeVideo.args = {
  ...defaultArgs,
  siteKey: 'atk',
  contentType: 'episode',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1560883900/ATKTV%20and%20CCTV%20Season%20Refresh/ATKTV%20S19/ATK-S1926_Episode.jpg',
  progress: 0.25,
  title: 'Hearty Me',
  type: 'episode',
  videoId: 'episode_666',
};

export const nextAmdVideo: ComponentStory<typeof QueueCard> = Template.bind({});
nextAmdVideo.args = {
  ...defaultArgs,
  siteKey: 'atk',
  contentType: 'video',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1497106905/35926_episode.jpg',
  title: 'Bakery-Style Pastries',
  type: 'skill',
  videoId: 'video_4293',
};
