import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import QueueCard from './index';

export default {
  title: 'Components|Cards/QueueCard',
  component: QueueCard,
  decorators: [withKnobs],
};

export const ResumeVideo = () => (
  <QueueCard 
    contentType="episode"
    href="https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2"
    imageAlt={text('Image alt text', '')}
    imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1560883900/ATKTV%20and%20CCTV%20Season%20Refresh/ATKTV%20S19/ATK-S1926_Episode.jpg')}
    progress={0.25}
    onClick={action('result-click')}
    siteKey="atk"
    stickers={[{ type: 'editorial', text: '28:08' }]}
    title={text('Title', 'Hearty Mediterranean at Home')}
    type="episode"
    videoId="episode_666"
  />
);

export const NextVideo = () => (
  <QueueCard 
    contentType="video"
    href="https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2"
    imageAlt={text('Image alt text', '')}
    imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1497106905/35926_episode.jpg')}
    onClick={action('result-click')}
    siteKey="atk"
    stickers={[{ type: 'editorial', text: '28:08' }]}
    title={text('Title', 'Bakery-Style Pastries')}
    type="skill"
    videoId="video_4293"
  />
);