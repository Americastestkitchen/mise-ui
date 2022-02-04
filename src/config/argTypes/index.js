export const trueFalse = {
  control: { type: 'boolean' },
};

export const textInput = {
  control: { type: 'text' },
};

export const mode = {
  options: ['light', 'dark'],
  control: { type: 'inline-radio' },
};

export const siteKey = {
  options: ['atk', 'cco', 'cio'],
  control: { type: 'inline-radio' },
};

export const disable = { control: { disable: true } };

export default {
  disable,
  mode,
  siteKey,
  textInput,
  trueFalse,
};
