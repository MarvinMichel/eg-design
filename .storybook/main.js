module.exports = {
  addons: [
    '@storybook/addon-docs',
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
    '@geometricpanda/storybook-addon-badges',
  ],
  framework: '@storybook/html',
  staticDirs: ['../static'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
};
