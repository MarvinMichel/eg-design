module.exports = {
  addons: [
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
        controls: true,
        docs: true,
        viewport: false,
        toolbars: false,
        measure: false,
        outline: false,
      },
    },
    '@ljcl/storybook-addon-cssprops',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/preset-scss',
    '@geometricpanda/storybook-addon-badges',
    '@pxtrn/storybook-addon-docs-stencil',
  ],
  core: {
    builder: '@storybook/builder-webpack5',
  },
  framework: '@storybook/html',
  staticDirs: ['../static'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
};
