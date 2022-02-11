import React from 'react';

import FinePrint from './index';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Articles/FinePrint',
  component: FinePrint,
  decorators: [ addThemedWrapper() ],
  argTypes: {
    siteKey,
    id: { table: { disable: true } },
  },
};

const paragraphContent = '<p>What do fried chicken, deli sandwiches, and backyard barbecue fare all have in common? They’re good foods that are better when there’s a crunchy, tangy pickle served on the side. Last year alone, Americans spent more than $1 billion on pickles, according to data from IRI, a Chicago-based market research firm. We set out to find the best whole dill pickles, which are hardier and more substantial than spears or chips and ideal for either serving alongside a meal or enjoying as a snack. We purchased pickles from eight top-selling, nationally available brands. If a brand had more than one option, we included only its best seller. One product was marketed as “garlic and dill,” one was labeled “kosher,” and six were labeled “kosher dill”— a style that originated in the kosher Jewish delis in New York City and now refers to any garlic-and-dill-flavored pickle. Our lineup also included both refrigerated and shelf-stable options. A panel of 21 America’s Test Kitchen staffers sampled them plain—served chilled at a blind tasting—rating their flavor, texture, and general appeal.</p>';
const listContent = '<ul><li>Store 1 bunch basil on counter</li><li>Store 1 bunch each cilantro and thyme on shelf in refrigerator Store 1 bunch each cilantro and thyme on shelf in refrigerator, adding text so this wraps to the next line!</li><li>Store 1 bunch each cilantro and thyme in door of refrigerator</li><li>Knock over (empty) in refrigerator 5 times</li><li>Push off counter (empty) 3 times</li><li>Wash 10 times according to manufacturer instructions</li></ul>';
const listContentOrdered = `<ol>
  <li>Ordered list has wrap issue <strong>Only When</strong> there is a tag in the list element like bold, it also needs to be long enough to wrap text</li>
  <li>Ordered list has wrap issue <strong>Only When</strong> there is a tag in the list element like bold, it also needs to be long enough to wrap text</li>
</ol>`;
const subtitle = 'There\'s a method to our madness, here\'s our full list of testing.';
const title = 'Methodology';

const Template = (args) => <FinePrint {...args} />;

export const ParagraphContent = Template.bind({});
ParagraphContent.args = {
  content: paragraphContent,
  isHidden: true,
  siteKey: 'atk',
  subtitle,
  title,
};

export const ListContent = Template.bind({});
ListContent.args = {
  content: listContent,
  isHidden: true,
  siteKey: 'atk',
  subtitle,
  title,
};


export const ListContentOrdered = Template.bind({});
ListContentOrdered.args = {
  content: listContentOrdered,
  isHidden: false,
  siteKey: 'atk',
  subtitle,
  title,
};
