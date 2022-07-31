import React from "react";

import LabelFrame from "../../../LabelFrame";
import MiseInstantSearch from "../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch";
import ToggleRefinement from "./index";
import { siteKey } from "../../../../config/argTypes";
import ThemedWrapper from "../../../../config/decorators/ThemedWrapper";

export default {
  title: "Components/Algolia/shared/ToggleRefinement",
  component: ToggleRefinement,
  decorators: [ThemedWrapper()],
  argTypes: { siteKey },
};

const Template = (args) => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ToggleRefinement
        attribute="search_document_klass"
        label="Equipment Reivew"
        value="equipment_review"
        {...args}
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Trending = Template.bind({});
Trending.args = { siteKey: "atk" };
