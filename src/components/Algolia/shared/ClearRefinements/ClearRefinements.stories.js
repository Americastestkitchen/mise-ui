import React from "react";

import LabelFrame from "../../../LabelFrame";
import ClearRefinements from "./index";
import MiseInstantSearch from "../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch";
import SearchRefinementList from "../../search/SearchRefinementList";
import { siteKey } from "../../../../config/argTypes";
import ThemedWrapper from "../../../../config/decorators/ThemedWrapper";

export default {
  title: "Components/Algolia/shared/ClearRefinements",
  component: ClearRefinements,
  decorators: [ThemedWrapper()],
  argTypes: { siteKey },
};

const Template = (args) => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ClearRefinements />
    </LabelFrame>
    <LabelFrame label="Supplemental Component">
      <SearchRefinementList
        attribute="search_review_type_list"
        operator="or"
        showHideLabel="Equipment"
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Default = Template.bind({});
Default.args = { siteKey: "atk" };
