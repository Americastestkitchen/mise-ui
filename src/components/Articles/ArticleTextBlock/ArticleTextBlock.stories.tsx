import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import ArticleTextBlock, { ArticleTextBlockPropTypes, PhotoProps } from './ArticleTextBlock';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Articles/ArticleTextBlock',
  component: ArticleTextBlock,
  decorators: [addThemedWrapper()],
  argTypes: {
    siteKey: {
      ...siteKey,
      defaultValue: 'atk',
    },
    sidebarCard: {
      control: false,
    },
    photo: {
      control: false,
    },
    includeInTOC: {
      control: false,
    },
    as: {
      control: false,
      defaultValue: 'h3',
    },
    dropCap: {
      control: false,
    },
  },
} as ComponentMeta<typeof ArticleTextBlock>;

const ArticleTextBlockStoryWrapper = styled.div`
  background-color: #F5F5F5;
  padding: 1.6rem;
  ${breakpoint('md')`
    padding: 3.6rem;
  `}
`;

// eslint-disable-next-line max-len
const Template:ComponentStory<typeof ArticleTextBlock> = (args: ArticleTextBlockPropTypes) => <ArticleTextBlock {...args} />;

const title = 'How Pickles Are Made: Refrigeration, Pasteurization, and Fermentation';
const content = '<p>After crunching our way through dozens and dozens of whole dill pickles, <a href="#">Boar’s Head Kosher Dill Pickles</a>—the sibling of our favorite dill pickle spears—emerged as the clear favorite. These refrigerated pickles were “firm” and had “great crunch.” Tasters also loved that they tasted lots of garlic and dill, “almost like a homemade pickle,” with balanced tanginess and no bold competing spices. For a refreshingly tangy, garlicky whole dill pickle, Boar’s Head is our top pick.</p>';
const supplementContent = '<p>When we reviewed dill pickle spears, all the shelf-stable products were soft and soggy, while the refrigerated pickles were crisp and crunchy. That’s because the heat applied to shelf-stable pickles during pasteurization essentially cooks them and can soften their texture. But with whole dill pickles, the differences between the refrigerated and shelf-stable products were more subtle. The refrigerated pickles once again had great crunch, but the shelf-stable options were only “a little less crisp.” We quickly came to understand why the lessons we learned about pickle spears didn’t hold true for whole pickles. First, the skin surrounding a whole pickle holds it together and keeps it crisp. Second, whole pickles tend to have more mass than spears and are therefore less affected by the heat of pasteurization and more likely to retain their crunch and snap.</p>';

const photo: PhotoProps = {
  altText: 'A chef is holding a pan with garlic bread on it.',
  photoUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_416,h_416/v1/AKO%20Articles/2021%20Articles/Reviews%20Team/GettyImages-680787007',
  photoDisplayOption: 'float',
};

const caption = 'No two jars of kosher pickles are exactly the same.' as string;

const defaultArgs: Partial<ArticleTextBlockPropTypes> = {
  content,
  displayOption: 'default',
  dropCap: false,
  title,
  width: 'default',
};

export const WithTheme = Template.bind({});
WithTheme.args = {
  ...defaultArgs,
  photo: { ...photo, caption },
  content: `${content}${supplementContent}`,
};

const dropCapContent = 'This is the guide for all the different elements that we’re moving over to this new layout. Grouped by content type, we’ll start with text here. The intro paragraph is a little larger than the rest of the body copy and extends the full width. We’re hoping to treat all text links in the story in the same way we treat text links everywhere else, with <a href="#">this underline</a>.';
export const DropCap = Template.bind({});
DropCap.args = {
  displayOption: 'default',
  content: dropCapContent,
  dropCap: true,
  width: 'wide',
};

export const NoImageDefaultWidth = Template.bind({});
NoImageDefaultWidth.args = {
  ...defaultArgs,
};

export const NoImageWideWidth = Template.bind({});
NoImageWideWidth.args = {
  ...defaultArgs,
  width: 'wide',
};

const multipleBlocksWrapper = (Story: Story) => (
  <ArticleTextBlockStoryWrapper>
    <Story />
    <ArticleTextBlock {...{ ...defaultArgs, title: null } as ArticleTextBlockPropTypes} />
  </ArticleTextBlockStoryWrapper>
);

const floatImage: PhotoProps = { ...photo, photoDisplayOption: 'float' };
export const FloatImageWithoutCaption = Template.bind({});
FloatImageWithoutCaption.args = {
  ...WithTheme.args,
  photo: floatImage,
};
FloatImageWithoutCaption.decorators = [multipleBlocksWrapper];

export const FloatImageWithCaption = Template.bind({});
FloatImageWithCaption.args = {
  ...FloatImageWithoutCaption.args,
  photo: { ...floatImage, caption },
};
FloatImageWithCaption.decorators = [multipleBlocksWrapper];

const sidebarImage: PhotoProps = { ...photo, photoDisplayOption: 'sidebar' };
export const SidebarImageWithoutCaption = Template.bind({});
SidebarImageWithoutCaption.decorators = [multipleBlocksWrapper];
SidebarImageWithoutCaption.args = {
  ...WithTheme.args,
  photo: sidebarImage,
};

