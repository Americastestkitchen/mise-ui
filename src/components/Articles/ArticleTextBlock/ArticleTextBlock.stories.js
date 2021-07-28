import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import ArticleTextBlock from './index';
import storyProps from './articleTextBlockStoryProps';

const ArticleTextBlockStoryWrapper = styled.div`
  background-color: #F5F5F5;
  padding: 1.6rem;

  ${breakpoint('md')`
    padding: 3.6rem;
  `}
`;

export default {
  title: 'Components/Articles/ArticleTextBlock',
  component: ArticleTextBlock,
};

export const DropCap = () => <ArticleTextBlock {...storyProps.dropCap} />;

export const NoImageDefaultWidth = () => <ArticleTextBlock {...storyProps.noImageDefaultWidth} />;

export const NoImageWideWidth = () => <ArticleTextBlock {...storyProps.noImageWideWidth} />;

export const FloatImageWithoutCaption = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.floatImageWithoutCaption} />
    <ArticleTextBlock {...storyProps.floatImageSupplement} />
  </ArticleTextBlockStoryWrapper>
);

export const FloatImageWithCaption = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.floatImageWithCaption} />
    <ArticleTextBlock {...storyProps.floatImageSupplement} />
  </ArticleTextBlockStoryWrapper>
);

export const SidebarImageWithoutCaption = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.sidebarImageWithoutCaption} />
    <ArticleTextBlock {...storyProps.floatImageSupplement} />
  </ArticleTextBlockStoryWrapper>
);

export const SidebarImageWithCaption = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.sidebarImageWithCaption} />
    <ArticleTextBlock {...storyProps.floatImageSupplement} />
  </ArticleTextBlockStoryWrapper>
);

export const SidebarCardWithoutImage = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.sidebarCardWithoutImage} />
    <ArticleTextBlock {...storyProps.floatImageSupplement} />
  </ArticleTextBlockStoryWrapper>
);

export const SidebarCardWithImage = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.sidebarCardWithImage} />
    <ArticleTextBlock {...storyProps.floatImageSupplement} />
  </ArticleTextBlockStoryWrapper>
);

export const BoxWithOrderedListDefaultWidth = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.boxWithOrderedListDefaultWidth} />;
  </ArticleTextBlockStoryWrapper>
);

export const BoxNoImageDefaultWidth = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.boxNoImageDefaultWidth} />
  </ArticleTextBlockStoryWrapper>
);

export const BoxNoImageWideWidth = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.boxNoImageWideWidth} />
  </ArticleTextBlockStoryWrapper>
);

export const BoxTopImageDefaultWidth = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.boxTopImageDefaultWidth} />
  </ArticleTextBlockStoryWrapper>
);

export const BoxTopImageWideWidth = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.boxTopImageWideWidth} />
  </ArticleTextBlockStoryWrapper>
);

export const BoxBottomImageDefaultWidth = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.boxBottomImageDefaultWidth} />
  </ArticleTextBlockStoryWrapper>
);

export const BoxBottomImageWideWidth = () => (
  <ArticleTextBlockStoryWrapper>
    <ArticleTextBlock {...storyProps.boxBottomImageWideWidth} />
  </ArticleTextBlockStoryWrapper>
);
