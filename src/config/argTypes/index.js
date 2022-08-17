export const mode = {
  options: ['light', 'dark'],
  control: { type: 'inline-radio' },
};

export const siteKey = {
  options: ['atk', 'cco', 'cio'],
  control: { type: 'inline-radio' },
};

export const disable = { control: { disable: true } };
export const hidden = { table: { disable: true } };

export default {
  hidden,
  disable,
  mode,
  siteKey,
};