export const SidebarImageWithCaption = Template.bind({});
SidebarImageWithCaption.decorators = [multipleBlocksWrapper];
SidebarImageWithCaption.args = {
  ...SidebarImageWithoutCaption.args,
  photo: { ...sidebarImage, caption },
};

const sidebarCard = {
  altText: 'picture of a thing',
  description: 'We’ve happily made do with Weber’s basic kettle for years. But would newer, more tricked-out charcoal cookers be worth the upgrade?',
  title: 'FAQ About Storing Blue Cheese',
  type: 'Article',
  url: 'https://www.americastestkitchen.com/articles/3236-this-hardware-store-staple-deodorizes-your-fridge-better-than-baking-soda',
};

const cardImage = 'TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Pickle_Samples_with_Brine_104-1';

export const SidebarCardWithoutImage = Template.bind({});
SidebarCardWithoutImage.decorators = [multipleBlocksWrapper];
SidebarCardWithoutImage.args = {
  ...defaultArgs,
  content: `${content}${supplementContent}`,
  sidebarCard,
};

export const SidebarCardWithImage = Template.bind({});
SidebarCardWithImage.decorators = [multipleBlocksWrapper];
SidebarCardWithImage.args = {
  ...SidebarCardWithoutImage.args,
  sidebarCard: {
    ...sidebarCard,
    photo: cardImage,
  },
};

const boxContent = 'We tested a variety of bowl sizes, ranging from 10 to 20 ounces. The smaller bowls (10 to 12 ounces) were great for sides—potato salad—or even containing a messy pulled pork sandwich or a slice of ice cream cake. However, they were too small to hold a meal-size portion of chili or a salad containing bulky greens. We found that the 16- to 20-ounce bowls were too big for a small side, but they were perfect for larger portions of soup, stew, and salad. If you’re serving a variety of foods and want to buy only one model, we think that the larger sizes are more versatile.';
const boxTitle = 'Which Size Is Right for You?';
const orderedList = '<ol><li>A quiet motor (a few sounded like jackhammers)</li><li>The Feed tube should be big enough to minimize pretrimming and waste, but narrow enough to hold food upright.</li><li>A heavy anchoring base that doesn’t need suction cups to stay stable</li><li>Buttons and controls that are easy to interpret, comfortable to push, and simple to wipe clean</li></ol>';
const boxPhoto = {
  altText: 'A chef is holding a pan with garlic bread on it.',
  photoUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_632,h_100/v1/AKO%20Articles/2021%20Articles/Reviews%20Team/GettyImages-680787007',
};

const boxDefaultArgs: Partial<ArticleTextBlockPropTypes> = {
  content: boxContent,
  displayOption: 'box',
  title: boxTitle,
  width: 'default',
};

const blockWrapper = (Story: Story) => (
  <ArticleTextBlockStoryWrapper>
    <Story />
  </ArticleTextBlockStoryWrapper>
);
export const BoxNoImageDefaultWidth = Template.bind({});
BoxNoImageDefaultWidth.decorators = [blockWrapper];
BoxNoImageDefaultWidth.args = boxDefaultArgs;

export const BoxWithOrderedListDefaultWidth = Template.bind({});
BoxWithOrderedListDefaultWidth.decorators = [blockWrapper];
BoxWithOrderedListDefaultWidth.args = {
  ...boxDefaultArgs,
  content: orderedList,
};

export const BoxNoImageWideWidth = Template.bind({});
BoxNoImageWideWidth.decorators = [blockWrapper];
BoxNoImageWideWidth.args = {
  ...boxDefaultArgs,
  width: 'wide',
  content: orderedList,
};

export const BoxTopImageDefaultWidth = Template.bind({});
BoxTopImageDefaultWidth.decorators = [blockWrapper];
BoxTopImageDefaultWidth.args = {
  ...boxDefaultArgs,
  width: 'default',
  photo: {
    ...boxPhoto,
    photoDisplayOption: 'top',
  },
};

export const BoxTopImageWideWidth = Template.bind({});
BoxTopImageWideWidth.decorators = [blockWrapper];
BoxTopImageWideWidth.args = {
  ...BoxTopImageDefaultWidth.args,
  width: 'wide',
};

export const BoxBottomImageDefaultWidth = Template.bind({});
BoxBottomImageDefaultWidth.decorators = [blockWrapper];
BoxBottomImageDefaultWidth.args = {
  ...boxDefaultArgs,
  width: 'default',
  photo: {
    ...boxPhoto,
    photoDisplayOption: 'bottom',
  },
};

export const BoxBottomImageWideWidth = Template.bind({});
BoxBottomImageWideWidth.decorators = [blockWrapper];
BoxBottomImageWideWidth.args = {
  ...BoxBottomImageDefaultWidth.args,
  width: 'wide',
};
const titleWithLink = 'Render Links in <a href=#>Title</a>';

export const TextBlockWithOrderedListAndTitleLink = Template.bind({});
TextBlockWithOrderedListAndTitleLink.args = {
  as: 'h3',
  width: 'default',
  title: titleWithLink,
  content: orderedList,
  displayOption: 'default',
};
