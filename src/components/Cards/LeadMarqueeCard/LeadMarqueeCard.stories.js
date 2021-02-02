import React from 'react';
import LeadMarqueeCard from './index';
import styled from 'styled-components';
import { withKnobs, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Components|Cards/LeadMarqueeCard',
  component: LeadMarqueeCard,
  decorators: [withKnobs],
};

const StoryWrapper = styled.div`
  max-width: 113.6rem;
`;

export const Default = () => (
  <StoryWrapper className="story-wrapper">
    <LeadMarqueeCard
      author={text('Author Name', 'Kevin Pang')}
      authorImageCloudinaryId={text('Author Image', 'AKO%20Articles/Author_Headshots/staff_kevin_pang')}
      imageCloudinaryId={text('Background Image', 'AKO%20Articles/2020%20Web%20Articles/ZoomThanksgivinghero')}
      backgroundColor={select('Background Color', ['#1A3352', '#B25B18', '#321A52', '#1775C2', '#857351', '#521a2d','#405700', '#005E71','#167A7A', '#0B3C3D'], "#783681")}
      description={text('Dek', '"There’s a better way than squinting into a laptop."')}
      href={text('Link', 'https://www.americastestkitchen.com/articles/2839-how-to-make-your-zoom-thanksgiving-feel-like-the-real-thing')}
      siteKey="atk"
      stickers={[{ type: 'priority', text: 'New' }, { type: 'editorial', text: 'Holiday' }]}
      title={text('Title', 'How to Make Your Zoom Thanksgiving Feel Like the Real Thing')}
    />
  </StoryWrapper>
);

export const NoAuthorImage = () => (
  <StoryWrapper className="story-wrapper">
    <LeadMarqueeCard
      author={text('Author Name', 'Kevin Pang')}
      imageCloudinaryId={text('Background Image', 'AKO%20Articles/2020%20Web%20Articles/ZoomThanksgivinghero')}
      backgroundColor={select('Background Color', ['#1A3352', '#B25B18', '#321A52', '#1775C2', '#857351', '#521a2d','#405700', '#005E71','#167A7A', '#0B3C3D'], "#783681")}
      description={text('Dek', '"There’s a better way than squinting into a laptop."')}
      href={text('Link', 'https://www.americastestkitchen.com/articles/2839-how-to-make-your-zoom-thanksgiving-feel-like-the-real-thing')}
      siteKey="atk"
      stickers={[{ type: 'priority', text: 'New' }, { type: 'editorial', text: 'Holiday' }]}
      title={text('Title', 'How to Make Your Zoom Thanksgiving Feel Like the Real Thing')}
    />
  </StoryWrapper>
);