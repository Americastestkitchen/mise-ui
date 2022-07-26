module.exports = {
  stories: ['../src/v2/**/*.stories.@(js|tsx|mdx)'],
  addons: [
    'storybook-design-token',
    '@storybook/preset-scss',
    '@storybook/addon-docs',
  ],
  core: {
    builder: 'webpack5'
  },
};
