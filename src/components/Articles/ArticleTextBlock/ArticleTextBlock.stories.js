import React from 'react';

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

const Template = (args) => <ArticleTextBlock {...args} />;

export const WithTheme = Template.bind({});
WithTheme.args = {
  ...storyProps.floatImageWithCaption,
  content: `${storyProps.floatImageWithCaption.content}${storyProps.floatImageSupplement.content}`,
  siteKey: 'atk'
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
 