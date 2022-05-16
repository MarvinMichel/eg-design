export default {
  args: { label: 'darkmode theme' },
  argTypes: {
    label: {
      control: 'text',
      description: 'The text which is read by a screen reader',
      default: 'darkmode theme',
    },
  },
  component: 'eg-darkmode-toggle',
  description: 'Darkmode toggle examles for documentation',
  title: 'hidden_darkmode-toggle',
};

const DefaultTemplate = args => `<eg-darkmode-toggle label="${args.label}" />`;

export const customized = DefaultTemplate.bind({});
customized.decorators = [
  story => `
  <style>
    eg-darkmode-toggle {
      background: #0e141a;
    }

    eg-darkmode-toggle[active] {
      background: #28d654;
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
