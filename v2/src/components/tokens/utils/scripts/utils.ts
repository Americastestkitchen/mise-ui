import { ResetTypography } from "../../typography/Typography";

// Helper token utilities

// Default Storybook Token Params
export const tokenParams = {
  backgrounds: {
    disable: true,
    grid: {
      disable: true,
    },
  },
  options: {
    showToolbar: false
  },
  previewTabs: {
    canvas: { hidden: true },

  },
  viewMode: 'docs',
};

// Converts a token camelCase key to Title Case, e.g. tokenName -> Token Name
export const getTokenTitle= (token: string) => {
  let title = token;
  // Capitalize words
  title = title[0].toUpperCase() + title.slice(1).replace(/([A-Z])/g, ' $1');
  // Add Spaces between letters and numbers
  title = title.replace(/[^0-9](?=[0-9])/g, '$& ');
  return title
};

export const remToPx = (value: string) => {
  const strippedRem = Number(value.split('rem').shift());
  const strippedPx = Number(ResetTypography.size.split('px').shift());
  return `${strippedPx * strippedRem}px`
};

export const remAndPx = (value: string) => {
  return `${value} / ${remToPx(value)}`
};