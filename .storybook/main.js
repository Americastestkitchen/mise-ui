module.exports = {
  stories: ['../src/**/*.stories.@(js|tsx|mdx)'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-actions', '@storybook/addon-docs', '@storybook/addon-links', '@storybook/addon-knobs', '@storybook/addon-viewport/register', '@whitespace/storybook-addon-html', '@storybook/addon-notes/register', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  core: {
    builder: 'webpack5'
  }
};