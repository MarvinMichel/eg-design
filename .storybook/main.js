module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@geometricpanda/storybook-addon-badges',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        background: false,
      },
    },
    '@ljcl/storybook-addon-cssprops',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/preset-scss',
  ],
  core: {
    builder: '@storybook/builder-webpack5',
  },
  framework: '@storybook/html',
  staticDirs: ['../static'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
};
