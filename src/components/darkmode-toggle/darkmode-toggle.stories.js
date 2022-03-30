export default {
  title: 'Darkmode Toggle',
  component: 'eg-darkmode-toggle',
  argTypes: {
    label: {
      control: 'text',
      description: 'The text which is read by a screen reader',
      default: 'darkmode theme',
    },
  },
};

const DefaultTemplate = args => `<eg-darkmode-toggle label="${args.label}" />`;
const CustomTemplate = args => `
  <eg-darkmode-toggle label="${args.label}">
    <img slot="iconIdle" src="/images/theme-icon-light.svg" />
    <img slot="iconActive" src="/images/theme-icon-dark.svg" />
  </eg-darkmode-toggle>
`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'darkmode theme',
};

export const CustomIcon = CustomTemplate.bind({});
CustomIcon.args = {
  label: 'darkmode theme',
};
