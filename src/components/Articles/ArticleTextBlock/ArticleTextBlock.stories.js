import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import storyProps from './articleTextBlockStoryProps';
import ArticleTextBlock from './index';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Articles/ArticleTextBlock',
  component: ArticleTextBlock,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
}; 

const ArticleTextBlockStoryWrapper = styled.div`
  background-color: #F5F5F5;
  padding: 1.6rem;
  ${breakpoint('md')`
    padding: 3.6rem;
  `}
`;

const Template = (args) => <ArticleTextBlock {...args} />;

export const WithTheme = Template.bind({});
WithTheme.args = {
  ...storyProps.floatImageWithCaption,
  content: `${storyProps.floatImageWithCaption.content}${storyProps.floatImageSupplement.content}`,
  siteKey: 'atk'
};

export const DropCap = () => <ArticleTextBlock {...storyProps.dropCap} />;

export const NoImageDefaultWidth = () => <ArticleTextBlock {...storyProps.noImageDefaultWidth} />;

const NoImageDefaultWidthBorderProps = { ...storyProps.noImageDefaultWidth, borderWith: 4 }
export const NoImageDefaultWidthBorder = () => <ArticleTextBlock { ...NoImageDefaultWidthBorderProps } />;

export const NoImageWideWidth = () => <ArticleTextBlock {...storyProps.noImageWideWidth} />;

const NoImageWideWidthBorderProps = { ...storyProps.noImageWideWidth, borderWith: 4  }
export const NoImageWideWidthBorder = () => <ArticleTextBlock {...NoImageWideWidthBorderProps} />;

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
 