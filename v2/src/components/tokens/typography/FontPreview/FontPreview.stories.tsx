import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import { FontPreview, FontPreviewProps } from "./FontPreview";

export default {
  title: "Tokens/Utils/FontPreview",
  component: FontPreview,
  decorators: [withDesign],
  argTypes: {
    className: {
      control: null,
    },
  },
} as Meta;

export const Basic: Story<FontPreviewProps> = ({ ...args }) => {
  return <FontPreview {...args} />;
};