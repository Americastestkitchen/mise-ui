import backgrounds from '../backgrounds';

export const mode = {
  options: ['light', 'dark'],
  control: { type: 'inline-radio' },
};

export const themedBg = { default: 'atk', ...backgrounds };
export type SiteKey = 'atk'| 'cio'| 'cco'| 'kids'| 'school'| 'shop';

interface SiteKeyControl {
  options: SiteKey[],
  control: {type: 'inline-radio'},
}

export const siteKey: SiteKeyControl = {
  options: ['atk', 'cio', 'cco', 'kids', 'school', 'shop'],
  control: { type: 'inline-radio' },
};

export const disable = { control: { disable: true } };

export default {
  disable,
  mode,
  siteKey,
};
