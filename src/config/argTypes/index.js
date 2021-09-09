export const mode = {
  options: ['light', 'dark'],
  control: { type: 'inline-radio' },
};

export const siteKey = {
  options: ['atk', 'cco', 'cio'],
  control: { type: 'inline-radio' },
};

export default {
  disable: { control: { disable: true } },
  mode,
  siteKey,
};
