import MDXDocs from './darkmode-toggle.mdx';

export default {
  argTypes: {
    label: {
      control: 'text',
      description: 'The text which is read by a screen reader',
      default: 'darkmode theme',
    },
  },
  component: 'eg-darkmode-toggle',
  description:
    "The darkmode toggle is a switch button which chages the darkmode state of the HTML document, by adding a `data-darkmode` attribute onto the `<html>`. It uses a media-query to get the users' system default and uses it on render. If the user has changed the theme, it's saved to the localStorage. The latter get priority above everything.",
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
  title: 'Darkmode Toggle',
};

const DefaultTemplate = args => `<eg-darkmode-toggle label="${args.label}" />`;
export const basic = DefaultTemplate.bind({});
basic.args = { label: 'darkmode theme' };

export const customized = DefaultTemplate.bind({});
customized.args = { label: 'darkmode theme' };
customized.decorators = [
  story => `
  <style>
    eg-darkmode-toggle {
      background-color: goldenrod;
    }

    eg-darkmode-toggle[aria-checked='true'] {
      background-color: blue;
      color: blue;
    }

    eg-darkmode-toggle::part(toggle) {
      background-color: lemonchiffon;
    }

    eg-darkmode-toggle[aria-checked='true']::part(toggle) {
      background-color: aliceblue;
    }
  </style>
  ${story()}
`,
];

const IconTemplate = args => `
  <eg-darkmode-toggle label="${args.label}">
    <img slot="iconIdle" src="/images/theme-icon-light.svg" />
    <img slot="iconActive" src="/images/theme-icon-dark.svg" />
  </eg-darkmode-toggle>
`;
export const withIcon = IconTemplate.bind({});
withIcon.args = { label: 'darkmode theme' };
