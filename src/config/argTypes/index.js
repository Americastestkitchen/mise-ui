export const mode = {
  options: ['light', 'dark'],
  control: { type: 'inline-radio' },
};

export const siteKey = {
  options: ['atk', 'cco', 'cio', 'play'],
  control: { type: 'inline-radio' },
};

export const disable = { control: { disable: true } };

export default {
  disable,
  mode,
  siteKey,
};
