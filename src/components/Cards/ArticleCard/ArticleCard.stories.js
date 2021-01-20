import React from 'react';
import ArticleCard from './index';
import styled, { css, ThemeProvider } from 'styled-components';
import { breakpoints, color, spacing, withThemes } from '../../../styles';

export default {
  title: 'Components|Cards/ArticleCard',
  component: ArticleCard,
};

const StoryWrapper = styled.div`
  background-color: ${color.whiteSmoke};
  padding: ${spacing.sm};
`;
export const Default = () => (
  <StoryWrapper className="story-wrapper">
    <ArticleCard
      author="Kevin Pang"
      authorImageCloudinaryId="Play%20Cast%20Headshots/staff_dan_souza"
      backgroundCloudinaryId="AKO Articles/2020 Web Articles/Things_We_Love-01_2"
      description="Including a virtual bread project; a punchy, small-batch hot sauce; and a digital encyclopedia of Texas tacos."
      href="https://www.americastestkitchen.com/articles/2839-how-to-make-your-zoom-thanksgiving-feel-like-the-real-thing"
      publishDate="Yesterday"
      siteKey="atk"
      stickers={[{ type: 'editorial', text: 'Community' }]}
      title="10 Things in the Food World We Loved in November"
    />
  </StoryWrapper>
);
