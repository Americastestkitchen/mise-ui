import React from 'react';
import MarqueeCard from './index';
import styled from 'styled-components';
import { color, spacing  } from '../../../styles';
import { withKnobs, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Cards/MarqueeCard',
  component: MarqueeCard,
  decorators: [withKnobs],
};

const StoryWrapper = styled.div`
  background-color: ${color.whiteSmoke};
  padding: ${spacing.sm};
`;

export const Default = () => (
  <StoryWrapper className="story-wrapper">
    <MarqueeCard
      author={text('Author Name', 'Kevin Pang')}
      authorImageCloudinaryId={text('Author Image', 'AKO%20Articles/Author_Headshots/staff_kevin_pang')}
      imageUrl={text('Background Image', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1/AKO%20Articles/Cooking%20for%20One/SFS_LemonySpaghettiGarlicPineNuts-4')}
      description={text('Description', "Including a virtual bread project; a punchy, small-batch hot sauce; and a digital encyclopedia of Texas tacos.")}
      href={text('Link', 'https://www.americastestkitchen.com/articles/2839-how-to-make-your-zoom-thanksgiving-feel-like-the-real-thing')}
      publishDate={text('Publish Date', 'Yesterday')}
      siteKey={select('Site Key', ['atk', 'cco', 'cio', 'kids', 'school', 'shop'], 'atk')}
      stickers={[{ type: 'priority', text: 'new' }, { type: 'editorial', text: 'Community' }]}
      title={text('Title', '10 Things in the Food World We Loved in November')}
    />
  </StoryWrapper>
);

export const NoAuthorImage = () => (
  <StoryWrapper className="story-wrapper">
    <MarqueeCard
      author={text('Author Name', 'Kevin Pang')}
      imageUrl={text('Background Image', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1/AKO%20Articles/Cooking%20for%20One/SFS_LemonySpaghettiGarlicPineNuts-4')}
      description={text('Description', "Including a virtual bread project; a punchy, small-batch hot sauce; and a digital encyclopedia of Texas tacos.")}
      href={text('Link', 'https://www.americastestkitchen.com/articles/2839-how-to-make-your-zoom-thanksgiving-feel-like-the-real-thing')}
      publishDate={text('Publish Date', 'Yesterday')}
      siteKey={select('Site Key', ['atk', 'cco', 'cio', 'kids', 'school', 'shop'], 'atk')}
      stickers={[{ type: 'editorial', text: 'Community' }]}
      title={text('Title', '10 Things in the Food World We Loved in November')}
    />
  </StoryWrapper>
);