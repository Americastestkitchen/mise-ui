import React from "react";

import LabelFrame from "../../../LabelFrame";
import MiseInstantSearch from "../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch";
import Menu from "./index";
import { siteKey } from "../../../../config/argTypes";
import ThemedWrapper from "../../../../config/decorators/ThemedWrapper";

export default {
  title: "Components/Algolia/shared/Menu",
  component: Menu,
  decorators: [ThemedWrapper()],
  argTypes: { siteKey },
};

const Template = (args) => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <Menu attribute="search_review_type_list" />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Default = Template.bind({});
Default.args = { siteKey: "atk" };
