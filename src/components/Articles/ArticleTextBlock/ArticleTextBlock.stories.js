import React from 'react';

import ArticleTextBlock from './index';

export default {
  title: 'Components|Articles/ArticleTextBlock',
  component: ArticleTextBlock,
};

const title = 'How Pickles Are Made: Refrigeration, Pasteurization, and Fermentation';
const content = 'After crunching our way through dozens and dozens of whole dill pickles, <a href="#">Boar’s Head Kosher Dill Pickles</a>—the sibling of our favorite dill pickle spears—emerged as the clear favorite. These refrigerated pickles were “firm” and had “great crunch.” Tasters also loved that they tasted lots of garlic and dill, “almost like a homemade pickle,” with balanced tanginess and no bold competing spices. For a refreshingly tangy, garlicky whole dill pickle, Boar’s Head is our top pick.';
const dropCapContent = 'This is the guide for all the different elements that we’re moving over to this new layout. Grouped by content type, we’ll start with text here. The intro paragraph is a little larger than the rest of the body copy and extends the full width. We’re hoping to treat all text links in the story in the same way we treat text links everywhere else, with <a href="#">this underline</a>.';

export const NoImageDefault = () => (
  <ArticleTextBlock
    content={content}
    title={title}
  />
);

export const NoImageWide = () => (
  <ArticleTextBlock
    content={content}
    title={title}
    width="wide"
  />
);

export const DropCap = () => (
  <ArticleTextBlock
    content={dropCapContent}
    dropCap
    width="wide"
  />
);
