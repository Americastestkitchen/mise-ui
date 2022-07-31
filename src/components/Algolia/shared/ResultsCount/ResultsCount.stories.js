import React from "react";

import LabelFrame from "../../../LabelFrame";
import MiseInstantSearch from "../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch";
import ResultsCount from "./index";
import { siteKey } from "../../../../config/argTypes";
import ThemedWrapper from "../../../../config/decorators/ThemedWrapper";

export default {
  title: "Components/Algolia/shared/ResultsCount",
  component: ResultsCount,
  decorators: [ThemedWrapper()],
  argTypes: { siteKey },
};

const Template = (args) => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ResultsCount />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Default = Template.bind({});
Default.args = { siteKey: "atk" };
