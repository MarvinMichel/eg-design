module.exports = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-essentials', '@storybook/preset-scss', './notes-addon/register'],
  framework: '@storybook/html',
  staticDirs: ['../static'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
};
