import React from 'react';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import SidebarCard from './index';

const SidebarCardStoryWrapper = styled.div`
  background-color: #F5F5F5;
  padding: 1.6rem;

  ${breakpoint('md')`
    padding: 3.6rem;
  `}
`;

export default {
    title: 'Components|Articles/SidebarCard',
    component: SidebarCard,
};

export const WithImage = () => (
  <SidebarCardStoryWrapper>
    <SidebarCard
      altText="picture of a thing"
      description="We’ve happily made do with Weber’s basic kettle for years. But would newer, more tricked-out charcoal cookers be worth the upgrade?"
      photo="TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Pickle_Samples_with_Brine_104-1"
      title="FAQ About Storing Blue Cheese"
      type="Article"
      url="https://www.americastestkitchen.com/articles/3236-this-hardware-store-staple-deodorizes-your-fridge-better-than-baking-soda"
    />
   </SidebarCardStoryWrapper>
);

export const WithoutImage = () => (
  <SidebarCardStoryWrapper>
    <SidebarCard
      altText="picture of a thing"
      description="These days, bitters come in a range of enticing flavors, so we wanted to try them in a range of nonalcoholic applications."
      photo={null}
      title="How to Use Cocktail Bitters in the Kitchen"
      type="HowTo"
      url="https://www.cooksillustrated.com/how_tos/11829-how-to-use-cocktail-bitters-in-the-kitchen"
    />
  </SidebarCardStoryWrapper>
);
